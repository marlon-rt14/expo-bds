import { Callout } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

export function CalloutScreen() {
  return (
    <ComponentPlayground name="Callout" align="start">
      <Variants>
        <Variant label="brand · ícono, título, cuerpo">
          <Callout
            palette="brand"
            icon="star-01"
            title="Tu tarjeta ahora tiene cashback"
            body="Recibe el 2 % de tus compras en supermercados, directo en tu estado de cuenta."
          />
        </Variant>
        {(['brand', 'neutral'] as const).map((palette) => (
          <Variant key={palette} label={`${palette} · ícono, título, acción, dismiss`}>
            <Callout
              palette={palette}
              icon="star-01"
              title="Tu tarjeta ahora tiene cashback"
              body="Recibe el 2 % de tus compras en supermercados, directo en tu estado de cuenta."
              action={{ label: 'Activar cashback', onPress: noop }}
              onDismiss={noop}
            />
          </Variant>
        ))}
        <Variant label="brand · sin título">
          <Callout
            palette="brand"
            icon="gift-01"
            body="Activa el cashback y recibe el 2 % de tus compras en supermercados."
            action={{ label: 'Activar cashback', onPress: noop }}
            onDismiss={noop}
          />
        </Variant>
        <Variant label="neutral · sin acción">
          <Callout
            palette="neutral"
            icon="lightbulb-02"
            title="Difiere sin intereses"
            body="Las compras de más de $ 200 se pueden pasar a 3 cuotas sin intereses."
            onDismiss={noop}
          />
        </Variant>
        <Variant label="neutral · solo cuerpo">
          <Callout palette="neutral" body="Sin ícono ni título: solo el mensaje, en el orden de lectura." />
        </Variant>
        <Variant label="texto largo">
          <Callout
            icon="star-01"
            title="Acumula millas ClubMiles en cada compra con tu Diners Club"
            body="Cada dólar en compras nacionales suma 1 milla y cada dólar en el exterior suma 2. Canjéalas por pasajes, estadías o productos desde la app."
            action={{ label: 'Ver cómo canjear', onPress: noop }}
            onDismiss={noop}
          />
        </Variant>
        <Variant label="caso real · pago automático">
          <Callout
            icon="calendar"
            title="Programa tu débito automático"
            body="Debitamos el mínimo de tu cuenta cada mes y evitas el interés de mora."
            action={{ label: 'Programar pago', onPress: noop }}
            onDismiss={noop}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
