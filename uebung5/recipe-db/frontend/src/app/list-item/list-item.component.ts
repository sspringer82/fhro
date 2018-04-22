import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() public recipe;

  constructor() {}

  ngOnInit() {}
}
