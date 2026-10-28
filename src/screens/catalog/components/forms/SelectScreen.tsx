import { useState } from 'react';
import { Select, type SelectOption, type SelectProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const ACCOUNTS: SelectOption[] = [
  { value: 'ahorros', label: 'Cuenta de ahorros', icon: 'wallet-02', description: 'N.º •••• 4821 · Disponible $\u00A01,250.56' },
  { value: 'corriente', label: 'Cuenta corriente', icon: 'bank', description: 'N.º •••• 0937 · Disponible $\u00A08,430.10' },
  { value: 'diners', label: 'Diners Club', icon: 'credit-card-02', description: 'N.º •••• 1004 · Cupo $\u00A03,000.00' },
  { value: 'inversion', label: 'Cuenta de inversión', icon: 'trend-up-01', description: 'No admite débitos', disabled: true },
];

const DOCUMENTS: SelectOption[] = [
  'Cédula',
  'Pasaporte',
  'RUC',
  'Carné de refugiado',
  'Licencia de conducir',
  'Carné de discapacidad',
  'Partida de nacimiento',
  'Visa de residencia',
  'Otro documento',
].map((label) => ({ value: label.toLowerCase(), label }));

const BASE: SelectProps = {
  label: 'Cuenta de origen',
  options: ACCOUNTS,
  value: null,
  onChange: () => {},
  placeholder: 'Elige una cuenta',
};

type ControlledProps = Partial<Omit<SelectProps, 'onChange'>>;

function Controlled({ value = null, ...rest }: ControlledProps) {
  const [current, setCurrent] = useState<SelectProps['value']>(value);
  return <Select {...BASE} {...rest} value={current} onChange={setCurrent} />;
}

export function SelectScreen() {
  return (
    <ComponentPlayground name="Select" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled size="md" leadingIcon="wallet-02" />
        </Variant>
        <Variant label="muchas opciones (hoja)">
          <Controlled
            label="Tipo de documento"
            options={DOCUMENTS}
            value="cédula"
            placeholder="Elige un documento"
          />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled size="lg" value="ahorros" />
          <Controlled size="md" value="ahorros" />
          <Controlled size="sm" value="ahorros" />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" value="ahorros" />
        </Variant>
        <Variant label="con ayuda">
          <Controlled label="Con ayuda" value="corriente" helperText="De aquí sale el dinero de la transferencia." />
        </Variant>
        <Variant label="con error">
          <Controlled label="Con error" error="Elige la cuenta de la que sale el dinero." />
        </Variant>
        <Variant label="solo lectura · deshabilitado">
          <Controlled label="Solo lectura" value="diners" readOnly />
          <Controlled label="Deshabilitado" value="ahorros" disabled />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Cuenta desde la que se debitará el pago mensual del seguro"
            options={[
              { value: 'x', label: 'Cuenta de ahorros programados para la educación universitaria de los hijos' },
              ...ACCOUNTS,
            ]}
            value="x"
            helperText="Si cambias la cuenta, el próximo débito sale de la nueva a partir del siguiente corte."
            leadingIcon="wallet-02"
          />
        </Variant>
        <Variant label="menú o hoja · 7 opciones">
          <Controlled
            label="Tipo de documento (7 opciones)"
            options={DOCUMENTS.slice(0, 7)}
            size="sm"
            placeholder="Elige un documento"
          />
        </Variant>
        <Variant label="menú o hoja · 8 opciones">
          <Controlled
            label="Tipo de documento (8 opciones)"
            options={DOCUMENTS.slice(0, 8)}
            size="sm"
            placeholder="Elige un documento"
          />
        </Variant>
        <Variant label="caso real: cuenta de origen">
          <Controlled helperText="Disponible al momento de transferir." leadingIcon="wallet-02" />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
