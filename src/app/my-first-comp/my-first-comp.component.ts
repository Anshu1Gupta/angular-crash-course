import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css'
})
export class MyFirstCompComponent {
     name:string =""
     email:string=""
     message:string=""
     isSubmitted: boolean=true;

     messages:Array<any>=[];

     onSubmit(){
      this.messages.push({
        "name":this.name,
        "email":this.email,
        "message":this.message
      })
     console.log(this.messages);

     }
}
