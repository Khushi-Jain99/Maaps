import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-meet',
  templateUrl: './alumni-meet.component.html',
  styleUrls: ['./alumni-meet.component.scss']
})
export class AlumniMeetComponent implements OnInit {
  pdfSrc='/assets/pdf/MAAPS_ALUMNI.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
