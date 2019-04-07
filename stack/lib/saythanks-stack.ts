import ServerBucket from './server-bucket';
import PostThanksLambda from './post-thanks-lambda';
import cdk = require('@aws-cdk/cdk');

export class SayThanksStack extends cdk.Stack {
    public constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new ServerBucket(this, 'ServerBucket');
        new PostThanksLambda(this, 'PostThanksLambda', { ...bucket });
    }
}
