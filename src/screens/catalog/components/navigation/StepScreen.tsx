import { Step, type StepStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const STATUSES: StepStatus[] = ['done', 'warning', 'active', 'error', 'pending'];

export function StepScreen() {
  return (
    <ComponentPlayground name="Step" align="start">
      <Variants>
        {STATUSES.map((status, index) => (
          <Variant key={status} label={status}>
            <Step
              label={status === 'done' ? 'Hecho' : status === 'warning' ? 'Con advertencia' : status === 'active' ? 'Actual' : status === 'error' ? 'Con error' : 'Pendiente'}
              secondaryLabel={status}
              status={status}
              index={index + 1}
              total={STATUSES.length}
              orientation="vertical"
              leading={index === 0 ? undefined : 'done'}
              trailing={index === STATUSES.length - 1 ? undefined : 'inactive'}
            />
          </Variant>
        ))}
        <Variant label="wizard · paso 2 de 3">
          <Step label="Ingresos" status="active" index={2} total={3} purpose="wizard" orientation="horizontal" />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
