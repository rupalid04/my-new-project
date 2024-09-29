import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
//   num1:number=0;
//   num2:number=0;
//   result:number=0;

//   substract(){
//     this.result=this.num1-this.num2
//   }
//   add(){
//     this.result=this.num1+this.num2
//   }
//   multiply(){
//     this.result=this.num1*this.num2
//   }
//   divide(){
//     this.result=this.num1/this.num2
//   }
price:number=0;
quantity:number=0;
discount:number=0;
totalprice:number=0;

tprice(){
  this.totalprice=(this.price*this.quantity)-this.discount;
}

 }
