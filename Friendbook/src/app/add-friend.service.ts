import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  private httpClient:HttpClient;
  private url:string ="'http://localhost:9099/'";

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  addFriend(data:Friend){
   return this.httpClient.post(this.url, data)
  }
}
