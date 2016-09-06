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
    this.contacts = this.contactsService.getContacts();
    this.terms$.asObservable().debounceTime(250).distinctUntilChanged().subscribe(term => this.search(term));
  }

  search(term: string): void {
    this.contacts = this.contactsService.search(term);
  }

}
