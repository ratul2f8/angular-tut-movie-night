import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  title: BehaviorSubject<string>;

  @Input()
  includeSearchBar: boolean;

  @Input()
  includeBackButton: boolean;

  @Output()
  searchEvent: EventEmitter<string>;

  searchValue: string;

  constructor(
    private readonly location: Location,
    private readonly navService: NavService
  ) {
    this.includeSearchBar = true;
    this.includeBackButton = false;
    this.searchEvent = new EventEmitter();
    this.searchValue = '';
    this.title = this.navService.title;
  }

  handleChange(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(this.searchValue);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {}
}
