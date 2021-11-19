import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessarContaComponent } from './components/acessar-conta/acessar-conta.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{ path: '',component: HomeComponent},
{ path: 'acessar-conta', component: AcessarContaComponent },
{ path: 'admin', component: AdminComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
