import { expect, haveResource } from '@aws-cdk/assert';
import ServerBucket from './server-bucket';
import cdk = require('@aws-cdk/cdk');

test('it creates an s3 bucket', () => {
    const stack = new cdk.Stack();

    new ServerBucket(stack, 'StackBucket');

    expect(stack).to(
        haveResource('AWS::S3::Bucket', {
            WebsiteConfiguration: {
                ErrorDocument: 'error.html',
                IndexDocument: 'index.html'
            }
        })
    );
});

test('it has public read permissions on the bucket', () => {
    const stack = new cdk.Stack();

    new ServerBucket(stack, 'StackBucket');

    expect(stack).to(
        haveResource('AWS::S3::BucketPolicy', {
            PolicyDocument: {
                Statement: [
                    {
                        Action: 's3:GetObject',
                        Effect: 'Allow',
                        Principal: '*',
                        Resource: {
                            'Fn::Join': [
                                '',
                                [
                                    {
                                        'Fn::GetAtt': ['StackBucketDeploymentBucketA8E9618A', 'Arn']
                                    },
                                    '/*'
                                ]
                            ]
                        }
                    }
                ],
                Version: '2012-10-17'
            }
        })
    );
});
