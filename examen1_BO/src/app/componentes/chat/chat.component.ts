import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { message } from "../../models/message";
import {ChatsService} from "../../servicios/chats.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public room: any;
  public chat : any;
  public mensajes =[];
  public msg: string;

  constructor (private navparams: NavParams,
    private modal: ModalController,
    private chatService : ChatsService
    ){}

  ngOnInit() {

    this.chatService.getChatRoom(this.chat.id).subscribe( room => {

      this.room = room;
    })
    this.chat = this.navparams.get('chat')
      
    }

   //this.chat = this.navparams.get('chat')

  closeChat(){
    this.modal.dismiss()
  }

  sendMessage(){

    const mensaje : message ={
      content : this.msg,
      type : 'text',
      date : new Date()
    }
    this.chatService.sendMsgToFirebase( mensaje, this.chat.id);
    this.msg = "";
    
    }
   /*this.chatService.sendMsgToFirebase( mensaje, this.chat.id);
   this.msg="";
  */
  
}
