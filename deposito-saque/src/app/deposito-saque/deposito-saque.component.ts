import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito-saque',
  templateUrl: './deposito-saque.component.html',
  styleUrls: ['./deposito-saque.component.css']
})
export class DepositoSaqueComponent implements OnInit {
  accountFunds = 200;
  
  constructor() { }

  ngOnInit(): void {
  }

  deposit() {
    var depInput = <HTMLInputElement> document.getElementById("currencyInput");
    var depositValue = parseFloat(depInput.value);

    if (depositValue > 0)
      this.accountFunds += depositValue;
  }
  
  withdraw() {
      var depInput = <HTMLInputElement> document.getElementById("currencyInput");
      var withdrawValue = parseFloat(depInput.value);

      if (withdrawValue <= this.accountFunds && withdrawValue > 0) {
        this.accountFunds -= withdrawValue;
      }
      else {
        alert("Not enough funds.");
      }

  }
}
