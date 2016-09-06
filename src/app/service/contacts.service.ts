import { Injectable, Inject } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { API_ENDPOINT } from '../app.tokens';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT) private API_ENDPOINT: string) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.API_ENDPOINT)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: number|string): Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(`${this.API_ENDPOINT}/${contact.id}`, contact);
  }

  search(term: string): Observable<Contact[]> {
    return this.getContacts().map((contacts: Contact[]) => {
      return contacts.filter((contact: Contact) => -1 != contact.name.toLowerCase().indexOf(term));
    });
  }
}
