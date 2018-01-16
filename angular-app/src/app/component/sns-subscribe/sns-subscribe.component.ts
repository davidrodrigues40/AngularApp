import { Component, OnInit } from '@angular/core';
import { SnsResponse, SnsSubscription, SnsTopicListItem } from '../../model/sns-objects';
import { SnsService } from '../../service/sns.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-sns-subscribe',
    templateUrl: './sns-subscribe.component.html',
    styleUrls: ['./sns-subscribe.component.css']
})
export class SnsSubscribeComponent implements OnInit {
    snsResponse: SnsResponse = { HttpStatusCode: 0, MetaData: { "WAITING": "No Subscription Sent" } };
    subscription: SnsSubscription = { endpoint: '', protocol: '',  accountId: '186148884772', region: 'us-east-1', subject: '' };
    topics: SnsTopicListItem[];
    constructor(private snsService: SnsService) { 
        snsService.getTopics()
            .subscribe(
                response => { this.topics = response; },
                (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    }

    ngOnInit() {
    }
    submitSubscription(){
        this.snsService.postSubscription(this.subscription)
            .subscribe(
                response => { this.subscriptionSubmitted(response); },
                (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    };
    subscriptionSubmitted(response){
        console.log(JSON.stringify(response));
		this.snsResponse = response;
    };
    setSubject(subject: string){
        this.subscription.subject = subject;
    };
}
