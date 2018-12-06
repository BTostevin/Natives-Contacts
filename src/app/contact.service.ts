import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private messageService: MessageService) { }
  
  // these commented out functions did not work and caused the list of contacts not to show but I was not sure why
  getContacts(): Observable<Contact[]> {
    //this.messageService.clear();
    //this.messageService.add('ContactService: //fetched contacts');
    return of(CONTACTS);
    
  }
}
