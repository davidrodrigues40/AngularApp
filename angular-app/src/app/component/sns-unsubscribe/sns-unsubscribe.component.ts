import { Component, OnInit } from '@angular/core';
import { SnsResponse, SnsUnsubscriptionRequest, SnsTopicListItem } from '../../model/sns-objects';
import { SnsService } from '../../service/sns.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-sns-unsubscribe',
    templateUrl: './sns-unsubscribe.component.html',
    styleUrls: ['./sns-unsubscribe.component.css']
})
export class SnsUnsubscribeComponent implements OnInit {
    snsResponse: SnsResponse = { HttpStatusCode: 0, MetaData: { "WAITING": "No Subscription Sent" } };
    request: SnsUnsubscriptionRequest = { endpoint: '', accountId: '186148884772', region: 'us-east-1', subject: '' };
    topics: SnsTopicListItem[];

    constructor(private snsService: SnsService) { }

    ngOnInit() {
    };

    unSubscribe(){
        this.snsService.postUnsubscription(this.request)
            .subscribe(
                response => { this.unsubscribeSubmitted(response); },
                (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    };

    unsubscribeSubmitted(response){
        console.log(JSON.stringify(response));
		this.snsResponse = response;
    };
    
    setSubject(subject: string) {
        this.request.subject = subject;
    };

}
