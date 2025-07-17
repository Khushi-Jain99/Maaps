import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-school',
  templateUrl: './inter-school.component.html',
  styleUrls: ['./inter-school.component.scss']
})
export class InterSchoolComponent implements OnInit {
  pdfSrc='/assets/pdf/AW_Maharaja Aggarsain_Adarsh_Public_School.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
