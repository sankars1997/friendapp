import { Component } from '@angular/core';

@Component({
  selector: 'app-friendadd',
  templateUrl: './friendadd.component.html',
  styleUrls: ['./friendadd.component.css']
})
export class FriendaddComponent {

  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""
  readValues=()=>
  {
  let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
 console.log(data)
}
  
}
