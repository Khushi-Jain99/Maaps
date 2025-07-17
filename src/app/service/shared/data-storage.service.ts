import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallery } from 'src/app/models/gallery.model';
import { ImageService } from '../image/image.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private imgService:ImageService,private http:HttpClient) {
   }
  //  fetchImages(){
  //    console.log(1);
  //   return this.http.get<Gallery[]>('https://maapsadm-default-rtdb.firebaseio.com/imageDetails.json').pipe(
  //     map(images=>{
  //       if(images===null){
  //         return [];
  //       }
       
  //         console.log(images);
  //       return images.map(image=>{
  //         return {...image}
  //       });
  //     }),
  //     tap(images=>{
  //      this.imgService.setImages(images);
        
  //     })
  //   );
  //  }
}

