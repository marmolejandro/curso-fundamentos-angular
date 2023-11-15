import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Alejandro';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Alejandro',
    age: 17,
    avatar: 'https://source.unsplash.com/random'
  }
  names: string[] = ['Alejo', 'Andres', 'Victor', 'Luz'];

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  newName = '';
  products: Product[] = [
    {name: 'El mejor juguete', price: 565, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete2', price: 566, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete3', price: 567, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete4', price: 568, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete5', price: 569, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete5', price: 569, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete5', price: 569, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete5', price: 569, image: 'https://source.unsplash.com/random'},
    {name: 'El mejor juguete5', price: 569, image: 'https://source.unsplash.com/random'}
  ];

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
