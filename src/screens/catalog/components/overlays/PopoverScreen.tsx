import { cloneElement, useState, type ReactElement, type ReactNode } from 'react';
import { Text, View } from 'react-native';
import { Button, IconButton, Popover, Sheet } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

function Ficha() {
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ color: '#5c6570' }}>Cupo disponible</Text>
      <Text style={{ fontSize: 20 }}>$ 2,450.00</Text>
      <Text style={{ color: '#5c6570' }}>Se libera al pagar tus compras del mes.</Text>
    </View>
  );
}

function Receta({
  label,
  title,
  trigger,
  children,
}: {
  label: string;
  title: string;
  trigger: ReactElement<{ onPress?: () => void }>;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Variant label={label}>
      {cloneElement(trigger, { onPress: () => setOpen(true) })}
      <Sheet isOpen={open} onDismiss={() => setOpen(false)} title={title}>
        <View style={{ padding: 16, gap: 12 }}>{children}</View>
      </Sheet>
    </Variant>
  );
}

export function PopoverScreen() {
  return (
    <ComponentPlayground name="Popover" align="start">
      <Variants>
        <Receta
          label="playground · ver cupo"
          title="Cupo de tu tarjeta"
          trigger={<Button label="Ver cupo" appearance="outline" size="md" onPress={noop} />}
        >
          <Ficha />
        </Receta>
        <Receta
          label="size sm"
          title="Cupo de tu tarjeta"
          trigger={<Button label="Ver cupo" appearance="outline" size="sm" onPress={noop} />}
        >
          <Ficha />
        </Receta>
        <Receta
          label="con acciones"
          title="¿Bloquear la tarjeta?"
          trigger={<Button label="Bloquear" appearance="soft" variant="danger" size="md" onPress={noop} />}
        >
          <Text style={{ color: '#5c6570' }}>Puedes desbloquearla cuando quieras desde la app.</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Button label="Cancelar" appearance="outline" size="sm" onPress={noop} />
            <Button label="Bloquear" variant="danger" size="sm" onPress={noop} />
          </View>
        </Receta>
        <Receta
          label="texto largo"
          title="Cómo se calcula el pago mínimo de tu estado de cuenta"
          trigger={<Button label="Pago mínimo" appearance="outline" size="md" onPress={noop} />}
        >
          <Text style={{ color: '#5c6570' }}>
            Es la suma de la cuota de tus diferidos del mes, los intereses del período, las comisiones y un porcentaje
            de tus compras corrientes. Si pagas solo el mínimo, el resto pasa al siguiente mes con intereses.
          </Text>
        </Receta>
        <Variant label="el componente no pinta la superficie">
          <Popover
            header="Cupo de tu tarjeta"
            onDismiss={noop}
            trigger={<IconButton icon="info-circle" label="Ver cupo" appearance="ghost" size="md" onPress={noop} />}
          >
            <Ficha />
          </Popover>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
