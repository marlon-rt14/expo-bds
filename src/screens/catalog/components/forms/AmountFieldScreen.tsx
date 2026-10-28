import { useState } from 'react';
import { AmountField, formatAmountInput, parseAmount, type AmountFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<AmountFieldProps, 'value' | 'onChangeText'> & { initial?: string };

function Controlled({ initial = '', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <AmountField {...rest} value={value} onChangeText={(next) => setValue(formatAmountInput(next, '$', value))} />;
}

function AgainstAvailable() {
  const [value, setValue] = useState('$ 2,500.00');
  const over = parseAmount(value) > 2450.18;
  return (
    <AmountField
      label="Monto a transferir"
      value={value}
      onChangeText={(next) => setValue(formatAmountInput(next, '$', value))}
      helperText="Saldo disponible $ 2,450.18"
      error={over ? 'El monto supera tu saldo disponible de $ 2,450.18. Escribe un monto menor.' : undefined}
    />
  );
}

export function AmountFieldScreen() {
  return (
    <ComponentPlayground name="AmountField" align="start">
      <Variants>
        <Variant label="playground · 2xl">
          <Controlled label="Monto a transferir" initial="$ 1,250.00" size="2xl" helperText="Saldo disponible $ 1,250.56" />
        </Variant>
        <Variant label="vacío">
          <Controlled label="Monto a transferir, vacío" helperText="Saldo disponible $ 2,450.18" />
        </Variant>
        <Variant label="error">
          <Controlled
            label="Monto a transferir"
            initial="$ 3,100.00"
            helperText="Saldo disponible $ 2,450.18"
            error="El monto supera tu saldo disponible de $ 2,450.18. Escribe un monto menor."
          />
        </Variant>
        <Variant label="deshabilitado">
          <Controlled label="Monto a transferir" initial="$ 1,250.00" disabled helperText="El monto lo fija la factura." />
        </Variant>
        <Variant label="tallas · 2xl">
          <Controlled label="Monto a transferir" initial="$ 1,250.00" size="2xl" />
        </Variant>
        <Variant label="tallas · lg">
          <Controlled label="Monto a transferir" initial="$ 1,250.00" size="lg" />
        </Variant>
        <Variant label="contra el saldo disponible">
          <AgainstAvailable />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
