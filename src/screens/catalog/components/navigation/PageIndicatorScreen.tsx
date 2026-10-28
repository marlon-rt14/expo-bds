import { PageIndicator, PageIndicatorDot } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const COUNTS = [2, 3, 5, 7] as const;

export function PageIndicatorScreen() {
  return (
    <ComponentPlayground name="PageIndicator" align="start">
      <Variants>
        {COUNTS.map((count) => (
          <Variant key={count} label={`${count} páginas · inicio, medio, fin`}>
            <PageIndicator count={count} current={0} />
            <PageIndicator count={count} current={Math.floor(count / 2)} />
            <PageIndicator count={count} current={count - 1} />
          </Variant>
        ))}
        <Variant label="punto · inactivo y activo">
          <PageIndicatorDot isActive={false} />
          <PageIndicatorDot isActive />
        </Variant>
        <Variant label="bienvenida · página 2 de 4">
          <PageIndicator count={4} current={1} />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
