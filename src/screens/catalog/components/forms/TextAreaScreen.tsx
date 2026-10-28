import { useState } from 'react';
import { TextArea, type TextAreaProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<TextAreaProps, 'value' | 'onChangeText' | 'counter' | 'label'> & {
  label: string;
  initial?: string;
  counterMax?: number;
};

function Controlled({ initial = '', counterMax, maxLength, ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return (
    <TextArea
      rows={3}
      placeholder="Cuéntanos qué pasó con la compra"
      {...rest}
      value={value}
      onChangeText={setValue}
      counter={counterMax ? { current: value.length, max: counterMax } : undefined}
      maxLength={counterMax ?? maxLength}
    />
  );
}

const FILLED = 'El consumo de $ 84.20 en Supermaxi del 3 de octubre no lo hice yo.';

export function TextAreaScreen() {
  return (
    <ComponentPlayground name="TextArea" align="start">
      <Variants>
        <Variant label="playground · 3 filas · contador">
          <Controlled label="Motivo del reclamo" counterMax={200} />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" initial={FILLED} />
        </Variant>
        <Variant label="con ayuda">
          <Controlled label="Con ayuda" helperText="No incluyas el número completo de tu tarjeta." />
        </Variant>
        <Variant label="con error">
          <Controlled
            label="Con error"
            initial="No"
            error="Cuéntanos un poco más: escribe al menos 20 caracteres para que podamos revisarlo."
          />
        </Variant>
        <Variant label="deshabilitado · solo lectura">
          <Controlled label="Deshabilitado" initial="Reclamo enviado el 4 de octubre." disabled />
          <Controlled label="Solo lectura" initial="Reclamo n.º 2026-118 · En revisión" readOnly />
        </Variant>
        <Variant label="contador">
          <Controlled label="Mensaje para el beneficiario" initial="Gracias por la cena" counterMax={40} rows={2} />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Motivo del reclamo"
            initial="El 3 de octubre aparece un consumo de $ 84.20 en Supermaxi El Bosque que no reconozco. Ese día estuve en Cuenca y tengo la tarjeta conmigo. Les pido revisar el cargo y, si corresponde, bloquear la tarjeta y emitir una nueva a mi dirección registrada."
            counterMax={200}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
