import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  pdfSrc='/assets/pdf/teacher_list.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
