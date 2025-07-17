import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  pdfSrc='/assets/pdf/holidays.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
