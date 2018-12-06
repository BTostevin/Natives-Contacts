import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    selectedContact: Contact;

    contacts: Contact[];
    
    constructor(private contactService: ContactService) { }
    
    // makes sure that the list of contacts is displayed on entry
    ngOnInit() {
        this.getContacts();
    }

    // assign to currently selected contact
    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    // gets list of contacts
    // subscribe allows the callback to work from the remote server
    getContacts(): void {
        this.contactService.getContacts()
            .subscribe(contacts => this.contacts = contacts);
    }
}