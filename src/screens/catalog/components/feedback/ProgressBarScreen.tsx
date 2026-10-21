import { ProgressBar, type ProgressBarStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from './Variant';

const STATUSES: ProgressBarStatus[] = ['danger', 'warning', 'success', 'brand', 'accent'];
const SIZES = ['lg', 'md', 'sm'] as const;

export function ProgressBarScreen() {
  return (
    <ComponentPlayground name="ProgressBar" align="start">
      <Variants>
        <Variant label="playground · brand md 45%">
          <ProgressBar value={45} label="Subiendo el documento" showValue status="brand" size="md" />
        </Variant>
        {STATUSES.map((status) =>
          SIZES.map((size, index) => (
            <Variant key={`${status}-${size}`} label={`${status} · ${size}`}>
              <ProgressBar status={status} size={size} value={[25, 50, 75][index]!} label={`Ejemplo ${status} ${size}`} />
            </Variant>
          )),
        )}
        {[0, 1, 25, 50, 75, 100].map((value) => (
          <Variant key={value} label={`valor ${value}`}>
            <ProgressBar value={value} label={`Valor ${value}`} />
          </Variant>
        ))}
        <Variant label="sin valor visible">
          <ProgressBar value={60} showValue={false} accessibilityLabel="Avance sin etiqueta visible" />
        </Variant>
        <Variant label="indeterminado">
          <ProgressBar indeterminate value={0} label="Verificando tu identidad" />
        </Variant>
        <Variant label="texto largo">
          <ProgressBar value={82} label="Subiendo el certificado de ingresos y la planilla de servicios básicos" />
        </Variant>
        <Variant label="caso real · cédula">
          <ProgressBar value={40} label="Subiendo tu cédula" />
        </Variant>
        <Variant label="caso real · clave sm warning">
          <ProgressBar value={50} label="Fuerza de tu clave" status="warning" size="sm" />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
