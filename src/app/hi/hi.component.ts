import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('tris dep zai')
  }
  a = 0;
  b = 0;
  user = {
    name: 'tri',
    age: 20,
  }
  phepCong(num1: number, num2: number): number {
    return num1 + num2
  }
}
