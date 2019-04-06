#!/usr/bin/env node
import 'source-map-support/register';
import { SayThanksStack } from '../lib/saythanks-stack';
import cdk = require('@aws-cdk/cdk');

const app = new cdk.App();
new SayThanksStack(app, 'StackStack');
