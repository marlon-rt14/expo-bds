import { View } from 'react-native';
import { CalendarDay, type CalendarDayProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

const VARIANTS: Array<Partial<CalendarDayProps> & { name: string }> = [
  { name: 'default' },
  { name: 'hoy', isToday: true },
  { name: 'elegido', isSelected: true },
  { name: 'elegido · hoy', isSelected: true, isToday: true },
  { name: 'indicador', showIndicator: true },
  { name: 'elegido · indicador', isSelected: true, showIndicator: true },
];

const ROW = { flexDirection: 'row', flexWrap: 'wrap', gap: 8 } as const;

export function CalendarDayScreen() {
  return (
    <ComponentPlayground name="CalendarDay" align="start">
      <Variants>
        <Variant label="playground">
          <View style={ROW}>
            <CalendarDay day="15" accessibilityLabel="martes, 15 de septiembre de 2026" onPress={noop} />
          </View>
        </Variant>
        <Variant label={`variantes · ${VARIANTS.map((v) => v.name).join(' · ')}`}>
          <View style={ROW}>
            {VARIANTS.map(({ name, ...rest }) => (
              <CalendarDay key={name} day="15" {...rest} accessibilityLabel={`15 de septiembre, ${name}`} onPress={noop} />
            ))}
          </View>
        </Variant>
        <Variant label="disabled · disabled hoy">
          <View style={ROW}>
            <CalendarDay day="15" disabled accessibilityLabel="15 de septiembre, no disponible" />
            <CalendarDay day="15" disabled isToday accessibilityLabel="15 de septiembre, hoy, no disponible" />
          </View>
        </Variant>
        <Variant label="rango: start · middle · end">
          <View style={ROW}>
            <CalendarDay day="8" isSelected rangePosition="start" onPress={noop} accessibilityLabel="8 de septiembre, inicio del rango" />
            <CalendarDay day="9" isSelected rangePosition="middle" onPress={noop} accessibilityLabel="9 de septiembre" />
            <CalendarDay day="10" isSelected rangePosition="end" onPress={noop} accessibilityLabel="10 de septiembre, fin del rango" />
          </View>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
