const dev = {
  STRIPE_KEY: "pk_test_cA7dgir7RDXeSfI1ehdPDRxy",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "dev-serverless-stack-notes-infra-uploads4f6eb0fd-nf7e7dh1i14z",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://28vwuonn5g.execute-api.eu-west-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_FFqhufieN",
    APP_CLIENT_ID: "1ol1378ac4lfu7h06dqbaq0v2l",
    IDENTITY_POOL_ID: "eu-west-2:c23af4dc-abf3-43b9-92b2-7cd459c08618",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_cA7dgir7RDXeSfI1ehdPDRxy",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "prod-serverless-stack-notes-infra-uploads4f6eb0fd-13jymuramxknr"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://l021vi0ng6.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_mYeWsTHWr",
    APP_CLIENT_ID: "1qc297clumrmeu170a5d2q5bg6",
    IDENTITY_POOL_ID: "eu-west-2:051214e1-daaf-4892-a09c-d6c02c9dbe05"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
