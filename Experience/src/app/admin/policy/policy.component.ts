import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatDialog, MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';
import { ToasterService } from '../../shared/services/toaster.service';
import { Router } from '@angular/router';
import { PolicyService } from '../../shared/services/policy.service';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { Policy } from '../../shared/models/policy';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  displayedColumns = ['name','email','policynumber','claimnumber', 'status','actions'];
  exampleDatabase: PolicyService| null;
  dataSource: ExampleDataSource | null;

  index: number;
  id:number;
  name: string;
  type: string;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public policyService: PolicyService,
    private router:Router,
    private toasterService:ToasterService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  public loadData() {
    this.exampleDatabase = new PolicyService(this.httpClient, this.toasterService);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  addNew(policy:Policy): void {
    console.log(policy);
     let dialogRef = this.dialog.open(AddpolicyComponent, {
       data: { policy:policy }
      });
 
      dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed'+result);
        if(result){
         this.exampleDatabase.dataChange.value.push(this.policyService.getDialogData());
         this.refreshTable();
       }
      });
    }

    startEdit(i:number, id:number,name:string, email:string, policyNumber:string, claimNumber:string, status: string){
      this.name = email;
      let dialogRef = this.dialog.open(AddpolicyComponent, {
        data: { id:id, name:name, email:email, policyNumber:policyNumber,claimNumber: claimNumber,status: status}
       });
  
       dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed'+result);
         if(result){
          // When using an edit things are little different, firstly we find record inside DataService by id
          console.log(this.name);
          const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.email === this.name);
          console.log(foundIndex);
          // Then you update that record using data from dialogData (values you enetered)
          this.exampleDatabase.dataChange.value[foundIndex] = this.policyService.getDialogData();
          // And lastly refresh table
          this.refreshTable();
        }
       });
    }

    viewPolicy(policy:Policy){
      let dialogRef = this.dialog.open(ViewpolicyComponent, {
        data: { id:policy.id, name:policy.name, email:policy.email}
       });
  
       dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed'+result);
       });
    }
  

  deleteItem(i: number, id:number, name: string) {
    console.log("--------"+i+"------"+id+"-----");
    this.index = i
    this.id =id;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {id: id, name: name, type: "policy" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("----Result----"+result);
      if (result) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  // If you don't need a filter or a pagination this can be simplified, you just use code from else block
  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }

}

export class ExampleDataSource extends DataSource<Policy> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Policy[] = [];
  renderedData: Policy[] = [];

  constructor(public _exampleDatabase: PolicyService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Policy[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllPolicy();

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((policy: Policy) => {
        const searchStr = (policy.name + policy.email).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: Policy[]): Policy[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
