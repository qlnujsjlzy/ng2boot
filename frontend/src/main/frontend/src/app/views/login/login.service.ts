import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../user/model/user-model';

@Injectable()
export class UserLoginService {
  public userLoginURL = '/api/user/login';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http:Http){}

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public login(user:User){
    return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              console.log("user object>"+user);
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return user;
            })
            .subscribe(
                // data => {
                //     console.log("logi 请555n success>"+data);
                // },
                // error => {
                //     console.error(error);
                // }
              data=>{
                console.log("login success11111>"+data);
                console.log(JSON.stringify(user));
              },
              error => {console.log(error)},
              () => {}
            );
  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
