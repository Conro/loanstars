import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as socketIo from 'socket.io-client';
import { Router } from '@angular/router';

@Injectable()
export class NotificationService implements OnInit {

  private SERVER_URL = 'http://localhost:3000';
  //private SERVER_URL = 'https://loanstars.herokuapp.com';

  private socket;
  public list: Observable<String[]>;

  constructor(private router: Router) { 
    this.socket = socketIo.connect(this.SERVER_URL)
  }
  
  ngOnInit() {
    /*
    this.getList().subscribe(message => { 
      console.log(message); 
    })*/
  }

  ping(msg) {
    this.socket.emit('msg', msg);
  }

  getAlexaStream() { 
    let observable = new Observable(observer => { 
      //this.socket = io(this.SERVER_URL);
      this.socket.on('update', (data) => { 
        observer.next(data); 
      }); 
      return () => { 
        this.socket.disconnect(); 
      }; 
    }) 
    return observable; 
  } 


}
