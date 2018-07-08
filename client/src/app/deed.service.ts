import { Injectable } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

@Injectable({
  providedIn: 'root'
})
export class DeedService {

  getData(query) { 
    fetch('http://3000/graphql', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(query), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => data)
  }
  

  constructor() { }
}
