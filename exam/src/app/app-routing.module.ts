import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainRoutingKeys } from './pages/main/main.routingKeys';
import { MainComponent } from './pages/main/main.component';
import { homeRoutingKeys } from './pages/main/home/home.routingKeys';
import { HomeComponent } from './pages/main/home/home.component';

const routes: Routes = [
  {
    path: `${mainRoutingKeys.base}`,
    component: MainComponent,
    children: [
      {
        path: `${homeRoutingKeys.base}`,
        component: HomeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `${homeRoutingKeys.base}`
      }
    ]

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${mainRoutingKeys.base}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
