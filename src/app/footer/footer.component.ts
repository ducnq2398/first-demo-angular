import { Component, OnInit } from '@angular/core';
import {faCoffee, faInbox, faAddressCard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCoffe = faCoffee;
  faInbox = faInbox;
  faAddress = faAddressCard;
  constructor() { }

  ngOnInit(): void {
  }

}
