import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  firstname: string;
  surname: string;

  constructor(private first: string, private last: string) {
    this.firstname = first;
    this.surname = last;

    this.firstname = this.firstname.concat(' Fake_SurName');

  }

  test(): string {
    return 'hello ' + this.firstname;
  }
}

