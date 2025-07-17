import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import './../../../assets/smtp/smtp.js';
import {environment} from './../../../environments/environment';
declare var Email:any;
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    let name =form.value.name;
    let phone=form.value.phone;
    let email=form.value.email;
    let message=form.value.message;
    let data=`Hi, <br>
    <strong> My Phone Number is : ${phone}. </strong> <br>
    <strong> Message : </strong> ${message}. <br>
    Thanks, <br>
    ${name}`;
    Email.send({
        Host: environment.hostName,
        Username: environment.userName,
        Password: environment.password,
      To : 'maaps.pp@gmail.com',
      From : environment.userName,
      Subject : `Query By ${email}`,
      Body : data
    }).then( message => {alert(message); form.resetForm(); } );
    $('#contactModal').modal('hide');
  }

  login(id:number){
    if(id===1){
      window.open('http://maa.eskoool.com/studentlogin.aspx');
    }
    if(id===2){
      window.open('http://maa.eskoool.com');
    }
    if(id===4){
      window.open('https://okiedokiepay.com/#!/60422a95bc40904eb6656898/entityLandingPage');
    }
    if(id===5){
      window.open('https://drive.google.com/file/d/1oWTlnKzAlCRWp5uAkZJmLJ9ZkWy9BB9f/view?usp=sharing');
    }
    if(id===6){
      window.open('https://zfrmz.com/N78EX6RHmJU27lEAyAQz');
    }
  }
  scrollTo(){
    document.getElementById('map-detail').scrollIntoView();

  }
}
