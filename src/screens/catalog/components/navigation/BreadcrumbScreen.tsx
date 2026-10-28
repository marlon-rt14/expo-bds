import { Breadcrumb } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

const RUTA = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tarjetas', href: '#tarjetas' },
  { label: 'Tarjeta ··· 4521', href: '#tarjeta-4521' },
];

const LARGA = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Mis productos', href: '#productos' },
  { label: 'Tarjetas', href: '#tarjetas' },
  { label: 'Tarjeta ··· 4521', href: '#tarjeta-4521' },
];

export function BreadcrumbScreen() {
  return (
    <ComponentPlayground name="Breadcrumb" align="start">
      <Variants>
        <Variant label="trail · hasta 4 niveles">
          <Breadcrumb items={RUTA} current="Movimientos" onNavigate={noop} />
        </Variant>
        <Variant label="collapsed · más de 4 niveles">
          <Breadcrumb items={LARGA} current="Movimientos" onNavigate={noop} />
        </Variant>
        <Variant label="texto largo">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Beneficios y promociones de tu Diners Club', href: '#beneficios' },
            ]}
            current="Restaurantes con descuento en Quito y Guayaquil"
            onNavigate={noop}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
