import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankListsComponent } from './components/bank-lists/bank-lists.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LinkBankAccountsComponent } from './components/link-bank-accounts/link-bank-accounts.component';
import { OptDialogComponent } from './dialogs/opt-dialog/opt-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BankListsComponent,
    LinkBankAccountsComponent,
    OptDialogComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
  ]
})
export class BankAccountModule { }
