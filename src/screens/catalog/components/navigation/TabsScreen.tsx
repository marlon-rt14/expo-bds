import { useState } from 'react';
import { Text as RNText, View } from 'react-native';
import { Tabs, tabId, type TabDef, type TabsProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

function Demo({ initial, ...props }: Omit<TabsProps, 'value' | 'onChange'> & { initial?: string }) {
  const [value, setValue] = useState(initial ?? props.tabs[0].key);
  return <Tabs {...props} value={value} onChange={setValue} />;
}

const THREE: TabDef[] = [
  { key: 't1', label: 'Tab 1' },
  { key: 't2', label: 'Tab 2' },
  { key: 't3', label: 'Tab 3' },
];

const LAYOUTS = ['scrollable', 'fitted'] as const;
const SIZES = ['lg', 'md'] as const;

const CARD: TabDef[] = [
  { key: 'mov', label: 'Movimientos', badge: 3 },
  { key: 'dif', label: 'Diferidos' },
  { key: 'est', label: 'Estados' },
];

const PANELS: Record<string, string> = {
  mov: 'Supermaxi · −$ 54.20 · Hoy',
  dif: 'Laptop en 12 cuotas · $ 104.17 al mes',
  est: 'Septiembre 2026 · Pagado',
};

export function TabsScreen() {
  return (
    <ComponentPlayground name="Tabs" align="start">
      <Variants>
        {LAYOUTS.map((layout) =>
          SIZES.map((size) => (
            <Variant key={`${layout}-${size}`} label={`${layout} · ${size}`}>
              <Demo tabs={THREE} layout={layout} size={size} label={`Ejemplo ${layout} ${size}`} />
            </Variant>
          )),
        )}
        <Variant label="ícono y contador">
          <Demo
            label="Actividad de la tarjeta"
            tabs={[
              { key: 'mov', label: 'Movimientos', leadingIcon: 'receipt', badge: 9 },
              { key: 'dif', label: 'Diferidos', leadingIcon: 'calendar' },
              { key: 'ben', label: 'Beneficios', leadingIcon: 'gift-01', badge: 2 },
            ]}
          />
        </Variant>
        <Variant label="pestaña deshabilitada">
          <Demo
            label="Con pestaña deshabilitada"
            tabs={[
              { key: 'a', label: 'Activas' },
              { key: 'b', label: 'Bloqueadas', disabled: true },
              { key: 'c', label: 'Cerradas' },
            ]}
          />
        </Variant>
        <Variant label="sin divider">
          <Demo label="Sin divider" tabs={THREE} divider={false} />
        </Variant>
        <Variant label="desborde · 6">
          <Demo
            label="Categorías de gasto"
            tabs={[
              { key: 'todo', label: 'Todo' },
              { key: 'super', label: 'Supermercado' },
              { key: 'rest', label: 'Restaurantes' },
              { key: 'viajes', label: 'Viajes' },
              { key: 'salud', label: 'Salud' },
              { key: 'educ', label: 'Educación' },
            ]}
          />
        </Variant>
        <Variant label="texto largo">
          <Demo
            label="Texto largo"
            tabs={[
              { key: 'a', label: 'Estados de cuenta anteriores' },
              { key: 'b', label: 'Pagos programados del mes' },
              { key: 'c', label: 'Certificados' },
            ]}
          />
        </Variant>
        <Variant label="detalle de la tarjeta">
          <CardTabs />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}

function CardTabs() {
  const [value, setValue] = useState('mov');
  return (
    <View style={{ alignSelf: 'stretch' }}>
      <Tabs label="Detalle de la tarjeta" panelIdPrefix="card" layout="fitted" value={value} onChange={setValue} tabs={CARD} />
      <View role="tabpanel" nativeID={`card-${value}`} aria-labelledby={tabId('card', value)}>
        <RNText style={{ padding: 16 }}>{PANELS[value]}</RNText>
      </View>
    </View>
  );
}
