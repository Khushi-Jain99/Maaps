import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss']
})
export class MessageHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  showCard(id:number){
    if(id===1){
      $('#message1').collapse('show');
      $('#message2').collapse('hide');
      $('#message3').collapse('hide');
      $('#message4').collapse('hide');
      $('#message5').collapse('hide');
    }
    if(id===2){
      $('#message1').collapse('hide');
      $('#message2').collapse('show');
      $('#message3').collapse('hide');
      $('#message4').collapse('hide');
      $('#message5').collapse('hide');
    }
    if(id===3){
      $('#message1').collapse('hide');
      $('#message2').collapse('hide');
      $('#message3').collapse('show');
      $('#message4').collapse('hide');
      $('#message5').collapse('hide');
    }
    if(id===4){
      $('#message1').collapse('hide');
      $('#message2').collapse('hide');
      $('#message3').collapse('hide');
      $('#message4').collapse('show');
      $('#message5').collapse('hide');
    }
    if(id===5){
      $('#message1').collapse('hide');
      $('#message2').collapse('hide');
      $('#message3').collapse('hide');
      $('#message4').collapse('hide');
      $('#message5').collapse('show');
    }
  }


}
