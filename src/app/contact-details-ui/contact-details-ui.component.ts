import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contact-details-ui',
  templateUrl: 'contact-details-ui.component.html',
  styleUrls: ['contact-details-ui.component.css']
})
export class ContactDetailsUiComponent {

  @Input() private contact: Contact;

  @Output() private edit = new EventEmitter<Contact>();
  @Output() private back = new EventEmitter<any>();
}
