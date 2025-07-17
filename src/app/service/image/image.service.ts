import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs';
import { Gallery } from 'src/app/models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgDetailList:AngularFireList<any>;
  images:Gallery[]=[];
  newObject:{};
  keys:string[];
  filterImage:Gallery[]=[];
  imageChange=new BehaviorSubject<Gallery[]>([]);

  constructor(private firebase:AngularFireDatabase) { }
  getImgDetailList(){
    this.imgDetailList= this.firebase.list('imageDetails');  

  }

  
  setGallery(){
    
    
  }

  setCategory(image:Gallery[]){
    this.images=image;
    this.newObject = image.reduce(function(acc, obj) {
      let key=obj['caption'];
      if(!acc[key]){
        acc[key]=[];
      }
      acc[key].push(obj);
      return acc;
    },{});
    this.keys=Object.keys(this.newObject);
  } 
  
  setFilter(){
   for(let i=0;i<this.keys.length;i++){
      this.filterImage[i]=this.newObject[this.keys[i]][0];
    }
    return this.filterImage;
  }
  getSingleTypeImages(id:string){
    return this.newObject[id];
  }
  
}
