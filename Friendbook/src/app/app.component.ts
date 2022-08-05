import {Component,OnInit} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  languageArray: Array<string> = ['HTML', 'css', 'javascript', 'php', 'angular', 'python']
  friendModel:Friend = new Friend(null, null, null, null, null)
  allFriends:Promise<any>|string = "";
  constructor(private addFriendService : AddFriendService) {
  }

  ngOnInit(): any {
    this.getAllFriends('http://localhost:9099/allFriends')

  }

  submitForm() {
    let observable = this.addFriendService.addFriend(this.friendModel)
    observable.subscribe(data => this.getAllFriends('http://localhost:9099/allFriends'), error => console.error('something went wrong'))
  }

  async getAllFriends(url:string):Promise<any>{
    await fetch(url,{headers:{'Content-Type':'application.json'}})
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        this.allFriends = response.json()
        console.log(this.allFriends);
        return this.allFriends
      })
  }


}

