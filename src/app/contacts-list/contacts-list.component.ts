import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../service/contacts.service';
import { Contact } from '../models/contact';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Contact[]>;

  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contacts = this.terms$
      .debounceTime(250)
      .distinctUntilChanged()
      .switchMap(term => this.contactsService.search(term))
      .merge(this.contactsService.getContacts());
  }

}
