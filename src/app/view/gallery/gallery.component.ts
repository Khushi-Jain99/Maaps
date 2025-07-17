import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gallery } from 'src/app/models/gallery.model';
import { ImageService } from 'src/app/service/image/image.service';
import { ShowGalleryService } from 'src/app/service/showGallery/show-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit,OnDestroy {
  showList:boolean=true;
  images:any[];
  filterImage:Gallery[]=[];
  sub:Subscription[]=[];
  constructor(private imgService:ImageService,
    private showService:ShowGalleryService) { }

  ngOnInit(): void {
    this.sub[0]= this.imgService.imgDetailList.snapshotChanges().subscribe(
      list=>{
      this.images=  list.map(item=>{ return item.payload.val();})
      this.imgService.setCategory(this.images);
      this.filterImage=this.imgService.setFilter();
      }
      );
      this.sub[1]=this.showService.galleryChange.subscribe(val=>{
        this.showList=val;
      })
  }

  hideList(){
    this.showService.hide();
  }
  ngOnDestroy(){
    this.sub.forEach(s=>{
      s.unsubscribe();
    })
  }

}
