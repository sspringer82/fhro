import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() public recipe;

  @Output() detailSelect = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect() {
    this.detailSelect.emit(this.recipe);
  }

  onDelete() {
    this.delete.emit(this.recipe);
  }
}
