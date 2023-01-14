import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newproject';
  color="red";
  bgcolor='#FF9797';
  getcolor(){
    this.color="blue"
    this.bgcolor="green"
  }
}

  // User = [
  //   'Rutuja',
  //   'Vandana',
  //   'Roopa',
  //   'Priya',
  //   'Ritesh',
  //   'Karthik',
  //   'AkashT',
  //   'Akash',
  //   'Ashish',
  // ];
  // Userdetails = [
  //   {
  //     Name: 'Rutuja',
  //     Address: 'Kandivali',
  //     Number: '01',
  //   },
  //   {
  //     Name: 'Vandana',
  //     Address: 'Bhindar',
  //     Number: '02',
  //   },
  // ];
  // Users = [
  //   {
  //     name: 'Rutuja Patil',
  //     Address: 'Kandivali',
  //     socialaccount: ['fb', 'Insta', 'Twitter'],
  //   },
  //   {
  //     name: 'Khushi Sharma',
  //     Address: 'Malad',
  //     socialaccount: ['Insta', 'Twitter', 'fb'],
  //   },
  //   {
  //     name: 'Radha Kokitakar',
  //     Address: 'Borivali',
  //     socialaccount: ['youtube', 'fb', 'Twitter'],
  //   },
  //   {
  //     name: 'Rakesh Raut',
  //     Address: 'Dadar',
  //     socialaccount: ['gmail', 'Insta', 'youtube'],
  //   },
  //   {
  //     name: 'Amit Pawar',
  //     Address: 'Andheri',
  //     socialaccount: ['Insta', 'youtube', 'gmail'],
  //   },
  // ];

