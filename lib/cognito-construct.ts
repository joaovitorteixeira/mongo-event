import * as cognito from "@aws-cdk/aws-cognito";
import * as cdk from "@aws-cdk/core";

export default class CognitoConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    const userPool = new cognito.UserPool(this, "UserPool", {
      userPoolName: "UserPool",
      userVerification: {
        emailSubject: "Verify your email for our awesome app!",
        emailBody:
          "Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}",
        emailStyle: cognito.VerificationEmailStyle.CODE,
        smsMessage: "Your verification code is {####}",
      },
      signInAliases: {
        email: true,
        phone: true,
      },
      standardAttributes: {
        address: {
          mutable: true,
          required: true,
        },
        birthdate: {
          mutable: true,
          required: true,
        },
        email: {
          mutable: true,
          required: true,
        },
        familyName: {
          mutable: true,
          required: true,
        },
        fullname: {
          mutable: true,
          required: true,
        },
        gender: {
          mutable: true,
          required: true,
        },
      },
    });

    return userPool;
  }
}
