import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SnsResponse } from '../../model/sns-objects';

@Component({
  selector: 'app-sns-response-handler',
  templateUrl: './sns-response-handler.component.html',
  styleUrls: ['./sns-response-handler.component.css']
})
export class SnsResponseHandler implements OnInit {
  @Input()
  snsResponse: SnsResponse = { HttpStatusCode: 0, MetaData: {"SUCCESS": "You're good to go"} };

  constructor() { }

  ngOnInit() {
  }

	metaData() : Array<string>{
		return Object.keys(this.snsResponse.MetaData);
	};
}