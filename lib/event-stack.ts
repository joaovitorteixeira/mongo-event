import * as cdk from "@aws-cdk/core";
import CognitoConstruct from "./cognito-construct";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EventStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cognito = new CognitoConstruct(this, "Cognito");

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'EventQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
