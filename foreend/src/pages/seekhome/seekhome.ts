import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SeekhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seekhome',
  templateUrl: 'seekhome.html',
})
export class SeekhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  row1="class1";
  class = [{img:"assets/imgs/class1.png",name:"",val:"class1"},
  {img:"assets/imgs/class2.png",name:"",val:"class2"},
  {img:"assets/imgs/class3.png",name:"",val:"class3"},
  {img:"assets/imgs/class4.png",name:"",val:"class4"},];
  class0 = [{img:"assets/imgs/class5.png",name:"",val:"class5"},
  {img:"assets/imgs/class6.png",name:"",val:"class6"},
  {img:"assets/imgs/class7.png",name:"",val:"class7"},
  {img:"assets/imgs/class8.png",name:"计算机",val:"class8"}];
  items = [];
  class1=[{job:'前端开发工程师',money:'5k',school:'本科',age:'不限',num:'10人',name:"百度"}];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeekhomePage');
    this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getSort').subscribe(data=>{
      var message = JSON.parse(data['_body']);
      for(let i=0;i<4;i++){
        this.class[i].name = message[i].name;
        this.items[i] = message[i].name;
        this.items[i+4] = message[i+4].name;
      }
      for(let i=0;i<4;i++){
        this.class0[i].name =message[i+4].name;
      }
      // this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getpeople?&sort='+message[0].name).subscribe(data=>{
      //   var message = JSON.parse(data['_body']);
      //   for(var i=0;i<message.length;i++){
      //     this.class1[i] = message[i];
      //   }
      // })
    })   
  }
  sort(item){
    // this.http.get('http://127.0.0.1:3000/user/getMessage_recruit/getpeople?&sort='+item.name).subscribe(data=>{
    //     var message = JSON.parse(data['_body']);
    //     console.log(message);
    //     for(var i=0;i<message.length;i++){
    //       this.class1 = [];
    //       this.class1[i] = message[i];
    //     }
    // })
  }
  job(item){
    // this.navCtrl.push('RecseekerPage',{title:item});
  }
//延时加载
  doInfinite(infiniteScoll){
    setTimeout(()=>{
      infiniteScoll.complete();
      if(this.class1.length>50){
        infiniteScoll.enable(false);
      }
    },500);
  }
}
