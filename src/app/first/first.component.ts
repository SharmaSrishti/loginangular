import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public first =  'srishti';

  ngOnInit() {
  }

  constructor(private router: Router) {}


  submit() {
    log('...........inside submit')
    this.router.navigate(['user']).then( (e) => {
      if (e) {
        console.log( 'Navigation is successful!');
      } else {
        console.log( 'Navigation has failed!');
      }
    });
    // this.router.navigate(['user']);  // define your component where you want to go

  }
}
