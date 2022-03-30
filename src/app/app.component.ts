import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
searchKey:string="";
// onCountChange(count:number){
// console.log(`Count : ${count}`);
// }
onSearchKeyChanged(key:string){
this.searchKey=key;
}
}