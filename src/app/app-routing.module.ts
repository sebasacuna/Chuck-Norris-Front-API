import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JokesComponent} from './components/jokes/jokes.component';
import {AboutComponent} from './components/about/about.component';


const routes: Routes = [
  {path: '', component: JokesComponent},
  {path: 'jokes', component: JokesComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

