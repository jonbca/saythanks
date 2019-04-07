import { expect, haveResource } from '@aws-cdk/assert';
import PostThanksLambda from './post-thanks-lambda';
import cdk = require('@aws-cdk/cdk');

test('it creates a lambda', (): void => {
    const stack = new cdk.Stack();

    new PostThanksLambda(stack, 'lambda', { bucketArn: 'someArn', bucketName: 'foo' });

    expect(stack).to(haveResource('AWS::Lambda::Function'));
    expect(stack).to(haveResource('AWS::IAM::Policy'));
});
