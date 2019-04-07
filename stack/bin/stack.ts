#!/usr/bin/env node
import 'source-map-support/register';
import { SayThanksStack } from '../lib/saythanks-stack';
import cdk = require('@aws-cdk/cdk');

const app = new cdk.App();
const stack = new SayThanksStack(app, 'ThanksStack');
