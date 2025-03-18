import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-wrapper',
  templateUrl: './json-wrapper.component.html',
  styleUrls: ['./json-wrapper.component.scss']
})
export class JsonWrapperComponent implements OnInit {
  @Input() json: any
  constructor() { }

  ngOnInit(): void {
  }

}
