import { Component, OnInit } from '@angular/core';
import { ImageService } from './service/image/image.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Maaps';
  constructor(private imgService:ImageService){}
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
  }
  ngOnInit(){
    this.openModal();
    this.imgService.getImgDetailList();
  }

  openModal(){
    $(document).ready(function(){
      if(window.innerWidth>=576){
        $("#myModal").modal('show');
      }
      
    });
    $('#popupCarousel').carousel({
      interval: 2000,
      pause:false
    })
  }
}
