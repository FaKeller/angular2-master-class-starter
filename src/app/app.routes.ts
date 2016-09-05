import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';

export const ContactsAppRoutes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contact/:id', component: ContactsDetailComponent},
  {path: 'contact/:id/edit', component: ContactEditorComponent}
];
