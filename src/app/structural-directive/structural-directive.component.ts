import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
courses:string[]=["Angular developer","software testing", "salesforce develpoment","Devops","Aws","Full stack developer"];

products:Product[]=[
  {productName:"laptop",price:4500,quantity:2},
  {productName:"LED TV",price:6000,quantity:3},
  {productName:"Mobile",price:50000,quantity:5},
  {productName:"Tablet",price:7500,quantity:4},
]


}
interface Product{
  productName:string;
  price:number;
  quantity:number;


}


