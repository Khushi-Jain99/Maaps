import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { ImageService } from 'src/app/service/image/image.service';
import { DataStorageService } from 'src/app/service/shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService,private imgService:ImageService,private sharedService:DataStorageService) { }

  ngOnInit(): void {
    this.apiService.fetchNews();
   
    //this.sharedService.fetchImages().subscribe();
  }

}
