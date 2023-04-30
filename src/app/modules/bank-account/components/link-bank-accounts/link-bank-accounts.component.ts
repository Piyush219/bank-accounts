import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OptDialogComponent } from '../../dialogs/opt-dialog/opt-dialog.component';
import { BankListInterface } from '../bank-lists/bank-lists.component';

@Component({
  selector: 'app-link-bank-accounts',
  templateUrl: './link-bank-accounts.component.html',
  styleUrls: ['./link-bank-accounts.component.scss']
})
export class LinkBankAccountsComponent implements OnInit {

  routeData:any = null;
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) 
  { 
    this.routeData = this.router.getCurrentNavigation()?.extras.state
    console.log("ROUTE", this.routeData)
    
  }

  ngOnInit(): void {
    console.log(this.routeData)
  }

  openOtpPopup(data: BankListInterface, index:number){
    const dialogRef = this.dialog.open(OptDialogComponent,{
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.routeData[index].accountLinked = true
      }
    });
  }

  removeLinkedAccount(index:number){
    this.routeData[index].accountLinked = false
  }

}
