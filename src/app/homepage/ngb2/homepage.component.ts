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
    let imageUrls =[
      'http://i201.photobucket.com/albums/aa300/baochaupy/16.jpg'
      ,'http://s-media-cache-ak0.pinimg.com/736x/59/95/d8/5995d8fd60f5521741c45b0d3869342c.jpg'
      ,'http://40.media.tumblr.com/2baeef29f79603b3e7aacadc47c9c389/tumblr_nis1wwtRIO1tf4t56o1_500.jpg'
      ,'http://i1.wp.com/i590.photobucket.com/albums/ss349/mulyono-xu/12152209-1-4J05.jpg'
      ,'http://media-cache-ec0.pinimg.com/736x/8b/e0/a9/8be0a980a008bada21b90821b91fdf9d.jpg'
      ,'http://good-wallpapers.com/wallpapers/13768/Girls%20Generation.jpg'
      ,'http://www.espier.org/files/20120823/people/78d86046c1594b97b89d0d7dafdd3d77.jpg'
      ,'http://www.celebwallpaper.org/data/media/3050/hot_saaya_irie_pictures_25.jpg'
      ,'http://japangirls.online/wp-content/uploads/2016/04/view_bannerphpid27733_thumbnailtypepng.png'
      ,'http://images.wallpino.com/070-075/japanese-girl-71586.jpg'
      ,'http://mypopstars.com/wp-content/uploads/2009/03/nozomisasaki005.jpg'
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
