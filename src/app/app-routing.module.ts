import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '**', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
