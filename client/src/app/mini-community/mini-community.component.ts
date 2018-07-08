import { Component, OnInit, Input } from '@angular/core';

import { User } from "../user-class";

@Component({
  selector: "app-mini-community",
  templateUrl: "./mini-community.component.html",
  styleUrls: ["./mini-community.component.css"]
})
export class MiniCommunityComponent implements OnInit {
  @Input() karmas: {
    group: string;
    karmaPoint: number;
    image: string;
    _id: string;
  }[]

  constructor() {}

  ngOnInit() {
    
  }
}
