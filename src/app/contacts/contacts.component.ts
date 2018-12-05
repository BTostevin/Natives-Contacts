import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

  
export class ContactsComponent implements OnInit {
  contact: Contact = {
    name: 'Satoshi Nakamoto',
    email: 'satoshi@bitcoin.com',
    location: 'Japan',
    primary: '0812345'
  };

  constructor() { }

  ngOnInit() {
  }

}