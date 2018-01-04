import { SnsBaseObject } from './sns-base-object';
export class SnsMessage extends SnsBaseObject
{
    deploymentName: string;
    urls: string;
    users: string;
    subject: string;
};

export class SnsResponse {
    HttpStatusCode: number;
    MetaData: object;
};