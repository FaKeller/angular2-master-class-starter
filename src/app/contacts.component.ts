import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './service/contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsAppComponent implements OnInit {

  private contacts: Contact[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService.getContacts().then((contacts) => this.contacts = contacts);
  }
}

