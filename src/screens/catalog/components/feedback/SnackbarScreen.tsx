import { Snackbar, type SnackbarStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

const STATUSES: SnackbarStatus[] = ['danger', 'warning', 'success', 'info'];

export function SnackbarScreen() {
  return (
    <ComponentPlayground name="Snackbar" align="start">
      <Variants>
        {STATUSES.map((status) => (
          <Variant key={status} label={`${status} · acción`}>
            <Snackbar status={status} message="Se guardó el cambio en tu tarjeta" action={{ label: 'Deshacer', onPress: noop }} />
          </Variant>
        ))}
        <Variant label="success · sin acción">
          <Snackbar message="Se envió tu transferencia" status="success" />
        </Variant>
        <Variant label="warning · dismiss">
          <Snackbar message="Sin conexión. Reintentaremos en unos segundos" status="warning" onDismiss={noop} />
        </Variant>
        <Variant label="danger · sin ícono, acción, dismiss">
          <Snackbar
            message="No pudimos copiar el número"
            status="danger"
            showIcon={false}
            action={{ label: 'Reintentar', onPress: noop }}
            onDismiss={noop}
          />
        </Variant>
        <Variant label="success · texto largo, dismiss">
          <Snackbar
            message="Programamos el pago de $ 1,250.56 de tu Diners Club para el 15 de octubre a las 09:00"
            status="success"
            onDismiss={noop}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
