import ServerBucket from './server-bucket';
import cdk = require('@aws-cdk/cdk');

export class SayThanksStack extends cdk.Stack {
    public constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new ServerBucket(this, 'ServerBucket');
    }
}
