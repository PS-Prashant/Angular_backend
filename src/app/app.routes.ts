import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { 
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent, canActivate: [ authGuard ] },
            { path: 'contact', component: ContactComponent, canActivate: [ authGuard ] }
        ]
    },
    { path: '**', redirectTo: '404' },
];
