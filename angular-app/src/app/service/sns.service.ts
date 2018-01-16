import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnsMessage, SnsTopic, SnsSubscription, SnsResponse, SnsTopicListItem } from '../model/sns-objects';
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

	postMessage(message: SnsMessage): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'publish/message';
		return this.post(url, message);
	};

	postTopic(topic: SnsTopic): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'publish/topic';
		return this.post(url, topic);
	};

	postSubscription(subscription: SnsSubscription): Observable<SnsResponse> {
		let url: string = this.apiUrl + 'subscribe';
		return this.post(url, subscription);
	};

	post(url: string, obj: Object): Observable<SnsResponse> {
		console.log(JSON.stringify(obj));
		console.log(url);
		return this.httpClient.post<SnsResponse>(url, obj,
			{
				headers: this.headers
			});
	}
}
