import { View } from 'react-native';
import { RequirementItem, type RequirementStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const STATUSES: RequirementStatus[] = ['pending', 'met', 'failed'];

export function RequirementItemScreen() {
  return (
    <ComponentPlayground name="RequirementItem" align="start">
      <Variants>
        <Variant label="playground · pending">
          <View role="list">
            <RequirementItem status="pending" label="12 caracteres de largo" />
          </View>
        </Variant>
        <Variant label="status · pending · met · failed">
          <View role="list">
            {STATUSES.map((status) => (
              <RequirementItem key={status} status={status} label={`12 caracteres de largo · ${status}`} />
            ))}
          </View>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
