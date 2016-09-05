import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {

  private static API_ENDPOINT = 'http://localhost:4201/api/contacts';

  constructor(private http: Http) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(ContactsService.API_ENDPOINT)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: number|string): Observable<Contact> {
    return this.http.get(`${ContactsService.API_ENDPOINT}/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }
}
