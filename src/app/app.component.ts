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
  currentDate = new Date();
  cost = 200;
  imageURL = 'https://picsum.photos/200/300?grayscale';
  images = [
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300?grayscale'
  ]
  blueClass = false;
  fontSize = 16;

  // event binding
  changeImage(e: KeyboardEvent){
    this.imageURL = (e.target as HTMLInputElement).value;
  }

  //emitting events
  logImg(event: string) {
    console.log(event)
  }
}