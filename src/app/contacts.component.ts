import { Component } from '@angular/core';
import { EventBusService } from './service/event-bus.service';
import { Title } from '@angular/platform-browser';

export const CHANGE_TITLE_EVENT = 'CHANGE_TITLE_EVENT';

@Component({
  selector: 'trm-contacts-app',
  template: '<trm-contacts-header>{{title}}</trm-contacts-header><router-outlet></router-outlet>',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {

  private title: string;

  constructor(private events: EventBusService, private titleService: Title) {
  }

  ngOnInit() {
    this.events.observe<string>(CHANGE_TITLE_EVENT).subscribe(title => {
      this.title = title;
      this.titleService.setTitle(title);
    });
  }
}
