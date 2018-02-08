import { Component, OnInit } from '@angular/core';
import { SnsService } from '../../service/sns.service';
import { SnsTopicRequest, SnsResponse } from '../../model/sns-objects';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
	selector: 'app-sns-topic',
	templateUrl: './sns-topic.component.html',
	styleUrls: ['./sns-topic.component.css']
})
export class SnsTopicComponent implements OnInit {
	topic: SnsTopicRequest = { accountId: '186148884772', region: 'us-east-1', subject: '' };
	snsResponse: SnsResponse = { HttpStatusCode: 0, MetaData: { "WAITING": "No Topic Sent" } };

	constructor(private snsService: SnsService) { }

	ngOnInit() {
	}

	submitTopic() {
        this.snsService.postTopic(this.topic)
            .subscribe(
                response => { this.topicPosted(response); },
			    (err: HttpErrorResponse) => { console.log("An error has occurred"); });
	};

	topicPosted(response) {
		console.log(JSON.stringify(response));
		this.snsResponse = response;
	};
}
