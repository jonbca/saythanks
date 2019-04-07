#!/bin/bash
yarn workspaces run clean

yarn workspaces run test

yarn workspaces run build

cd stack && yarn cdk deploy

