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

export class SnsUnsubscriptionRequest extends SnsTopicRequest
{
    endpoint: string;
};

export class SnsSubscriptionRequest extends SnsUnsubscriptionRequest
{
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