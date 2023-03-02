import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count:number = 0;
  counter:number = 0; 
  hidden:boolean = true;

  onClick(){
    this.count++;
  }

  onDoubleClick()
  {
    if(this.hidden == true)
    {
      this.hidden = false;
    }
    else{
      this.hidden = true;
  }

}
}
