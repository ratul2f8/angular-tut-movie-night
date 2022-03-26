import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input()
  includeSearchBar: boolean;

  @Input()
  includeBackButton: boolean;

  @Output()
  onSearchEvent: EventEmitter<string>;

  constructor() {
    this.includeSearchBar = true;
    this.includeBackButton = false;
    this.onSearchEvent = new EventEmitter();
  }

  handleOnSearchEventReceived(value: string) {
    this.onSearchEvent.emit(value);
  }

  ngOnInit(): void {}
}
