import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../service/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBusService } from '../service/event-bus.service';
import { CHANGE_TITLE_EVENT } from '../contacts.component';

@Component({
  selector: 'trm-contact-editor',
  templateUrl: 'contact-editor.component.html',
  styleUrls: ['contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  private contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactsService, private router: Router, private events: EventBusService) {
  }

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params['id']).subscribe(contact => {
      this.contact = contact
      this.events.emit(CHANGE_TITLE_EVENT, 'Editing: ' + contact.name);
    });
  }

  cancel(contact: Contact) {
    this.gotoDetails(contact);
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(() => this.gotoDetails(contact));
  }

  private gotoDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

}
