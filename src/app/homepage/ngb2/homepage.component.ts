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
      ,'http://dl.yzz.cn/public/images/100423/29_115236_3.jpg'
      ,'http://media-cache-ec0.pinimg.com/736x/a0/76/c8/a076c89c5e4ad57b56a2420b46143cc2.jpg'
      ,'http://www.ampedasia.com/wp-content/uploads/2015/02/ffeef6b1d069cbe76944fa6048ad1f48.jpg'
      ,'http://4.bp.blogspot.com/-ZKZsLoJn0zA/UTlId9n_o1I/AAAAAAAAbEo/WMOswgCjBlo/s1600/me005.jpg'
      ,'http://firefap.com/pics/2172/japanese-girl-stockings.jpg'
      ,'http://www.razorpics.net/nana-suzuki-humi/Beauty.anhmjn.com%20-%20116.jpg'
      ,'https://rate.nyo.me/pub/0000/38.jpg'
      ,'http://image.desk7.net/Japanese%20Actresses%20Wallpapers/3017_1280x800.jpg'
      ,'http://www.artsfon.com/download.php?file=201411/1280x800/artsfon.com-26549.jpg'
      ,'http://3.bp.blogspot.com/-4U_kIxu0W-g/UJkXzGmLpjI/AAAAAAAABBg/teTXk192Lxg/s1600/%5BCooL+GuY%5D+%7B%7Ba2zRG%7D%7D+(70).jpg'
      ,'http://gd3.alicdn.com/imgextra/i3/376848345/TB22GITbpXXXXcXXXXXXXXXXXXX-376848345.jpg'
      ,'http://www.pj-firepower.com/picgallerie/data/media/359/full_hd_asian_girls_pack_nr.2__13_.jpg'
      ,'http://cdn.brosome.com/wp-content/uploads/2011/03/Big-Boobed-Asian-Girls-42.jpg'
      ,'http://fakethebitch.com/resources/image/thumb/200641'
      ,'http://c1.img.4goo.net/mk/20111116162747638219.jpg'
      ,'http://4.bp.blogspot.com/-mXtfGSeJIcY/VPZZJP0K0zI/AAAAAAAAFkc/YwJQKpC3T58/s1600/10384_1920x1200-www.hotwalls.tk.jpg'
      ,'http://i135.photobucket.com/albums/q138/zZVinCy/Thich.jpg'
      ,'http://2.bp.blogspot.com/-sp4TRMgH5aY/T8A_NEnvkWI/AAAAAAAAZso/WlMIBdLZYDA/s1600/iD228oClkkYGh.jpg'
      ,'http://2.bp.blogspot.com/-xY0sAQEqk74/Tu6cxL1ls7I/AAAAAAAAGQ0/mhr1DGudrew/s1600/thaigirl-ellego-1004_2000idols.blogspot.com.jpg'
      ,'http://thailand-friends.net/wp-content/uploads/2015/07/Thai-Dating-websites.jpeg'
      ,'http://www.fonstola.ru/pic/201309/1920x1200/fonstola.ru-110489.jpg'

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
