import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any>=[];
  constructor() {
    this.init();
   }
  init():void{
    this.insert({
      name:'Anshu',
      email:"anshu@gmail.com",
      message: 'Anshu hello'
    });
    this.insert({
      name:'Raju',
      email:"Raju@gmail.com",
      message: 'Raju hello'
    });
    this.insert({
      name:'Kaju',
      email:"Kaju@gmail.com",
      message: 'Kaju hello'
    });
  }
  insert(message: {name:string,email:string,message:string}):void{
    this.messages.push(message);
  }

  getAllMessages():any[]{
    return this.messages;
  }

  deleteMessage(index:number):void{
    this.messages.splice(index, 1);
  }
}
