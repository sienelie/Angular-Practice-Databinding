import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewServer = false;
  userCreationStatus = '';
  userName: string;

  constructor() {
    
  }

  onCreateUser () {
    this.userCreationStatus = this.userName + " was added!";
  }

  onUpdateServerName (event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}


