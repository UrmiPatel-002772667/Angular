import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Attribute } from './directives/attribute/attribute';
import { PageNotFound } from './page-not-found/page-not-found';
import { Pipes } from './pipes/pipes';
import { TemplateForm } from './forms/template-form/template-form';
import { ReactiveForm } from './forms/reactive-form/reactive-form';
import { Profile } from './profile/profile';
import { CRUD } from './crud/crud';
import { AddUser } from './crud/add-user/add-user';
import { ViewUser } from './crud/view-user/view-user';
import { UpdateUser } from './crud/update-user/update-user';
import { ResourceApi } from './resource-api/resource-api';
import { Reusable } from './component-com/reusable/reusable';
import { Parent } from './component-com/parent/parent';
import { Storage } from './storage/storage';
import { Ngif } from './directives/ngif/ngif';

export const routes: Routes = [
    //{ path: '', component: User },
    { path: '', redirectTo: 'user', pathMatch: 'full'},
    { path: 'user', component: User },
    { path: 'data-binding', component: DataBinding },
    { path: 'structural-directive', component: Directives },
    { path: 'attribute-directive', component: Attribute },
    { path: 'pipes', component: Pipes },
    { path: 'tdf', component: TemplateForm },
    { path: 'reactive-forms', component: ReactiveForm },
    { path: 'profile', component: Profile },
    { path: 'crud', component: CRUD },
    { path: 'adduser', component: AddUser },
    { path: 'viewuser/:id', component: ViewUser },
    { path: 'updateuser/:id', component: UpdateUser },
    { path: 'resourceApi', component: ResourceApi },
    { path: 'reusable', component: Reusable},
    { path: 'parent', component: Parent },
    { path: 'storage', component: Storage },    
    { path: '**', component: PageNotFound }
];
