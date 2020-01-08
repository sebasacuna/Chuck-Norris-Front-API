import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
	{ path: '', component: JokesComponent },
	{ path: 'jokes', component: JokesComponent },
	{ path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

