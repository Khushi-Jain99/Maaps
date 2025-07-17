import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PdfService } from 'src/app/service/pdf/pdf.service';
declare var $:any;
@Component({
  selector: 'app-slc',
  templateUrl: './slc.component.html',
  styleUrls: ['./slc.component.scss']
})
export class SlcComponent implements OnInit {
  term: string;
  pdfList:any[];
  caption:string='';
  pdfUrl:string='';
  alert=false;
  message:string;
  constructor(private service:PdfService) { }

  ngOnInit(): void {
    this.service.pdfDetailList.snapshotChanges().subscribe(
      list=>{
      this.pdfList=  list.map(item=>{ return item.payload.val();})
      // console.log(this.pdfList);
      }
    );
    $('.detail').hide();
  }
  onSubmit(form:NgForm){
    $('.detail').hide();
    this.alert=false;
    if(form.invalid){
      return null;
    }
    const id=form.value.search;
    for(let item of this.pdfList){
      if(id===item.caption){
        $('.detail').show();
        this.caption=item.caption;
        this.pdfUrl=item.pdfUrl;
        form.reset();
      }
      else{
        this.alert=true;
        form.reset();
      }
    }
  }
}
