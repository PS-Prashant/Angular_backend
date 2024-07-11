import { Component, OnInit } from '@angular/core';
import { ServerCallService } from '../server-call.service';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  post: any;
  userData: any;

  constructor(private serverCallService: ServerCallService) {}

  ngOnInit() {
    this.getData();
    this.getUserData();
  }

  getData() {
    this.serverCallService.getData('get', undefined, undefined).subscribe({
      next: (res) => {
        this.post = res;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getUserData() {
    this.serverCallService.getUserData('get').subscribe({
      next: (res) => {
        this.userData = res;
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
