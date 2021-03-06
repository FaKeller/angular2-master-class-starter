import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../service/contacts.service';
import { Contact } from '../models/contact';
import { Observable, Subject } from 'rxjs';
import { EventBusService } from '../service/event-bus.service';
import { CHANGE_TITLE_EVENT } from '../contacts.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Contact[]>;

  private activeContact: number;

  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService, private events: EventBusService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events.emit(CHANGE_TITLE_EVENT, 'Contacts');
    this.contacts = Observable.merge(
      this.contactsService.getContacts().takeUntil(this.terms$),
      this.contactsService.search(this.terms$)
    );
  }

  private isActive(contact: Contact) {
    return contact.id == this.activeContact;
  }

}
