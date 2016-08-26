import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

class Person {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-web-elements',
  templateUrl: 'web-elements.component.html',
  styleUrls: ['web-elements.component.css']
})
export class WebElementsComponent implements OnInit {
  people: Person[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this._getJSON('https://demo.vaadin.com/demo-data/1.0/people')
      .subscribe(json => this.people = json.result);
  }

  _getJSON(url: string): Observable<any> {
    return this.http.get(url)
      .map((res: Response) => res.json());
  }
}
