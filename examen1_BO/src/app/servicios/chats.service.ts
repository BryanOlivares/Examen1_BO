import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"
import { map } from "rxjs/operators";

export interface chat{
  description : string
  name : string
  id : string
  image : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db : AngularFirestore) { }

  getChats(){
    return this.db.collection('Chats').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
}
