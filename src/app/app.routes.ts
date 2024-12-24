import { Routes } from '@angular/router';
import { CashierComponent } from './pages/cashier/cashier.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'cashier',
        pathMatch:'full'
    },
    {
        path:'cashier',
        component:CashierComponent
    },

];
