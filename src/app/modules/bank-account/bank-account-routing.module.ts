import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListsComponent } from './components/bank-lists/bank-lists.component';
import { LinkBankAccountsComponent } from './components/link-bank-accounts/link-bank-accounts.component';

const routes: Routes = [
  {
    path:"",
    component: BankListsComponent,
  },
  {
    path: "link-accounts",
    component: LinkBankAccountsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule { }
