import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACT_DATA } from '../data/contact-data';

@Injectable()
export class ContactsService {

  private contacts: Contact[] = CONTACT_DATA;

  getContacts(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      resolve(this.contacts);
    });
  }

  getContact(id: number|string): Promise<Contact> {
    return new Promise((resolve, reject) => {
      var contact = this.contacts.filter((cur: Contact) => cur.id == id);
      if (contact.length > 0) {
        resolve(contact[0]);
      } else {
        reject();
      }
    });
  }
}
