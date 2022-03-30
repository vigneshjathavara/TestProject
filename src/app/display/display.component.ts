import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
selector: 'app-display',
templateUrl: './display.component.html',
styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit ,OnChanges{
@Input()
content:string="";
message:string="";
constructor() { }
ngOnInit(): void {
}
ngOnChanges(): void {
this.message=this.content;
}
}