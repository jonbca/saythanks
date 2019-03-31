#!/usr/bin/env node
import 'source-map-support/register';
import { StackStack } from '../lib/stack-stack';
import cdk = require('@aws-cdk/cdk');

const app = new cdk.App();
new StackStack(app, 'StackStack');
