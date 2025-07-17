import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit,OnDestroy {
  isverified=false;
  reg:{regno:number}[];
  constructor(private regService:RegistrationService) { }

  ngOnInit(): void {
    this.reg=this.regService.getReg();
  }
  onSubmit(form:NgForm){
    if(form.invalid){
      return;
    }
    let number=form.value.regno;
    for(let no of this.reg){
      if(no.regno==number){
        this.isverified=true;
        form.reset();
      }
    }
    form.reset();
  }
  ngOnDestroy(){
    this.isverified=false;
  }

}
