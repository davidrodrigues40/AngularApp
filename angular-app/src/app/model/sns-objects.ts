import { SnsTopicComponent } from "../component/sns-topic/sns-topic.component";

export class SnsTopicRequest {
    region: string;
    accountId: string;
    subject: string;
}

export class SnsMessageRequest extends SnsTopicRequest
{
    deploymentName: string;
    urls: string;
    users: string;
    subject: string;
};

export class SnsUnsubscribeRequest
{
    subscriptionArn: string;
};

export class SnsSubscriptionRequest extends SnsTopicRequest
{
    endpoint: string
    protocol: string;
};

export class SnsResponse 
{
    HttpStatusCode: number;
    MetaData: object;
};

export class SnsTopicListItem 
{
    DisplayName: string;
    TopicArn: string;
}

export class SnsSubscription
{
    Endpoint: string;
    Owner: string;
    Protocol: string;
    SubscriptionArn: string;
    TopicArn: string;
}