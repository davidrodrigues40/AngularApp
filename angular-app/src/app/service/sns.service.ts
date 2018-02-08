import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnsMessageRequest, SnsTopicRequest, SnsSubscriptionRequest, SnsResponse, SnsTopicListItem, SnsUnsubscriptionRequest } from '../model/sns-objects';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SnsService {
    topics: BehaviorSubject<SnsTopicListItem[]> = new BehaviorSubject<SnsTopicListItem[]>(null);
	apiUrl: string = 'http://TestingAPI.mysite.com/api/SNS/';
	headers: HttpHeaders;
	constructor(private httpClient: HttpClient) {
		this.headers = new HttpHeaders();
        this.headers = this.headers.set('Origin', 'http://localhost:4200');
        this.loadTopics().subscribe(r => { this.topics.next(r);});
    }

    loadTopics(): Observable<SnsTopicListItem[]> {
        let url: string = this.apiUrl + 'topic';
        return this.httpClient.get<SnsTopicListItem[]>(url, {headers: this.headers });
    }

	postMessage(request: SnsMessageRequest): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'publish/message';
		return this.post(url, request);
	};

	postTopic(request: SnsTopicRequest): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'publish/topic';
		return this.post(url, request);
	};

	postSubscription(request: SnsSubscriptionRequest): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'subscribe';
		return this.post(url, request);
    };

    postUnsubscription(request: SnsUnsubscriptionRequest): Observable<SnsResponse> 
    {
        let url : string = this.apiUrl + 'unsubscribe';
        return this.post(url, request);
    };
    
	post(url: string, payload: Object): Observable<SnsResponse> {
		console.log(JSON.stringify(payload));
		console.log(url);
		return this.httpClient.post<SnsResponse>(url, payload,
			{
				headers: this.headers
			});
	}
}
