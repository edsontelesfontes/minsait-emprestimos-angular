import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [{
path: "", redirectTo: "home", pathMatch: "full"},
{path: 'home', component: HomeComponent},
{path: 'clients', component: ClientsComponent},
{path: 'clients/create', component: CreateClientComponent},
{path: 'clients/update/:cpf', component: CreateClientComponent},
{path: "**", component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
