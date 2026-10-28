import { useState } from 'react';
import { DateField, type DateFieldProps, type DateFieldValue } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';
import { addDays, isWeekend, startOfDay, toISODate } from './dates';

const TODAY = startOfDay(new Date());

type ControlledProps = Omit<DateFieldProps, 'value' | 'onChange' | 'label'> & {
  label: string;
  initial?: DateFieldValue;
};

function Controlled({ initial = null, ...rest }: ControlledProps) {
  const [value, setValue] = useState<DateFieldValue>(initial);
  return <DateField picker="calendar" {...rest} value={value} onChange={setValue} />;
}

export function DateFieldScreen() {
  return (
    <ComponentPlayground name="DateField" align="start">
      <Variants>
        <Variant label="playground · cerrado">
          <Controlled label="Fecha de pago" initial={toISODate(addDays(TODAY, 3))} />
        </Variant>
        <Variant label="rango">
          <Controlled
            label="Periodo del estado de cuenta"
            picker="range"
            initial={{ start: toISODate(addDays(TODAY, -10)), end: toISODate(addDays(TODAY, -3)) }}
          />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" />
          <Controlled label="default · con valor" initial={toISODate(TODAY)} />
        </Variant>
        <Variant label="con ayuda">
          <Controlled label="Con ayuda" initial={toISODate(TODAY)} helperText="Puedes programarla hasta 90 días." />
        </Variant>
        <Variant label="con error">
          <Controlled
            label="Con error"
            validation="error"
            helperText="La fecha ya pasó: elige hoy o un día después."
            initial={toISODate(addDays(TODAY, -2))}
          />
        </Variant>
        <Variant label="deshabilitado">
          <Controlled label="Deshabilitado" initial={toISODate(TODAY)} isDisabled />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Fecha en que quieres que se debite automáticamente la cuota del préstamo"
            helperText="Si la fecha cae en feriado, el débito se hace el siguiente día hábil."
          />
        </Variant>
        <Variant label="caso real: fecha de pago">
          <Controlled
            label="Fecha de pago"
            helperText="Solo días hábiles, hasta 90 días."
            minDate={toISODate(TODAY)}
            maxDate={toISODate(addDays(TODAY, 90))}
            isDateDisabled={isWeekend}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
