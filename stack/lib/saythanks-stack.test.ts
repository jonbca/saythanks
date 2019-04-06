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
});
