import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products =[
    {id:1, name: "dove", price: "23423", color: "black", available: "available",image: '../../assets/back2.jpg'},
    {id:1, name: "clear", price: "52336", color: "gold", available: "available",image: '../../assets/back2.jpg'},
    {id:1, name: "sunsilk", price: "23423", color: "dark", available: "available",image: '../../assets/back2.jpg'},
    {id:1, name: "clicknick plus", price: "234", color: "blue", available: "available",image: '../../assets/back2.jpg'},
    {id:1, name: "hadensholder", price: "2342", color: "gray", available: "available",image: '../../assets/back2.jpg'},
    {id:1, name: "pantin", price: "2342", color: "white", available: "available",image: '../../assets/back2.jpg'},
  ];
}
