import { View } from 'react-native';
import { IconButton, Tooltip, TooltipBubble, type TooltipPlacement } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

const PLACEMENTS: TooltipPlacement[] = [
  'topStart',
  'top',
  'topEnd',
  'bottomStart',
  'bottom',
  'bottomEnd',
  'leftStart',
  'left',
  'leftEnd',
  'rightStart',
  'right',
  'rightEnd',
  'none',
];

const INFO = {
  type: 'info' as const,
  title: 'Comisión por avance',
  body: 'Es el 3 % del monto que retiras en efectivo con tu tarjeta.',
};

export function TooltipScreen() {
  return (
    <ComponentPlayground name="Tooltip" align="start">
      <Variants>
        <Variant label="playground · info">
          <TooltipBubble placement="topStart" {...INFO} onDismiss={noop} />
        </Variant>
        <Variant label="descriptive">
          <TooltipBubble body="Copiar número" />
        </Variant>
        <Variant label="info · enlace">
          <TooltipBubble {...INFO} placement="bottomStart" link={{ label: 'Ver tarifario', onPress: noop }} onDismiss={noop} />
        </Variant>
        <Variant label="info · sin equis">
          <TooltipBubble {...INFO} placement="top" />
        </Variant>
        {PLACEMENTS.map((placement) => (
          <Variant key={placement} label={`placement · ${placement}`}>
            <TooltipBubble placement={placement} body="Texto del tooltip" />
            <TooltipBubble placement={placement} {...INFO} onDismiss={noop} />
          </Variant>
        ))}
        <Variant label="anclado · descriptive">
          <View style={{ paddingTop: 72, alignItems: 'center' }}>
            <Tooltip body="Copiar número" defaultOpen>
              <IconButton icon="copy-01" label="Copiar número de cuenta" appearance="neutral" size="sm" onPress={noop} />
            </Tooltip>
          </View>
        </Variant>
        <Variant label="anclado · info">
          <View style={{ paddingTop: 160, alignItems: 'center' }}>
            <Tooltip {...INFO} onDismiss={noop} defaultOpen>
              <IconButton icon="help-circle" label="Más información sobre la comisión por avance" appearance="ghost" size="sm" onPress={noop} />
            </Tooltip>
          </View>
        </Variant>
        <Variant label="sin punta">
          <View style={{ paddingTop: 72, alignItems: 'center' }}>
            <Tooltip body="Copiar número" pointer={false} defaultOpen>
              <IconButton icon="copy-01" label="Copiar número de cuenta" appearance="neutral" size="sm" onPress={noop} />
            </Tooltip>
          </View>
        </Variant>
        <Variant label="texto largo">
          <View style={{ alignItems: 'center' }}>
            <Tooltip
              type="info"
              title="Tasa de interés efectiva anual"
              body="Es el costo total de financiar tus compras en un año, incluidos intereses y cargos. La tasa vigente para tu tarjeta es 16.06 % y la máxima que fija el Banco Central es 16.77 %."
              onDismiss={noop}
              defaultOpen
            >
              <IconButton icon="help-circle" label="Más información sobre la tasa de interés" appearance="ghost" size="sm" onPress={noop} />
            </Tooltip>
          </View>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
