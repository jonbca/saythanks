import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import iam = require('@aws-cdk/aws-iam');

interface PostThanksLambdaProps {
    bucketName: string;
    bucketArn: string;
}

export default class PostThanksLambda extends cdk.Construct {
    public readonly handler: lambda.Function;

    public constructor(scope: cdk.Construct, id: string, props: PostThanksLambdaProps) {
        super(scope, id);

        const accessBucketPolicy = new iam.PolicyStatement(iam.PolicyStatementEffect.Allow)
            .addActions('s3:PutObject*', 's3:GetObject*', 's3:DeleteObject*', 's3:List*', 's3:Abort*', 's3:GetBucket*')
            .addResource(`${props.bucketArn}/*`)
            .addResource(props.bucketArn);

        this.handler = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NodeJS810,
            code: lambda.Code.asset('target/lambda'),
            handler: 'index.handler'
        });

        this.handler.addEnvironment('SERVER_BUCKET_NAME', props.bucketName);
        this.handler.addToRolePolicy(accessBucketPolicy);
    }
}
