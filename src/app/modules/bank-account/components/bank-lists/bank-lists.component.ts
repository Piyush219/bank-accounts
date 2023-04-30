import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';

export interface BankListInterface {
  id : Number,
  bankName : String,
  bankLogo : String,
  hidden: Boolean,
  accounts: String,
  checked: Boolean,
}

@Component({
  selector: 'app-bank-lists',
  templateUrl: './bank-lists.component.html',
  styleUrls: ['./bank-lists.component.scss']
})
export class BankListsComponent implements OnInit {

  // Static JOSN Data For The Project

  bankListsStaticJson: BankListInterface[] = [
    { "id" : 1,
      "bankName": "Bank of Baroda",
      "bankLogo": "assets/banks/bank1.svg",
      "hidden" : false,
      "accounts" : "Account one",
      "checked" : false,

    },
    {
      "id": 2,
      "bankName": "HDFC Bank",
      "bankLogo": "assets/banks/bank2.svg",
      "hidden" : false,
      "accounts" : "Account Two",
      "checked" : false,
    },
    {
      "id": 3,
      "bankName": "Yes Bank",
      "bankLogo": "assets/banks/bank3.svg",
      "hidden" : false,
      "accounts" : "Account Three",
      "checked" : false,
    },
    {
      "id": 4,
      "bankName": "Apna Bank",
      "bankLogo": "assets/banks/bank4.svg",
      "hidden" : false,
      "accounts" : "Account Four",
      "checked" : false,
    },
    {
      "id": 5,
      "bankName": "Airtel Bank",
      "bankLogo": "assets/banks/bank5.svg",
      "hidden" : false,
      "accounts" : "Account Five",
      "checked" : false,
    },
    {
      "id": 6,
      "bankName": "Bank of Baroda 2",
      "bankLogo": "assets/banks/bank1.svg",
      "hidden" : false,
      "accounts" : "Account Six",
      "checked" : false,
    },
    {
      "id": 7,
      "bankName": "HDFC Bank 2",
      "bankLogo": "assets/banks/bank2.svg",
      "hidden" : false,
      "accounts" : "Account Seven",
      "checked" : false,
    },
    {
      "id": 8,
      "bankName": "Yes Bank 2",
      "bankLogo": "assets/banks/bank3.svg",
      "hidden" : false,
      "accounts" : "Account Eight",
      "checked" : false,
    },
    {
      "id": 9,
      "bankName": "Apna Bank 2",
      "bankLogo": "assets/banks/bank4.svg",
      "hidden" : false,
      "accounts" : "Account Nine",
      "checked" : false,
    },
    {
      "id": 10,
      "bankName": "Airtel Bank 2",
      "bankLogo": "assets/banks/bank5.svg",
      "hidden" : false,
      "accounts" : "Account Ten",
      "checked" : false,
    },
    {
      "id": 11,
      "bankName": "Yes Bank 3",
      "bankLogo": "assets/banks/bank3.svg",
      "hidden": false,
      "accounts": "Account Eight",
      "checked": false,
    },
    {
      "id": 12,
      "bankName": "Apna Bank 3",
      "bankLogo": "assets/banks/bank4.svg",
      "hidden": false,
      "accounts": "Account Nine",
      "checked": false,
    },
    {
      "id": 13,
      "bankName": "Airtel Bank 3",
      "bankLogo": "assets/banks/bank5.svg",
      "hidden": false,
      "accounts": "Account Ten",
      "checked": false,
    },
  ]

  displayedColumns: string[] = ['position', 'name', 'select'];
  dataSource = new MatTableDataSource(this.bankListsStaticJson);
  selectedBank: BankListInterface[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  customFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data = this.dataSource.data.map((item) => {
      if(item.bankName.toLowerCase().includes(filterValue.toLowerCase())){
        item.hidden = false;
      } else {
        item.hidden = true
      }

      return item
    })
  }

  enterToSelectedBank(event: MatCheckboxChange, bank: BankListInterface){
    if(event.checked){
      this.selectedBank.push(bank)
    } else {
      const index = this.selectedBank.findIndex(item => item.id === bank.id)
      console.log(index)
      if(index > -1){
        this.selectedBank.splice(index,1)
      }
    }
  }

  removeSelectedBank(bank: BankListInterface, index:number){

    // Removing From Selected List and also unchecking the checkbox in Bank List

    let listIndex = this.bankListsStaticJson.findIndex((item) => item.id == bank.id)
    if(listIndex > -1){
      this.bankListsStaticJson[listIndex].checked = false;
    }
    this.selectedBank.splice(index,1)
  }


}
