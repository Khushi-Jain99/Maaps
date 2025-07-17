import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowGalleryService {
  private showGallery:boolean=true;
  galleryChange=new BehaviorSubject<boolean>(true);
  constructor() { }

  show(){
    this.showGallery=true;
    this.galleryChange.next(true);
  }
  hide(){
    this.showGallery=false;
    this.galleryChange.next(false);
  }
}
