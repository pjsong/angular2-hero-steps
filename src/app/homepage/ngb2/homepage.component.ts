import { Component } from '@angular/core';

// webpack html imports
let template = require('./homepage.component.html');

@Component({
  selector: 'carousel-demo',
  template: template,
  styleUrls: ['./homepage.component.scss']
})
export class Homepage {
  public myInterval:number = 2000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    // this.addSLideLoop();Mm
    this.addSlideManual();

  }

  public addSlideManual(): void{
    let imageUrls = [
      // '/zombie/images/601.jpeg'
      'http://172.18.0.3/static/images/vendor/front/me005.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/zhangxinyu04.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/fonstola.ru-110489.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/Thai-Dating-websites.jpeg'
      ,'http://172.18.0.3/static/images/vendor/front/78d86046c1594b97b89d0d7dafdd3d77.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/i590.photobucket.com--albums--ss349--mulyono-xu--12152209-1-4J05.jpg.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/20111116162747638219.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/iD228oClkkYGh.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/TB22GITbpXXXXcXXXXXXXXXXXXX-376848345.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/i201-photobucket-com-albums-aa300-baochaupy-16.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/Big-Boobed-Asian-Girls-42.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/japanese-girl-stockings.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/38.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/thaigirl-ellego-1004_2000idols.blogspot.com.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/hot_saaya_irie_pictures_25.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/12152209-1-26005.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/s-media-cache-ak0.pinimg.com--736x--59--95--d8--5995d8fd60f5521741c45b0d3869342c.jpg.jpg'
      ,'https://rate.nyo.me/pub/0000/38.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/ffeef6b1d069cbe76944fa6048ad1f48.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/3017_1280x800.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/japanese-girl-71586.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/full_hd_asian_girls_pack_nr.2__13_.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/nozomisasaki005.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/a076c89c5e4ad57b56a2420b46143cc2.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/ShokoNakagawa-PlayStationVita-Japan-2.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/ShokoNakagawa-PlayStationVita-Japan-2.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/artsfon.com-26549.jpg'
      ,'http://172.18.0.3/static/images/vendor/front/[CooL%20GuY]%20%7B%7Ba2zRG%7D%7D%20(70).jpg'
      ,'http://172.18.0.3/static/images/vendor/front/Beauty.anhmjn.com%20-%20116.jpg'
    ]
    for(let i = 0;i< imageUrls.length; i++){
      this.slides.push({image: imageUrls[i], text: i})
    }

  }

  public addSLideLoop(): void {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

public addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      // image: `./../../../../public/images/${newWidth}.jpg`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }
}
