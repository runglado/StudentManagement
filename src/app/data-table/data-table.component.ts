import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() headers: string[];
  @Input() rows: Row[];
  constructor() { }

  ngOnInit() {
  }
}

export class Row {
    constructor(data: any[]) { 
      this.data = data;
    }
    data: any[];
}
