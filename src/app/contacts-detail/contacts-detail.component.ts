import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../service/contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../service/event-bus.service';
import { CHANGE_TITLE_EVENT } from '../contacts.component';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  private contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router, private events: EventBusService) {
  }

  ngOnInit() {
    let id = this.route.params
      .switchMap(params => this.contactsService.getContact(params['id']))
      .subscribe((contact: Contact) => {
        this.contact = contact;
        this.events.emit(CHANGE_TITLE_EVENT, contact.name);
      });
  }

  private navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }

  private navigateToList() {
    this.router.navigate(['']);
  }

}
