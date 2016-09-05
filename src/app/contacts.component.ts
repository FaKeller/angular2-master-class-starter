import { Component } from '@angular/core';
import { ContactsService } from './service/contacts.service';

@Component({
  selector: 'trm-contacts-app',
  template: '<trm-contacts-header></trm-contacts-header><router-outlet></router-outlet>',
  styleUrls: ['contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsAppComponent {

}
