import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBankAccountsComponent } from './link-bank-accounts.component';

describe('LinkBankAccountsComponent', () => {
  let component: LinkBankAccountsComponent;
  let fixture: ComponentFixture<LinkBankAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBankAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
