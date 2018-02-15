import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SnsSubscription, SnsTopicRequest, SnsUnsubscribeRequest, SnsResponse } from '../../model/sns-objects';
import { EventEmitter } from 'events';
import { SnsService } from '../../service/sns.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
    selector: 'app-sns-subscriptions',
    templateUrl: './sns-subscriptions.component.html',
    styleUrls: ['./sns-subscriptions.component.css']
})
export class SnsSubscriptionsComponent implements OnInit {
    @Input()
    topic: string;

    subscriptions: SnsSubscription[];

    constructor(private snsService: SnsService) { }

    ngOnInit() {
    };

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            let changedProp = changes[propName];
            if (changedProp.firstChange) return;

            this.getSubscriptions();
        }
    };

    getSubscriptions() {
        var request: SnsTopicRequest = new SnsTopicRequest();

        request.accountId = '186148884772';
        request.region = 'us-east-1';
        request.subject = this.topic;

        this.snsService.postSubscripionListByTopic(request)
            .subscribe(
                response => { this.gotSubscriptions(response); },
                (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    };

    gotSubscriptions(response) 
    {
        if(response.HttpStatusCode === 200){
            this.subscriptions = JSON.parse(response.MetaData.SUBSCRIPTIONS);
        }
        else 
        {
            if(response.MetaData.ERROR)
                alert(response.MetaData.ERROR);
            if(response.MetaData.FAIL)
                alert(response.MetaData.FAIL);
        }
    };

    unsubscribe(subscription: SnsSubscription)
    {
        var request: SnsUnsubscribeRequest = { subscriptionArn: subscription.SubscriptionArn};
        this.snsService.postUnsubscribe(request)
            .subscribe(r => { this.unsubscribeComplete(r, subscription); },
            (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    };

    unsubscribeComplete(response: SnsResponse, subscription: SnsSubscription)
    {
        if (response.HttpStatusCode === 200)
            this.removeRow(subscription);
    };

    removeRow(subscription: SnsSubscription)
    {
        let index: number = this.subscriptions.findIndex(f => f.SubscriptionArn === subscription.SubscriptionArn);
        if(index > 0)
            this.subscriptions.splice(index, 1);
    };
}
