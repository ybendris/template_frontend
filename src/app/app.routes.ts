import { Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AddressPageComponent } from "./pages/address-page/address-page.component";
import { TablePageComponent } from "./pages/table-page/table-page.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { TreePageComponent } from "./pages/tree-page/tree-page.component";
import { DragDropPageComponent } from "./pages/drag-drop-page/drag-drop-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'address', component: AddressPageComponent },
    { path: 'table', component: TablePageComponent },
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'tree', component: TreePageComponent },
    { path: 'drag-drop', component: DragDropPageComponent },
];

