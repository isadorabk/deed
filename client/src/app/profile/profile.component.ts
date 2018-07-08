import { Component, OnInit } from '@angular/core';
import { User } from '../user-class'
import { DeedService } from '../deed.service';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';
import { Subscription } from 'apollo-client/util/Observable';

const queryies = gql`
  {
    allUsers(userName: "isadorabk") {
      firstName
      userName
      lastName
      city
      image
      groups
      karmas {
        group
        karmaPoint
        image
      }
    }
  }
`;



const createGroup = gql`
  mutation {
    createGroup (
      name: "Poblenou"
      type: "Neighbourhood"
      icon: "https://www.appian.com/wp-content/uploads/2017/04/careers-icon-community.png"
    ) {
      _id
    }
  }
`;

const updateUser = gql`
  mutation {
    updateUserGroup(
      userName: "isadorabk"
      groups: "Poblenou"
    ) {
      _id
    }
  }
`;

const updateKarma = gql`
  mutation {
    updateKarma(
      userName: "isadorabk"
      input: {
        group: "Poblenou"
        karmaPoint: 50
        image: "https://www.appian.com/wp-content/uploads/2017/04/careers-icon-community.png"
      }
    ) {
      _id
    }
  }
`;






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  goBack(): void {
    this.location.back()
  }

  status: boolean = false;

  showForm() {
    this.status = !this.status;
  }

  submit() {
    this.status = !this.status;
    this.apollo.mutate<any>({ mutation: createGroup })
      .subscribe()
    this.apollo.mutate<any>({ mutation: updateUser })
      .subscribe()
    this.apollo.mutate<any>({ mutation: updateKarma })
      .subscribe()
    window.location.reload();
  }



  user: User;
  loading: boolean;

  // fetch the user data and display it

  private querySubscription: Subscription;


  constructor(
    private deedService: DeedService,
    private route: ActivatedRoute,
    private location: Location,
    private apollo: Apollo,

  ) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: queryies
    })
      .valueChanges
      .subscribe(({data, loading }) => {
        this.loading = loading;
        this.user = data.allUsers[0]
      });
  }

}
