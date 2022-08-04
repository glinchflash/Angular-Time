import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;
  private url:string ="";

  constructor(http:HttpClient) {
    this.http = http;
  }

  addFriend(friend:Friend){
   return this.http.post(url, friend)
  }
}
