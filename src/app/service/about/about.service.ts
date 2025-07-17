import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { News } from 'src/app/models/news.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private news:News[]=[];
  newChanged=new Subject<News[]>();
  private newsEvent:News[]=[];
  constructor() { }
  setNews(news:News[]){
    this.news=news;
    this.news=this.news.filter(path=>{
      path.imgPath=path.imgPath.replace('?STRSCHOOLID=1u0026STRTYPE=EVENTS','');
      return path;
    });
    this.newChanged.next(this.news.slice());
  }
  getNews(){
    return this.news;
  }
  
  xmlToJson(xml:any) {
    // Create the return object
    var obj = {};
  
    if (xml.nodeType == 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      // text
      obj = xml.nodeValue;
    }
  
    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
      return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
        return text + node.nodeValue;
      }, "");
    } else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}
