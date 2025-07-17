import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbse',
  templateUrl: './cbse.component.html',
  styleUrls: ['./cbse.component.scss']
})
export class CbseComponent implements OnInit {
  pdfSrc='/assets/pdf/XII_CBSE_RESULT.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
