import { Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

export const ContactsAppRoutes: Routes = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      {path: '', redirectTo: 'contact/0'},
      {path: 'contact/:id', component: ContactsDetailComponent},
      {path: 'contact/:id/edit', component: ContactEditorComponent}
    ]
  }, {
    path: 'about',
    component: AboutComponent
  }
];
