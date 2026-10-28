import { useEffect, useState } from 'react';
import { OTPField, type OTPFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<OTPFieldProps, 'value' | 'onChangeText'> & { initial?: string };

function Controlled({ initial = '', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <OTPField {...rest} value={value} onChangeText={setValue} />;
}

function VerifyTransfer() {
  const [value, setValue] = useState('');
  const [left, setLeft] = useState(30);
  useEffect(() => {
    if (left <= 0) return undefined;
    const id = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [left]);
  return (
    <OTPField
      value={value}
      onChangeText={setValue}
      onComplete={noop}
      label="Código enviado al 099 *** 4567"
      helperText={
        left > 0 ? `Puedes pedir otro código en 0:${String(left).padStart(2, '0')}` : 'Ya puedes pedir otro código.'
      }
    />
  );
}

const LABEL = 'Código de verificación';
const HELPER = 'Puedes pedir otro código en 0:30';

export function OTPFieldScreen() {
  return (
    <ComponentPlayground name="OTPField" align="start">
      <Variants>
        <Variant label="playground · length 6">
          <Controlled label="Código de seguridad de 6 dígitos" length={6} helperText={HELPER} onComplete={noop} />
        </Variant>
        <Variant label="default · vacío">
          <Controlled label={`${LABEL}, vacío`} helperText={HELPER} />
        </Variant>
        <Variant label="a medio llenar">
          <Controlled label={`${LABEL}, a medio llenar`} initial="482" helperText={HELPER} />
        </Variant>
        <Variant label="completo">
          <Controlled label={LABEL} initial="482913" helperText="Verificando…" />
        </Variant>
        <Variant label="con error">
          <Controlled
            label={LABEL}
            initial="482910"
            helperText={HELPER}
            error="El código no es correcto. Revisa el SMS o pide uno nuevo."
          />
        </Variant>
        <Variant label="deshabilitado">
          <Controlled label={LABEL} initial="48" helperText={HELPER} disabled />
        </Variant>
        <Variant label="largo 4 y 6">
          <Controlled label="PIN de la tarjeta" length={4} initial="12" helperText="PIN de 4 dígitos" />
          <Controlled label={LABEL} length={6} initial="1234" helperText={HELPER} />
        </Variant>
        <Variant label="verificar transferencia">
          <VerifyTransfer />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
