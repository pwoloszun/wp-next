import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>App started! {{title}}</h3>
  `
})
export class AppComponent implements OnInit {

  title: string = "webpack ng2 init 222";

  ngOnInit() {
    console.log("hello App");
  }

}
