import { useState } from 'react';
import { View } from 'react-native';
import { CardField, isValidCardNumber, type CardFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<CardFieldProps, 'value' | 'onChangeText'> & { initial?: string };

function Controlled({ initial = '', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <CardField {...rest} value={value} onChangeText={setValue} />;
}

function AddCard() {
  const [number, setNumber] = useState('3056 930902 590');
  const [expiry, setExpiry] = useState('10/2');
  const [cvv, setCvv] = useState('');
  const digits = number.replace(/\D/g, '');
  return (
    <View style={{ gap: 16 }}>
      <CardField
        part="number"
        label="Número de tarjeta"
        value={number}
        onChangeText={setNumber}
        size="lg"
        error={
          digits.length >= 14 && !isValidCardNumber(number)
            ? 'El número no es válido. Revisa los dígitos de tu tarjeta.'
            : undefined
        }
      />
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View style={{ flex: 1 }}>
          <CardField
            part="expiry"
            label="Vencimiento"
            value={expiry}
            onChangeText={setExpiry}
            size="lg"
            error={expiry.length === 5 && Number(expiry.slice(0, 2)) > 12 ? 'El mes va de 01 a 12.' : undefined}
          />
        </View>
        <View style={{ flex: 1 }}>
          <CardField part="cvv" label="CVV" value={cvv} onChangeText={setCvv} size="lg" />
        </View>
      </View>
    </View>
  );
}

export function CardFieldScreen() {
  return (
    <ComponentPlayground name="CardField" align="start">
      <Variants>
        <Variant label="playground · number">
          <Controlled part="number" label="Número de tarjeta" placeholder="0000 0000 0000 0000" initial="4539 1488 0343 6467" size="lg" />
        </Variant>
        <Variant label="marca detectada">
          <Controlled part="number" label="Diners Club" initial="3056 930902 5904" size="lg" />
          <Controlled part="number" label="Visa" initial="4539 1488 0343 6467" size="lg" />
          <Controlled part="number" label="Mastercard" initial="5425 2334 3010 9903" size="lg" />
          <Controlled part="number" label="American Express" initial="3714 496353 98431" size="lg" />
          <Controlled part="number" label="Discover" initial="6011 0009 9013 9424" size="lg" />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled part="number" label="default · vacío" size="lg" />
          <Controlled part="number" label="default · con valor" initial="3056 930902 5904" size="lg" />
        </Variant>
        <Variant label="con error">
          <Controlled
            part="number"
            label="Con error"
            initial="4539 1488 0343 6468"
            size="lg"
            error="El número no es válido. Revisa los 16 dígitos de tu tarjeta."
          />
        </Variant>
        <Variant label="vencimiento y cvv con ayuda">
          <Controlled part="expiry" label="Vencimiento" size="lg" helperText="Mes y año, como en la tarjeta." />
          <Controlled part="cvv" label="Código de seguridad" initial="123" size="lg" helperText="Los 3 dígitos del reverso." />
        </Variant>
        <Variant label="deshabilitado · solo lectura">
          <Controlled part="number" label="Deshabilitado" initial="3056 930902 5904" size="lg" disabled />
          <Controlled part="number" label="Solo lectura" initial="3056 930902 5904" size="lg" readOnly />
        </Variant>
        <Variant label="agregar tarjeta">
          <AddCard />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled part="number" label="Talla lg (checkout)" initial="3056 930902 5904" size="lg" />
          <Controlled part="number" label="Talla md" initial="3056 930902 5904" size="md" />
          <Controlled part="number" label="Talla sm" initial="3056 930902 5904" size="sm" />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
