import ServerBucket from './server-bucket';
import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');

export class SayThanksStack extends cdk.Stack {
    public constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new ServerBucket(this, 'ServerBucket');
        new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NodeJS810,
            code: lambda.Code.asset('target/lambda'),
            handler: 'index.handler'
        });
    }
}
