import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Gallery';

  filterBoats(){
    console.log("Boats!")
  }

  constructor() { }

  ngOnInit() {
  }

}
