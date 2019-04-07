import s3Deployment = require('@aws-cdk/aws-s3-deployment');
import s3 = require('@aws-cdk/aws-s3');
import cdk = require('@aws-cdk/cdk');

interface WebSiteDeploymentProps {
    websiteBucket: s3.Bucket;
    pathToFiles: string;
}

export default class WebSiteDeployment extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: WebSiteDeploymentProps) {
        super(scope, id);

        new s3Deployment.BucketDeployment(this, 'WebSiteBucketDeployment', {
            destinationBucket: props.websiteBucket,
            source: s3Deployment.Source.asset(props.pathToFiles)
        });
    }
}
