import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListsComponent } from './bank-lists.component';

describe('BankListsComponent', () => {
  let component: BankListsComponent;
  let fixture: ComponentFixture<BankListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
