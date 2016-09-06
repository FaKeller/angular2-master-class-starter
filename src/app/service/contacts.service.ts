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
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: number|string): Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact);
  }

  public search(terms: Observable<string>, debounceMs = 400): Observable<Contact[]> {
    return this.awesomeSearch<Contact[]>(terms, (term) => this.rawSearch(term), debounceMs);
  }

  private rawSearch(term: string): Observable<Contact[]> {
    return this.http.get(`${this.API_ENDPOINT}/search?text=${term}`)
      .map(res => res.json())
      .map(data => data.items);
  }

  // reusable search observable builder
  private awesomeSearch<T>(terms$: Observable<string>,
                           search: (term: string) => Observable<T>,
                           debounceMs = 250): Observable<T> {
    return terms$.debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(term => search(term));
  }
}
