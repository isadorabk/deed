import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

import { Apollo } from 'apollo-angular';
//import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql  from 'graphql-tag';

import { User } from '../user-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  gimme():void{ this.apollo.query({ query:
    gql`{allUsers{userName}}`}).subscribe(console.log)
  }

  constructor(
    private apollo: Apollo
  ) { }


  ngOnInit() {

  }


};
