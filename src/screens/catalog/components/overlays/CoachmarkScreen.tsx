import { useRef, useState } from 'react';
import { View, type ViewInstance } from 'react-native';
import { Button, Coachmark, CoachmarkCard, IconButton, type TooltipPlacement } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

const PLACEMENTS: TooltipPlacement[] = [
  'topStart',
  'top',
  'topEnd',
  'bottomStart',
  'bottom',
  'bottomEnd',
  'leftStart',
  'left',
  'leftEnd',
  'rightStart',
  'right',
  'rightEnd',
  'none',
];

const TITLE = 'Oculta tu saldo';
const BODY = 'Toca el ojo para esconder tus montos cuando estés en público.';
const PHOTO = { uri: 'https://picsum.photos/560/315' };

function Anchored({
  label,
  anchorAt = 'top',
  pointer = true,
  step,
  withNext = true,
}: {
  label: string;
  anchorAt?: 'top' | 'bottom';
  pointer?: boolean;
  step?: { index: number; total: number };
  withNext?: boolean;
}) {
  const target = useRef<ViewInstance>(null);
  const [open, setOpen] = useState(true);
  const next = () => setOpen(false);

  return (
    <Variant label={label}>
      <View
        style={{
          alignSelf: 'stretch',
          minHeight: anchorAt === 'top' ? 380 : 460,
          justifyContent: anchorAt === 'top' ? 'flex-start' : 'flex-end',
        }}
      >
        <View ref={target} style={{ alignSelf: 'center' }}>
          <IconButton icon="eye" label="Mostrar saldo" appearance="neutral" onPress={() => setOpen(true)} />
        </View>
        {open ? (
          <Coachmark
            target={target}
            title={TITLE}
            body={BODY}
            pointer={pointer}
            onDismiss={() => setOpen(false)}
            {...(step ? { step, onNext: next } : withNext ? { onNext: next } : {})}
          />
        ) : (
          <Button size="sm" appearance="outline" label="Volver a mostrar" onPress={() => setOpen(true)} />
        )}
      </View>
    </Variant>
  );
}

export function CoachmarkScreen() {
  return (
    <ComponentPlayground name="Coachmark" align="start">
      <Variants>
        <Variant label="playground · single">
          <CoachmarkCard placement="topStart" title={TITLE} body={BODY} onNext={noop} onDismiss={noop} />
        </Variant>
        <Variant label="con imagen">
          <CoachmarkCard
            placement="topStart"
            media={PHOTO}
            title="Paga con tu reloj"
            body="Agrega tu tarjeta a la billetera de tu teléfono y paga sin sacarla."
            onNext={noop}
            onDismiss={noop}
          />
        </Variant>
        <Variant label="secuencia · 2 de 4">
          <CoachmarkCard
            placement="topStart"
            title="Título de la función"
            body="Explicación breve del beneficio, en una o dos líneas."
            step={{ index: 2, total: 4 }}
            onBack={noop}
            onNext={noop}
            onDismiss={noop}
          />
        </Variant>
        <Variant label="texto largo">
          <CoachmarkCard
            placement="topStart"
            title="Mira cuánto gastaste por categoría"
            body="Agrupamos tus compras en supermercado, restaurantes, viajes y salud para que veas en qué se va tu cupo cada mes y puedas ajustar tu presupuesto a tiempo."
            nextLabel="Ver mis gastos"
            onNext={noop}
            onDismiss={noop}
          />
        </Variant>
        {PLACEMENTS.map((placement) => (
          <Variant key={placement} label={`placement · ${placement}`}>
            <CoachmarkCard
              placement={placement}
              title="Título de la función"
              body="Explicación breve del beneficio, en una o dos líneas."
              onNext={noop}
              onDismiss={noop}
            />
          </Variant>
        ))}
        <Anchored label="anclado" />
        <Anchored label="solo con cerrar" withNext={false} />
        <Anchored label="sin punta" pointer={false} />
        <Anchored label="arriba del ancla" anchorAt="bottom" />
        <Anchored label="anclado · paso 2 de 3" step={{ index: 2, total: 3 }} />
      </Variants>
    </ComponentPlayground>
  );
}
