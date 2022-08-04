import { Component } from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private addFriendService: AddFriendService;
   languageArray:Array<string> = ['HTML', 'css','javascript','php', 'angular', 'python']
    friendModel = new Friend('','','',0,'')

  constructor() {
    
  }

  submitForm(){
     addFriend(this.friendModel)
    console.log(this.friendModel);
  }
}
