import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserDailogComponent } from './viewuser-dailog.component';

describe('ViewuserDailogComponent', () => {
  let component: ViewuserDailogComponent;
  let fixture: ComponentFixture<ViewuserDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
