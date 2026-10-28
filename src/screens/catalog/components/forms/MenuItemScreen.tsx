import { View, type Role } from 'react-native';
import { MenuItem, type MenuItemProps, useTokens } from '@bds/react-native';
import type { ReactNode } from 'react';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';
import { MenuSurface } from './MenuSurface';

/** Una fila vive siempre en un listbox (Menu): acá se monta uno para mostrarla. */
function List({ label, children }: { label: string; children: ReactNode }) {
  const t = useTokens();
  return (
    <MenuSurface>
      <View role={'listbox' as Role} aria-label={label} style={{ padding: Number(t['space.inset.sm']) }}>
        {children}
      </View>
    </MenuSurface>
  );
}

const ITEM: MenuItemProps['option'] = { value: 'opcion', label: 'Cuenta de ahorros', leading: 'wallet-02' };

export function MenuItemScreen() {
  return (
    <ComponentPlayground name="MenuItem" align="start">
      <Variants>
        <Variant label="playground · md">
          <List label="Cuenta de origen">
            <MenuItem option={ITEM} selected={false} size="md" presentation="popover" onPress={noop} />
          </List>
        </Variant>
        <Variant label="seleccionada · deshabilitada">
          <List label="Opciones">
            <MenuItem option={ITEM} selected size="md" presentation="popover" onPress={noop} />
            <MenuItem
              option={{
                value: 'inversion',
                label: 'Cuenta de inversión',
                leading: 'credit-card-02',
                description: 'No admite débitos',
                disabled: true,
              }}
              selected={false}
              size="md"
              presentation="popover"
              onPress={noop}
            />
          </List>
        </Variant>
        <Variant label="completo · descripción y monto">
          <List label="Cuenta de origen">
            <MenuItem
              option={{ ...ITEM, description: 'N.º •••• 4821', trailingText: '$ 1,250.56' }}
              selected
              size="md"
              presentation="popover"
              onPress={noop}
            />
          </List>
        </Variant>
        <Variant label="tallas · md · sm">
          <List label="Tallas">
            <MenuItem option={ITEM} selected={false} size="md" presentation="popover" onPress={noop} />
            <MenuItem option={ITEM} selected={false} size="sm" presentation="popover" onPress={noop} />
          </List>
        </Variant>
        <Variant label="en hoja">
          <List label="En hoja">
            <MenuItem option={ITEM} selected size="md" presentation="sheet" onPress={noop} />
          </List>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
