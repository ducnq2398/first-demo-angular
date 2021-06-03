import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  // @ViewChild(ChildComponent) child: any;
  parentMessage = 'Duc';

  constructor() { }
  ngAfterViewInit(): void {
    // this.parentMessage = this.child.message;
  }
  reciveMessage($event:string){
    this.parentMessage = $event;
  }

  ngOnInit(): void {
  }

}
