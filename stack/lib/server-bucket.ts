import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');
import cloudfront = require('@aws-cdk/aws-cloudfront');

export default class ServerBucket extends cdk.Construct {
    public readonly bucket: s3.Bucket;
    public readonly bucketName: string;
    public readonly bucketArn: string;

    public constructor(scope: cdk.Construct, id: string) {
        super(scope, id);

        this.bucket = new s3.Bucket(this, 'DeploymentBucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'error.html',
            publicReadAccess: true
        });

        this.bucketName = this.bucket.bucketName;
        this.bucketArn = this.bucket.bucketArn;

        this.bucket.export();
        this.addCloudfrontDistribution(this.bucket);
    }

    private addCloudfrontDistribution(bucket: s3.Bucket): cloudfront.CloudFrontWebDistribution {
        const distribution = new cloudfront.CloudFrontWebDistribution(this, 'ClientAppDistribution', {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: bucket
                    },
                    behaviors: [{ isDefaultBehavior: true }, { pathPattern: '*.json', maxTtlSeconds: 0 }]
                }
            ]
        });

        return distribution;
    }
}
