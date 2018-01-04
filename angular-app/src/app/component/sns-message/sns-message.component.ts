import { Component, OnInit } from '@angular/core';
import { SnsService } from '../../service/sns.service';
import { SnsMenuComponent } from '../sns-menu/sns-menu.component';
import { SnsMessage, SnsResponse } from '../../model/sns-objects';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
	selector: 'app-sns-message',
	templateUrl: './sns-message.component.html',
	styleUrls: ['./sns-message.component.css']
})
export class SnsMessageComponent implements OnInit {
	snsMessage: SnsMessage = { deploymentName: '', urls: '', accountId: '186148884772', region: 'us-east-1', subject: 'DAVID_TEST', users: '' };
	returnedResponse: SnsResponse = { HttpStatusCode: 0, MetaData: {"WAITING": "No Message Sent"} };
	constructor(private snsService: SnsService) { };

	ngOnInit() { };

	submitMessage() {
		this.snsService.postMessage(this.snsMessage)
			.subscribe(
			response => { this.messagePosted(response); },
			(err: HttpErrorResponse) => { console.log("An error has occurred"); });
	};
	messagePosted(response) {
		console.log(JSON.stringify(response));
		this.returnedResponse = response;
	};
}
