import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private addFriendService: AddFriendService;
  languageArray: Array<string> = ['HTML', 'css', 'javascript', 'php', 'angular', 'python']
  friendModel = new Friend(null, null, null, null, null)

  constructor() {
      this.addFriendService = new AddFriendService(new HttpClient())
  }

  // set FriendService(friendService: AddFriendService){
  //   this.addFriendService = friendService
  // }

  submitForm() {
    // addFriend(this.friendModel)
    // console.log(this.friendModel);
  }
}

