import { View } from 'react-native';
import { TabItem } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

export function TabItemScreen() {
  return (
    <ComponentPlayground name="TabItem" align="start">
      <Variants>
        {(
          [
            ['default · lg', <TabItem key="d" label="Movimientos" onPress={noop} selected={false} />],
            ['selected · showIndicator', <TabItem key="s" label="Movimientos" onPress={noop} selected showIndicator />],
            ['disabled', <TabItem key="x" label="Bloqueadas" onPress={noop} selected={false} disabled />],
            ['ícono y contador · md', <TabItem key="i" label="Beneficios" leadingIcon="gift-01" badge={2} onPress={noop} selected={false} size="md" />],
            ['fitted · selected', <TabItem key="f" label="Estados" onPress={noop} selected fitted showIndicator />],
          ] as const
        ).map(([label, item]) => (
          <Variant key={label} label={label}>
            <View style={{ alignSelf: 'flex-start' }}>{item}</View>
          </Variant>
        ))}
      </Variants>
    </ComponentPlayground>
  );
}
