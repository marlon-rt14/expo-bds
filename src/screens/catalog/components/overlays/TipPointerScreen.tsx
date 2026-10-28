import { View } from 'react-native';
import { TipPointer, useTokens, type TipDirection, type TipPointerProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const DIRECTIONS: TipDirection[] = ['up', 'down', 'left', 'right'];

function Bubble({ direction, appearance = 'inverse' }: TipPointerProps) {
  const t = useTokens();
  const vertical = direction === 'up' || direction === 'down';
  const floating = appearance === 'floating';
  return (
    <View
      style={{
        width: 96,
        height: 48,
        borderRadius: Number(t['radius.surface.sm']),
        backgroundColor: String(t[floating ? 'component.tippointer.bg-floating' : 'component.tippointer.bg-inverse']),
        borderWidth: floating ? Number(t['border.width.default']) : 0,
        borderColor: String(t['component.tippointer.border-floating']),
      }}
    >
      <TipPointer direction={direction} appearance={appearance} offset={vertical ? 48 : 24} />
    </View>
  );
}

export function TipPointerScreen() {
  return (
    <ComponentPlayground name="TipPointer" align="start">
      <Variants>
        <Variant label="playground · inverse · down">
          <Bubble direction="down" appearance="inverse" />
        </Variant>
        {(['inverse', 'floating'] as const).map((appearance) => (
          <Variant key={appearance} label={appearance}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 28, alignItems: 'center' }}>
              {DIRECTIONS.map((direction) => (
                <Bubble key={direction} direction={direction} appearance={appearance} />
              ))}
            </View>
          </Variant>
        ))}
      </Variants>
    </ComponentPlayground>
  );
}
