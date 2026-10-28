import { useState } from 'react';
import { Calendar, type CalendarProps, type CalendarValue } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

// Hoy fijo, igual que en Storybook: martes 22 de septiembre de 2026.
const TODAY = new Date(2026, 8, 22);
const sep = (day: number) => new Date(2026, 8, day);

type ControlledProps = Omit<CalendarProps, 'onChange' | 'month' | 'onMonthChange' | 'today'>;

function Controlled(props: ControlledProps) {
  const [value, setValue] = useState<CalendarValue | null | undefined>(props.value);
  const [month, setMonth] = useState<Date>(sep(1));
  return (
    <Calendar
      {...props}
      today={TODAY}
      value={value}
      onChange={setValue}
      month={month}
      onMonthChange={setMonth}
    />
  );
}

export function CalendarScreen() {
  return (
    <ComponentPlayground name="Calendar" align="start">
      <Variants>
        <Variant label="playground · single">
          <Controlled selection="single" value={sep(25)} />
        </Variant>
        <Variant label="placement · sides">
          <Controlled selection="single" value={sep(25)} placement="sides" />
        </Variant>
        <Variant label="placement · end">
          <Controlled selection="single" value={sep(25)} placement="end" />
        </Variant>
        <Variant label="rango">
          <Controlled selection="range" value={{ start: sep(8), end: sep(15) }} />
        </Variant>
        <Variant label="días deshabilitados y marcados">
          <Controlled
            selection="single"
            value={sep(25)}
            minDate={TODAY}
            isDateDisabled={(d: Date) => d.getDay() === 0 || d.getDay() === 6}
            markedDates={[sep(30)]}
            markedLabel="fecha de corte"
          />
        </Variant>
        <Variant label="caso real: fecha de pago">
          <Controlled
            selection="single"
            value={null}
            minDate={TODAY}
            maxDate={sep(30)}
            markedDates={[sep(30)]}
            markedLabel="vence tu tarjeta"
            accessibilityLabel="Fecha de pago"
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
