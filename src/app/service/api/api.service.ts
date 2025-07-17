import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { AboutService } from '../about/about.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private aboutService:AboutService) { }

  fetchNews(){
    return this.http.get<News[]>('https://maa.eskoool.com/webservice.asmx/GetEventNews?strschoolid=1&strtype=events').subscribe((news)=>{
      this.aboutService.setNews(news);

      });
  }
}
