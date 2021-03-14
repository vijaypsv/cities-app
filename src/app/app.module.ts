import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityService } from './service/city.service';
import { HomeComponent } from './home/home.component';
import { SequenceComponent } from './sequence/sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    HomeComponent,
    SequenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
