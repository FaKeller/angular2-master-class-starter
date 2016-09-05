import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../service/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trm-contact-editor',
  templateUrl: 'contact-editor.component.html',
  styleUrls: ['contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  private contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params['id']).subscribe(contact => this.contact = contact);
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(() => this.router.navigate(['/contact', contact.id]));
  }

}
