import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SnsTopicListItem } from '../../model/sns-objects';
import { SnsService } from '../../service/sns.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-topic-selector',
  templateUrl: './topic-selector.component.html',
  styleUrls: ['./topic-selector.component.css']
})
export class TopicSelectorComponent implements OnInit {
    @Output()
    topicChanged = new EventEmitter<string>();
    
    topics: SnsTopicListItem[];
    constructor(private snsService: SnsService) { 
        snsService.getTopics()
        .subscribe(
            response => { this.topics = response; },
            (err: HttpErrorResponse) => { console.log("An error has occurred"); });
    }

    ngOnInit() {
    };

    changeTopic(e){
        this.topicChanged.emit(e);
    };
}
