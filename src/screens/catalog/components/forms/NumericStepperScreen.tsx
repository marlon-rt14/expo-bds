import { useState } from 'react';
import { Text } from 'react-native';
import { NumericStepper, type NumericStepperProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<NumericStepperProps, 'value' | 'onChange'> & { initial: number };

function Controlled({ initial, ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <NumericStepper {...rest} value={value} onChange={setValue} />;
}

const BASE = { min: 0, max: 5, step: 1, size: 'md', accessibilityLabel: 'Tarjetas adicionales' } as const;

export function NumericStepperScreen() {
  return (
    <ComponentPlayground name="NumericStepper" align="start">
      <Variants>
        <Variant label="playground">
          <Controlled {...BASE} initial={1} />
        </Variant>
        <Variant label="en el mínimo (− apagado)">
          <Controlled {...BASE} initial={0} />
        </Variant>
        <Variant label="en medio">
          <Controlled {...BASE} initial={2} />
        </Variant>
        <Variant label="en el máximo (+ apagado)">
          <Controlled {...BASE} initial={5} />
        </Variant>
        <Variant label="deshabilitado">
          <Controlled {...BASE} initial={2} disabled />
        </Variant>
        <Variant label="md">
          <Controlled {...BASE} size="md" initial={1} />
        </Variant>
        <Variant label="sm">
          <Controlled {...BASE} size="sm" initial={1} />
        </Variant>
        <Variant label="tarjetas adicionales">
          <Text>¿Cuántas tarjetas adicionales quieres pedir?</Text>
          <Controlled {...BASE} initial={1} max={4} accessibilityLabel="Cantidad de tarjetas adicionales" />
          <Text style={{ fontSize: 12, color: '#5c6570' }}>
            Puedes pedir hasta 4. La primera no tiene costo de emisión.
          </Text>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
