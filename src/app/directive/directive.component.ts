import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
age:number=19;
isShow:boolean=false;

displayMore(){
  this.isShow=true;
}

removeContent(){
  this.isShow=false;
}
}
