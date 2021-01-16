import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/firestore"

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db : AngularFirestore) { }

  getChats(){
    return this.db.collection('Chats').snapshotChanges()
  }
}
