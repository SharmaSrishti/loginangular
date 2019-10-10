import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from '../details/details.component';
import {DetailServiceService} from '../detail-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  // detailm = new DetailModule('Srishti', 'Azure');

  public first = 'srishti';
  platform: any;
  details = new DetailServiceService('amit', 'a');

  ngOnInit() {
    this.first = this.details.test();
  }

  constructor(private router: Router) {


  }


  onSubmit(): void {

    //  log('Selected Platform...')


    // log('Selected Platform ', form)
    this.router.navigate(['user']).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
    // this.router.navigate(['user']);  // define your component where you want to go

  }

  //  perform() {
  //  log('Selected Platform ', this.platform.value);

  //  }
}
