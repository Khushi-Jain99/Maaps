import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/service/pdf/pdf.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private service:PdfService) { }

  ngOnInit(): void {
    this.service.getPdfDetailList();
  }

}
