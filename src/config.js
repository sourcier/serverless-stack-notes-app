const dev = {
  STRIPE_KEY: "pk_test_cA7dgir7RDXeSfI1ehdPDRxy",
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

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
