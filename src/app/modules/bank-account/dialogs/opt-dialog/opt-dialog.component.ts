import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BankListInterface } from '../../components/bank-lists/bank-lists.component';

@Component({
  selector: 'app-opt-dialog',
  templateUrl: './opt-dialog.component.html',
  styleUrls: ['./opt-dialog.component.scss']
})
export class OptDialogComponent implements OnInit {

  otp!:Number;
  title:String = "";
  accName:String = "";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BankListInterface,
    private dialogRef : MatDialogRef<OptDialogComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.title = this.data.bankName;
    this.accName = this.data.accounts;
  }

  linkedAccount(){
    if(!this.otp){
      this.snackBar.open("Please Enter OPT First!", '', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: "bottom",
        politeness: 'polite',
        panelClass: 'snackbar-info'
      })
      return;
    }
    this.dialogRef.close(true)
  }

}
