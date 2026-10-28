import { useState } from 'react';
import { PhoneField, type CountryCode, type PhoneFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

/** Agrupado de celular de Ecuador: 99 123 4567. */
const formatEC = (raw: string) => {
  const digits = raw.replace(/\D/g, '').replace(/^0/, '').slice(0, 9);
  return [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5)].filter(Boolean).join(' ');
};

type ControlledProps = Omit<PhoneFieldProps, 'value' | 'onChangeText' | 'label'> & {
  label: string;
  initial?: string;
};

function Controlled({ initial = '', country = 'EC', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  const [current, setCurrent] = useState<CountryCode>(country);
  return (
    <PhoneField
      placeholder="99 123 4567"
      {...rest}
      value={value}
      country={current}
      onCountryChange={setCurrent}
      onChangeText={(next) => setValue(current === 'EC' ? formatEC(next) : next)}
    />
  );
}

export function PhoneFieldScreen() {
  return (
    <ComponentPlayground name="PhoneField" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled label="Número de celular" initial="99 123 4567" size="md" />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" initial="99 123 4567" />
        </Variant>
        <Variant label="con ayuda">
          <Controlled
            label="Con ayuda"
            initial="99 123 4567"
            helperText="Te enviaremos los códigos de verificación a este número."
          />
        </Variant>
        <Variant label="con error">
          <Controlled
            label="Con error"
            initial="99 123"
            error="Al número le faltan dígitos: el celular tiene 9 después del 0. Revísalo."
          />
        </Variant>
        <Variant label="otro país">
          <Controlled label="Otro país" country="CO" initial="300 123 4567" />
        </Variant>
        <Variant label="un solo país (leadingContent none)">
          <Controlled label="Un solo país" countries={['EC']} initial="99 123 4567" />
        </Variant>
        <Variant label="solo lectura · deshabilitado">
          <Controlled label="Solo lectura" initial="99 123 4567" readOnly />
          <Controlled label="Deshabilitado" initial="99 123 4567" disabled />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled label="Talla lg" initial="99 123 4567" size="lg" />
          <Controlled label="Talla md" initial="99 123 4567" size="md" />
          <Controlled label="Talla sm" initial="99 123 4567" size="sm" />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Celular al que te avisaremos cuando tu tarjeta esté lista para retirar en la agencia"
            initial="99 123 4567"
            helperText="Presenta tu cédula original al retirarla; este número debe estar a tu nombre."
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
