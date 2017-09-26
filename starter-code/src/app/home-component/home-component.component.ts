import { Component, OnInit } from '@angular/core';
import { Cinema } from '../services/cinema.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  providers: [Cinema]
})
export class HomeComponentComponent implements OnInit {
  movies = this.cinema.getMovies();

  constructor(private cinema: Cinema) {
  }

  ngOnInit() {
  }

}
