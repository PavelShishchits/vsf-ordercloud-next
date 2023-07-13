import { type OrdercloudModuleType, ordercloudModule } from '@brimit_psh/vuestorefront-ordercloud-sdk';
import { initSDK, buildModule } from '@vue-storefront/sdk';
import { type SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';

const sdkConfig = {
  commerce: buildModule<SdkModule>(sdkModule),
  ordercloud: buildModule<OrdercloudModuleType>(ordercloudModule, {
    apiUrl: 'http://localhost:4000/ordercloud',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
