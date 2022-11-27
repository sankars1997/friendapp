import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendaddComponent } from './friendadd/friendadd.component';
import { FriendviewComponent } from './friendview/friendview.component';


const myRoute:Routes=[
{
  path=
}
]

@NgModule({
  declarations: [
    AppComponent,
    FriendaddComponent,
    FriendviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
