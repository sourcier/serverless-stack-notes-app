const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "53mecql-serverless-stack-notes",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://v15evm9485.execute-api.eu-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_FP1HnZwMu",
    APP_CLIENT_ID: "3k563fsh4678drplb2if7pfhje",
    IDENTITY_POOL_ID: "eu-west-2:fefa348e-3328-4d9d-ac57-2787230c6b05",
  },
};

export default config;
