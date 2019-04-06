import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');

export default class ServerBucket extends cdk.Construct {
    public bucket: s3.Bucket;

    public constructor(scope: cdk.Construct, id: string) {
        super(scope, id);

        this.bucket = new s3.Bucket(this, 'DeploymentBucket', {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'error.html',
            publicReadAccess: true
        });
    }
}
