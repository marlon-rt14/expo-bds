import { useState } from 'react';
import { PasswordField, PasswordRequirements, type PasswordFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<PasswordFieldProps, 'value' | 'onChangeText' | 'label'> & {
  label: string;
  initial?: string;
};

function Controlled({ initial = '', visible = false, ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  const [shown, setShown] = useState(visible);
  return (
    <PasswordField {...rest} value={value} onChangeText={setValue} visible={shown} onVisibleChange={setShown} />
  );
}

const requirements = (value: string) => [
  { label: 'Al menos 8 caracteres', met: value.length >= 8 },
  { label: 'Al menos una mayúscula', met: /\p{Lu}/u.test(value) },
  { label: 'Al menos un número', met: /\d/.test(value) },
];

function CreatePassword() {
  const [value, setValue] = useState('Quito20');
  return (
    <PasswordField
      label="Contraseña nueva"
      value={value}
      onChangeText={setValue}
      autoComplete="new-password"
      requirements={requirements(value)}
    />
  );
}

export function PasswordFieldScreen() {
  return (
    <ComponentPlayground name="PasswordField" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled label="Contraseña" initial="Quito2026!" placeholder="Escribe tu contraseña" size="md" />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" initial="Quito2026!" />
        </Variant>
        <Variant label="visible">
          <Controlled label="Visible" initial="Quito2026!" visible />
        </Variant>
        <Variant label="con ayuda">
          <Controlled label="Con ayuda" helperText="Es la misma que usas en la app de Diners Club." />
        </Variant>
        <Variant label="con error">
          <Controlled
            label="Con error"
            initial="1234"
            error="La contraseña no coincide. Revísala o elige «Olvidé mi contraseña»."
          />
        </Variant>
        <Variant label="deshabilitado · solo lectura">
          <Controlled label="Deshabilitado" initial="Quito2026!" disabled />
          <Controlled label="Solo lectura" initial="Quito2026!" readOnly />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled label="Talla lg" initial="Quito2026!" size="lg" />
          <Controlled label="Talla md" initial="Quito2026!" size="md" />
          <Controlled label="Talla sm" initial="Quito2026!" size="sm" />
        </Variant>
        <Variant label="crear contraseña">
          <CreatePassword />
        </Variant>
        <Variant label="PasswordRequirements">
          <PasswordRequirements
            requirements={[
              { label: 'Al menos 8 caracteres', met: true },
              { label: 'Al menos una mayúscula', met: false },
              { label: 'Al menos un número', met: false, failed: true },
            ]}
          />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Contraseña de la banca en línea para empresas (la que te dio tu administrador)"
            initial="Quito2026!"
            helperText="Si es la primera vez que entras, usa la contraseña temporal que te llegó por correo; te pediremos cambiarla."
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
