import { Component } from '@angular/core';
import { ServiceapiService } from '../serviceapi.service';

@Component({
  selector: 'app-friendview',
  templateUrl: './friendview.component.html',
  styleUrls: ['./friendview.component.css']
})
export class FriendviewComponent {

constructor(private api:ServiceapiService){
  api.fetchFriend().subscribe(
    ( response)=>{
      this.data=response;
    }
  )
}

  data:any =[]

}
