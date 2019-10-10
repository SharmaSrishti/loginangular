import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Addition} from './Addition';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  integerValue = new Addition();

  num1: number;
  num2: number;
  result: number;
  constructor() {
  }

  ngOnInit() {
  }

  onsubmit() {
    this.result = this.integerValue.sum(this.num1, this.num2)
    console.log();

  }
}
