import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  message = 'Hi';
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
    this.messageEvent.emit(this.message);
  }

}
