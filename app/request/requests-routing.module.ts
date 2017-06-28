import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { RequestListComponent }  from './request-list/request-list.component';
import { RequestComponent }  from './request-detail/request.component';
import { RequestNewComponent }  from './request-create/request-new.component';
import { RequestEditComponent }  from './request-edit/request-edit.component';

const routes: Routes = [
 { path: 'requests',
    component: RequestsComponent,
    children: [
            { path: '', component: RequestListComponent },
            { path: 'create', component: RequestNewComponent },
            { path: 'edit/:id', component: RequestEditComponent },
            { path: ':id', component: RequestComponent }
    ]
 },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})
export class RequestsRoutingModule { }

export const routableComponents = [
                RequestComponent, RequestsComponent,
                RequestListComponent, RequestEditComponent,
                RequestNewComponent
  ];
 // tslint:disable-next-line:no-trailing-whitespace
