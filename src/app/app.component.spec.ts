import { MockComponent } from 'ng-mocks';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed ,ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import {By} from '@angular/platform-browser'

describe('AppComponent Childern Test Using NgMock', () => {
let fixture: ComponentFixture<AppComponent>;
let hostComponent: AppComponent;
// Original type!
let searchComponentRef: SearchComponent;
let displayComponentRef: DisplayComponent;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
RouterTestingModule
],
declarations: [
AppComponent,MockComponent(SearchComponent),MockComponent(DisplayComponent)
],
schemas:[NO_ERRORS_SCHEMA]
}).compileComponents();


fixture = TestBed.createComponent(AppComponent);
hostComponent = fixture.componentInstance;
fixture.detectChanges();
const searchComponentElRef = fixture.debugElement.query(
// Original class!
By.directive(SearchComponent)
);
const displayComponentElRef = fixture.debugElement.query(
  // Original class!
  By.directive(DisplayComponent)
  );

  searchComponentRef = searchComponentElRef.componentInstance;
  displayComponentRef = displayComponentElRef.componentInstance;


});


//Smoke test
it('should create the app', () => {
expect(hostComponent).toBeTruthy();
});


it("should render MockSearchComponent",function(){
expect(searchComponentRef).toBeTruthy();
});

it("should render MockDisplayComponent",function(){
  expect(displayComponentRef).toBeTruthy();
  });

it("App Component should receive searchKey",function(){
  
  searchComponentRef.searchKeyChanged.emit("testing");

  expect(hostComponent.searchKey).toBe("testing");

  });

  it("Display Component should receive searchKey",function(){
  
    hostComponent.searchKey = "test";
  
    displayComponentRef.ngOnChanges();
    fixture.detectChanges();

    expect(displayComponentRef.content).toBe("test");
  
    });

});