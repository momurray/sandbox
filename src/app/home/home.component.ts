import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers  } from '@angular/http'
import { HttpBackend } from '@angular/common/http/src/backend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string='m.murray@pobox.com';
  password:string='Napoleon3rd#';

  constructor(private http:Http) { }

  ngOnInit() {
  }

onLogin(){
  const body = JSON.stringify({ username: this.username, password: this.password });
  const headers = new Headers({'Content-Type': 'application/json'});
  const options = new  RequestOptions({headers: headers});
  this.http.post("https://oqlist.co.uk/Login", body, options).subscribe((json:any)=>{
    console.log(json);
  },(error:any)=>{
    console.log(error);
  })
}
}
