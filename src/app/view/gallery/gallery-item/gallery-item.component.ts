import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gallery } from 'src/app/models/gallery.model';
import { ImageService } from 'src/app/service/image/image.service';
import { ShowGalleryService } from 'src/app/service/showGallery/show-gallery.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit ,OnDestroy{
  id:string;
  sub:Subscription;
  image:Gallery[]=[];
  constructor(private showService:ShowGalleryService,private route:ActivatedRoute,
    private imgService:ImageService) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.image=this.imgService.getSingleTypeImages(this.id);
      }
    )
  }
  ngOnDestroy(){
    this.showService.show();
    this.sub.unsubscribe();
  }

}
