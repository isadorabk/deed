import { Component, OnInit } from '@angular/core';
import { DeedService } from '../deed.service'
import { Task } from '../task-class';
import { Group } from '../group-class';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Subscription } from "apollo-client/util/Observable";



function getquery (name){
  if (name === "Codeworks"){
    return gql`
    {
      allTasks(group: "Codeworks") {
        _id
        group
        title
        content
        image
        status
        points
        userCompleted
        prove {
          text
          image
        }
      }
    }
  `;
  } else if (name === "Our House") {
      return gql`
    {
      allTasks(group: "Our House") {
        _id
        group
        title
        content
        image
        status
        points
        userCompleted
        prove {
          text
          image
        }
      }
    }
  `;
  } else if (name === "Poblenou") {
    return gql`
    {
      allTasks(group: "Poblenou") {
        _id
        group
        title
        content
        image
        status
        points
        userCompleted
        prove {
          text
          image
        }
      }
    }
  `;
  }
}

function getqueryimage(group) {
  if (group === "Codeworks") {
    return gql`
      {
        allGroups(name: "Codeworks") {
          _id
          name
          type
          users
          delegates
          tasks
          icon
          coverPhoto
        }
      }
    `;
  } else if (group === "Our House") {
    return gql`
    {
      allGroups(name: "Our House") {
        _id
        name
        type
        users
        delegates
        tasks
        icon
        coverPhoto
      }
    }
  `;
  } else if (group === "Poblenou") {
    return gql`
    {
      allGroups(name: "Poblenou") {
        _id
        name
        type
        users
        delegates
        tasks
        icon
        coverPhoto
      }
    }
  `;
  }
}

const createTask = gql`
  mutation {
    createTask(
      group: "Codeworks"
      title: "Washing the dishes"
      content: "do the dishes!"
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYj1pL1Z0wPCagDhG93HyaXFClCA-d5jwuRDspPoNMNRcvfdFn"
      status: "To do"
      points: 15
    ) {
      _id
    }
  }
`;


@Component({
  selector: "app-community",
  templateUrl: "./community.component.html",
  styleUrls: ["./community.component.css"]
})
export class CommunityComponent implements OnInit {
  goBack(): void {
    this.location.back();
  }
  group: string;
  tasks: Task[];
  loading: boolean;
  groupImage: string;

  private querySubscription: Subscription;

  status: boolean = false;
  status2: boolean = false;
  // constructor(group, name, content, karma) {
  //   this.group = group;
  //   this.title = name;
  //   this.content = content;
  //   this.points = karma;
  // }

  showForm() {
    this.status = !this.status;
    console.log('work', this.status);
  }

  showForm2() {
    this.status2 = !this.status2;
    console.log('work2',this.status2);
    
  }

  submit() {
    this.status = !this.status;
    this.apollo.mutate<any>({ mutation: createTask }).subscribe();
    window.location.reload();
  }

  getData() {
    this.querySubscription = this.apollo
      .watchQuery<any>({ query: getquery(this.group) })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.tasks = data.allTasks;
      });
  }

  getImage() {
    this.querySubscription = this.apollo
      .watchQuery<any>({ query: getqueryimage(this.group) })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.groupImage = data.allGroups[0].icon;
      });
  }

  constructor(
    private deedService: DeedService,
    private route: ActivatedRoute,
    private location: Location,
    private apollo: Apollo
  ) {
    this.group = this.route.snapshot.params.group;
  }

  ngOnInit() {
    this.getData();
    this.getImage();
  }
}
