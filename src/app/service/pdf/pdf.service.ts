import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  pdfDetailList:AngularFireList<any>;
  constructor(private firebase:AngularFireDatabase) { }
  getPdfDetailList(){
    this.pdfDetailList=this.firebase.list('pdfDetails');  
  }
}
