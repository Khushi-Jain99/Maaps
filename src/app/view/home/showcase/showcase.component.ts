import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  isLoading:boolean[]=[];
  constructor() { }

  ngOnInit(){
   this.setLoader();
  }
  setLoader(){
    for(let i=0;i<4;i++){
      this.isLoading.push(true);
    }
  }
  hideLoader(i:number){
    this.isLoading[i]=false;
  }
}
