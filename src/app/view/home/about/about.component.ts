import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { AboutService } from 'src/app/service/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,OnDestroy {
  // news:{day:number,month:string,title:string,link:string}[]=[
  //   {day:30,month:'MAR',title:'Second cut off list nursery',link:'https://drive.google.com/file/d/1OBST7n1dZSrxHxH1PnfRUQjeZr4vPel9/view?usp=sharing'},
  //   {day:19,month:'MAR',title:'First Cut-off list for Nursery Admissions.',link:'https://drive.google.com/file/d/1abC_jUAF6-L36vl_9qMutv3UvVUOu9mY/view?usp=sharing'}
  // ];
  news:News[]=[]
  sub:Subscription;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.news=this.aboutService.getNews();
    this.sub=this.aboutService.newChanged.subscribe(news=>{
      this.news=news;
    });
  }


  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
