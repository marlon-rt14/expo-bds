import { useState } from 'react';
import { Menu, type MenuOption, type MenuProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';
import { MenuSurface } from './MenuSurface';

const ACCOUNTS: MenuOption[] = [
  { value: 'ahorros', label: 'Cuenta de ahorros', leading: 'wallet-02', trailingText: '$\u00A01,250.56' },
  { value: 'corriente', label: 'Cuenta corriente', leading: 'bank', trailingText: '$\u00A08,430.10' },
  { value: 'diners', label: 'Tarjeta de crédito', leading: 'credit-card-02', description: 'Diners Club •••• 1004' },
  { value: 'inversion', label: 'Cuenta de inversión', leading: 'trend-up-01', disabled: true },
];

type ControlledProps = Partial<Omit<MenuProps, 'onSelect'>>;

function Controlled({ value = 'ahorros', ...rest }: ControlledProps) {
  const [current, setCurrent] = useState<MenuProps['value']>(value);
  return (
    <MenuSurface>
      <Menu
        options={ACCOUNTS}
        accessibilityLabel="Cuenta de origen"
        size="md"
        {...rest}
        value={current}
        onSelect={setCurrent}
      />
    </MenuSurface>
  );
}

export function MenuScreen() {
  return (
    <ComponentPlayground name="Menu" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled />
        </Variant>
        <Variant label="tallas · md · sm">
          <Controlled size="md" />
          <Controlled size="sm" />
        </Variant>
        <Variant label="con encabezado">
          <Controlled header="Tus cuentas" />
        </Variant>
        <Variant label="en hoja">
          <Controlled presentation="sheet" />
        </Variant>
        <Variant label="vacío (MenuEmpty)">
          <Controlled options={[]} emptyMessage="Sin resultados para ese banco. Revisa el nombre." />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            options={[
              {
                value: 'x',
                label: 'Cuenta de ahorros programados para la educación universitaria',
                description: 'Débito automático el día 5 de cada mes, desde la cuenta principal',
                trailingText: '$\u00A012,480.00',
              },
              ...ACCOUNTS,
            ]}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
