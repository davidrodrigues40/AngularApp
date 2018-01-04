export class SnsTopic {
    region: string;
    accountId: string;
    subject: string;
}

export class SnsMessage extends SnsTopic
{
    deploymentName: string;
    urls: string;
    users: string;
    subject: string;
};

export class SnsSubscription extends SnsTopic
{
    endpoint: string;
    protocol: string;
};

export class SnsResponse {
    HttpStatusCode: number;
    MetaData: object;
};