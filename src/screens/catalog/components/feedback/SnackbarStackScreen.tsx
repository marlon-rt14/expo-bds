import { SnackbarStack, type SnackbarItem } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

const TRES: SnackbarItem[] = [
  { id: 'a', message: 'Se pagó tu tarjeta', status: 'success' },
  { id: 'b', message: 'Se envió tu transferencia', status: 'success' },
  { id: 'c', message: 'Se guardó el cambio en tu tarjeta', status: 'info', action: { label: 'Deshacer', onPress: noop } },
];

const CUATRO: SnackbarItem[] = [{ id: 'z', message: 'Esta ya no se muestra', status: 'warning' }, ...TRES];

export function SnackbarStackScreen() {
  return (
    <ComponentPlayground name="SnackbarStack" align="start">
      <Variants>
        <Variant label="count 3 · colapsada">
          <SnackbarStack items={TRES} onExpire={noop} />
        </Variant>
        <Variant label="count 3 · expandida">
          <SnackbarStack items={TRES} onExpire={noop} previewExpanded />
        </Variant>
        <Variant label="count 2 · colapsada">
          <SnackbarStack items={TRES.slice(-2)} onExpire={noop} />
        </Variant>
        <Variant label="count 2 · expandida">
          <SnackbarStack items={TRES.slice(-2)} onExpire={noop} previewExpanded />
        </Variant>
        <Variant label="desborde · 4 entran, se ven 3">
          <SnackbarStack items={CUATRO} onExpire={noop} previewExpanded />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
