import { AvatarIndicator } from '@bds/react-native';
import { ComponentPlayground } from '../../../../components';

export function AvatarIndicatorScreen() {
  return <ComponentPlayground name="AvatarIndicator">
  <AvatarIndicator status='online' size='lg' />
  <AvatarIndicator status='busy' size='sm' />
  <AvatarIndicator status='offline' size='md' />
  <AvatarIndicator status='away' />
  </ComponentPlayground>;
}
