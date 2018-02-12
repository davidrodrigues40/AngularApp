import { Component, OnInit } from '@angular/core';
import { SnsResponse, SnsUnsubscribeRequest, SnsTopicListItem, SnsTopicRequest } from '../../model/sns-objects';
import { SnsService } from '../../service/sns.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-sns-unsubscribe',
    templateUrl: './sns-unsubscribe.component.html',
    styleUrls: ['./sns-unsubscribe.component.css']
})
export class SnsUnsubscribeComponent implements OnInit {
    snsResponse: SnsResponse = { HttpStatusCode: 0, MetaData: { "WAITING": "No Subscription Sent" } };
    request: SnsUnsubscribeRequest = { subscriptionArn: '' };
    topic: string;
    topics: SnsTopicListItem[];

    constructor(private snsService: SnsService) { }

    ngOnInit() {
    };
    
    setSubject(subject: string) {
        this.topic = subject
    };
}
