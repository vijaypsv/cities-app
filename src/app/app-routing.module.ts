import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { SequenceComponent } from './sequence/sequence.component';

const routes: Routes = [	
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'cities', component: CitiesListComponent },
	{ path: 'sequence', component: SequenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
