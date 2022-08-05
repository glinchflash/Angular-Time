import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  languageArray: Array<string> = ['HTML', 'css', 'javascript', 'php', 'angular', 'python']
  friendModel = new Friend(null, null, null, null, null)

  constructor(private addFriendService : AddFriendService) {
  }



  submitForm() {
    let observable = this.addFriendService.addFriend(this.friendModel)
    observable.subscribe(data => console.log("succes"), error => console.error('something went wrong'))
  }
}

