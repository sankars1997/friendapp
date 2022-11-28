import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendaddComponent } from './friendadd/friendadd.component';
import { FriendviewComponent } from './friendview/friendview.component';
import { NavabrComponent } from './navabr/navabr.component';


const myRoute: Routes=[
{
  path:"",
  component:FriendaddComponent
},
{
  path:"friendview",
  component:FriendviewComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    FriendaddComponent,
    FriendviewComponent,
    NavabrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
