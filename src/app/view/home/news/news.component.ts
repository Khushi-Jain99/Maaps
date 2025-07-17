import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setModal(id:number,name:string,url:string){
    if(id===1){
      $(document).ready(function(){
        $(".modal-title").text(name);
        $(".modal-video").attr('src',url);
      });
    }
    
  }
}
