import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';
import { ContactsAppRoutes } from './app.routes';
import { ContactsService } from './service/contacts.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { FormsModule } from '@angular/forms';
import { API_ENDPOINT } from './app.tokens';
import { ContactDetailsUiComponent } from './contact-details-ui/contact-details-ui.component';
import { EventBusService } from './service/event-bus.service';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent, ContactEditorComponent, ContactDetailsUiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    {provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'},
    EventBusService,
    Title
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
