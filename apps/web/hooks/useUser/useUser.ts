import { useQuery } from '@tanstack/react-query';
import { sdk } from '~/sdk';

export const initUser = async () => {
  return await sdk.ordercloud.initUser();
};

export function useUser() {
  return useQuery(['user'], () => initUser(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
