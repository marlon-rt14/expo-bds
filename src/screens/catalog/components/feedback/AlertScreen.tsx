import { Alert, type AlertStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

const STATUSES: AlertStatus[] = ['danger', 'warning', 'success', 'info', 'neutral'];
const PLACEMENTS = ['page', 'section', 'inline'] as const;
const DISMISSABLE: AlertStatus[] = ['success', 'info', 'neutral'];

export function AlertScreen() {
  return (
    <ComponentPlayground name="Alert" align="start">
      <Variants>
        {PLACEMENTS.map((placement) =>
          STATUSES.map((status) => (
            <Variant key={`${placement}-${status}`} label={`${status} · ${placement}`}>
              <Alert
                status={status}
                placement={placement}
                title={placement === 'inline' ? undefined : 'Título del aviso'}
                body="Descripción breve de la condición y de lo que se puede hacer."
                action={{ label: 'Acción', onPress: noop }}
                onDismiss={DISMISSABLE.includes(status) ? noop : undefined}
              />
            </Variant>
          )),
        )}
        <Variant label="warning · onDismiss ignorado">
          <Alert
            status="warning"
            placement="section"
            onDismiss={noop}
            title="Sin X en warning"
            body="Aunque se pase onDismiss, en danger y warning no se dibuja la X."
          />
        </Variant>
        <Variant label="info · section · sin ícono">
          <Alert
            status="info"
            placement="section"
            showIcon={false}
            title="Tu pago vence mañana"
            body="Paga antes de las 23:59 para evitar intereses de mora."
          />
        </Variant>
        <Variant label="danger · section · texto largo">
          <Alert
            status="danger"
            placement="section"
            title="Bloqueamos temporalmente tu tarjeta terminada en 4321 por seguridad"
            body="Detectamos un intento de compra por $ 1,250.56 en un comercio del exterior que no reconocemos. Si fuiste tú, confírmalo desde la app; si no, llámanos al 1800 DINERS para emitir una tarjeta nueva sin costo."
            action={{ label: 'Revisar el movimiento', onPress: noop }}
          />
        </Variant>
        <Variant label="danger · page · pago vencido">
          <Alert
            status="danger"
            placement="page"
            title="Tu pago está vencido"
            body="El mínimo de $ 86.40 venció el 5 de octubre. Paga hoy para evitar intereses de mora y que tu tarjeta se bloquee."
            action={{ label: 'Pagar ahora', onPress: noop }}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
