import dotenv from 'dotenv';
dotenv.config();

const config = {
  integrations: {
    ordercloud: {
      location: '@brimit_psh/vuestorefront-ordercloud-api/server',
      configuration: {
        baseApiUrl: process.env.VSF_ORDERCLOUD_API_URL,
        clientID: process.env.VSF_ORDERCLOUD_CLIENT_ID,
        scope: (process.env.VSF_ORDERCLOUD_ROLES || 'Shopper').split(','),
        anonymousUserId: process.env.VSF_ORDERCLOUD_ANONYMOUS_USER_ID || 'default-buyer-user',
      },
    },
  },
};

export default config;
