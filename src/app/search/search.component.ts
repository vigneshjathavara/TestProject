import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output()
searchKeyChanged=new EventEmitter<string>();
constructor() { }
ngOnInit(): void {
}
notifyWhenSearchKeyChanged(key:string){
this.searchKeyChanged.emit(key);
}
}