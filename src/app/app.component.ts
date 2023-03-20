import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // add inline <html> !recommended
  // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // add multiple styles
  // styles: ['']
})
export class AppComponent {
  name ='ksb96';
  imageURL = 'https://picsum.photos/200/300?grayscale';

  // event binding
  changeImage(e: KeyboardEvent){
    this.imageURL = (e.target as HTMLInputElement).value;
  }

  //emitting events
  logImg(event: string) {
    console.log(event)
  }
}