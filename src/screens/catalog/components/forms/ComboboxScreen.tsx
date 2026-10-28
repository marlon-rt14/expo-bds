import { useState } from 'react';
import { Combobox, type ComboboxOption, type ComboboxProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const BANKS: ComboboxOption[] = [
  'Banco Pichincha',
  'Banco Guayaquil',
  'Banco del Pacífico',
  'Produbanco',
  'Banco Internacional',
  'Banco Bolivariano',
  'Banco del Austro',
  'Banco de Machala',
  'Banco Solidario',
  'Banco ProCredit',
  'Banco General Rumiñahui',
  'Banco de Loja',
  'Cooperativa JEP',
  'Cooperativa Jardín Azuayo',
  'Cooperativa 29 de Octubre',
].map((label) => ({ value: label.toLowerCase().replace(/\s+/g, '-'), label, icon: 'bank' as const }));

const CITIES: ComboboxOption[] = ['Quito', 'Guayaquil', 'Cuenca', 'Manta', 'Loja', 'Ambato', 'Machala', 'Ibarra'].map(
  (label) => ({ value: label.toLowerCase(), label, icon: 'marker-pin-01' as const }),
);

const BASE: ComboboxProps = {
  label: 'Banco destino',
  options: BANKS,
  value: null,
  onChange: () => {},
  size: 'lg',
  placeholder: 'Escribe para buscar',
  selection: 'single',
};

type ControlledProps = Omit<ComboboxProps, 'onChange' | 'options' | 'label'> &
  Partial<Pick<ComboboxProps, 'options' | 'label'>>;

function Controlled({ value = null, ...rest }: ControlledProps) {
  const [current, setCurrent] = useState<ComboboxProps['value']>(value);
  return <Combobox {...BASE} {...rest} value={current} onChange={setCurrent} />;
}

export function ComboboxScreen() {
  return (
    <ComponentPlayground name="Combobox" align="start">
      <Variants>
        <Variant label="playground · cerrado">
          <Controlled leadingIcon="bank" />
        </Variant>
        <Variant label="con valor">
          <Controlled leadingIcon="bank" value="produbanco" />
        </Variant>
        <Variant label="multiple · limpiable">
          <Controlled
            label="Ciudades de entrega"
            options={CITIES}
            selection="multiple"
            value={['quito', 'cuenca']}
            clearable
            leadingIcon="marker-pin-01"
          />
        </Variant>
        <Variant label="tallas · lg · md">
          <Controlled size="lg" value="banco-pichincha" />
          <Controlled size="md" value="banco-pichincha" />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" value="produbanco" />
        </Variant>
        <Variant label="con ayuda · limpiable">
          <Controlled label="Con ayuda" helperText="Busca por el nombre del banco o de la cooperativa." />
          <Controlled label="Limpiable" value="banco-guayaquil" clearable />
        </Variant>
        <Variant label="con error">
          <Controlled label="Con error" error="Elige el banco de la cuenta destino para continuar." />
        </Variant>
        <Variant label="solo lectura · deshabilitado">
          <Controlled label="Solo lectura" value="produbanco" readOnly />
          <Controlled label="Deshabilitado" value="produbanco" disabled />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Institución financiera de la cuenta a la que vas a transferir"
            value="cooperativa-jardín-azuayo"
            helperText="Si no encuentras tu cooperativa, escribe parte de su nombre: buscamos sin importar tildes ni mayúsculas."
            leadingIcon="bank"
          />
        </Variant>
        <Variant label="caso real: banco destino">
          <Controlled
            leadingIcon="bank"
            helperText="Las transferencias a otros bancos se acreditan en 24 horas hábiles."
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
