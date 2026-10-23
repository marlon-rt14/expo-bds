import { Amount } from '@bds/react-native';
import { ComponentPlayground } from '../../../../components';

export function AmountScreen() {
  return <ComponentPlayground name="Amount">
  <Amount value={2539} size='hero' />
  <Amount value={2539} size='lg' />
  <Amount value={2539} size='md' />
  <Amount value={2539} size='sm' />

  <Amount value={2539} signed hidden />
  
  <Amount value={2539} signed />
  <Amount value={-2539} signed />
  </ComponentPlayground>;
}
