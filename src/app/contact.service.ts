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
  
  getContacts(): Observable<Contact[]> {
    this.messageService.add('ContactService: fetched contacts');
    return of(CONTACTS);
  }
}
