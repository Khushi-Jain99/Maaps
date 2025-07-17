import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit {
  videos:{title:string,description:string,imgUrl:string,link:string}[]=[
    {title:'Maaps /Diwali Celebration 2021',
    description:'Maaps /Diwali Celebration 2021',
    imgUrl:'/assets/img/activities/21.png',link:'https://youtu.be/XvcK-CqqNxw'},
    {title:'Children\'s Day 2021 By Teachers of MAAPS, DU block,Pitampura,Delhi',
    description:'Children\'s Day 2021 By Teachers of MAAPS, DU block,Pitampura,Delhi',
    imgUrl:'/assets/img/activities/20.png',link:'https://youtu.be/aCdWv5VRMXY'},
    {title:'HINDI DIWAS',
    description:'HINDI DIWAS',
    imgUrl:'/assets/img/activities/19.png',link:'https://youtu.be/9MCA12eb_q4'},
    {title:'JANAMASHTAMI CELEBRATION 2021/MAAPS PITAMPURA',
    description:'JANAMASHTAMI CELEBRATION 2021/MAAPS PITAMPURA',
    imgUrl:'/assets/img/activities/18.png',link:'https://youtu.be/pvucVKGDqog'},
    {title:'INDEPENDENCE DAY CELEBRATION 2021',
    description:'INDEPENDENCE DAY CELEBRATION 2021/MAHARAJA AGGARSAIN ADARSH PUBLIC SCHOOL DU BLOCK PITAMPURA DELHI',
    imgUrl:'/assets/img/activities/17.png',link:'https://youtu.be/hVHcuOU2Y_M'},
    {title:'12 July World Malala Day 2021',
    description:'12 July World Malala Day 2021',
    imgUrl:'/assets/img/activities/16.png',link:'https://youtu.be/YIkjq7hBZWw'},
    {title:'MAAPS 2021-22',
    description:'MAAPS 2021-22',
    imgUrl:'/assets/img/activities/15.png',link:'https://youtu.be/YBUH-repTBQ'},
    {title:'World Environment Day',
    description:'World Environment Day',
    imgUrl:'/assets/img/activities/6.png',link:'https://youtu.be/jiN3PAjaC3g'},
    {title:'GAUTAM BUDDHA JAYANTI',
    description:'GAUTAM BUDDHA JAYANTI',
    imgUrl:'/assets/img/activities/5.png',link:'https://youtu.be/wxpgkD4ICz4'},
    {title:'Diwali 2020',
    description:'Diwali 2020',
    imgUrl:'/assets/img/activities/4.png',link:'https://youtu.be/wrXHwmaGEqI'},
    {title:'Performing Arts Program',
    description:'Glimpses of our  MAAPCIANS',
    imgUrl:'/assets/img/activities/2.png',link:'https://www.youtube.com/watch?v=85y9XwsIUI0'},
    {title:'Gaming with words',
    description:'Its a board game designed by a language teacher to enable the students learn grammar concepts while playing and having fun. It enables the students to enhance their vocabulary skills with collaborative learning approach. The game emphasises on the concept of peer learning.  It is developed to cater the needs of children with different learning abilities.',
    imgUrl:'/assets/img/activities/1.png',link:'https://www.youtube.com/watch?v=HkxTAfdDhXU'},
    {title:'World Red Cross Day 2021',
    description:'World Red Cross Day 2021',
    imgUrl:'/assets/img/activities/3.png',link:'https://youtu.be/f9XYLtMCJyw'},
    {title:'Christmas',
    description:'Christmas',
    imgUrl:'/assets/img/activities/7.png',link:'https://www.youtube.com/watch?v=asdBN8ixdxs'},
    {title:'Children\'s Day',
    description:'Children\'s Day',
    imgUrl:'/assets/img/activities/8.png',link:'https://www.youtube.com/watch?v=_xIDIroYz1Y'},
    {title:'Dussehra 2020',
    description:'Dussehra 2020',
    imgUrl:'/assets/img/activities/9.png',link:'https://www.youtube.com/watch?v=WMU5a1SAGxc'},
    {title:'GANDHI JAYANTI',
    description:'GANDHI JAYANTI',
    imgUrl:'/assets/img/activities/10.png',link:'https://youtu.be/R6JA4rGKai0'},
    {title:'INDEPENDENCE DAY 2020',
    description:'INDEPENDENCE DAY 2020',
    imgUrl:'/assets/img/activities/11.png',link:'https://www.youtube.com/watch?v=hYWu8c5sb30'},
    {title:'MAAPCIAN VOICE 2020',
    description:'MAAPCIAN VOICE 2020',
    imgUrl:'/assets/img/activities/12.png',link:'https://www.youtube.com/watch?v=aYCJpO9rNvg'},
    {title:'MAAPS COMPOSITION 2020',
    description:'MAAPS COMPOSITION 2020',
    imgUrl:'/assets/img/activities/13.png',link:'https://www.youtube.com/watch?v=DAk6iwoMaDs'},
    {title:'JANAMASHTAMI | CELEBRATION 2020',
    description:'JANAMASHTAMI | CELEBRATION 2020',
    imgUrl:'/assets/img/activities/14.png',link:'https://www.youtube.com/watch?v=4mjctfzdqEs'},
  ]
  constructor() {
    window.scroll(0,0);
   }

  ngOnInit(): void {
   
  }

}
