import { LinkButton, ResultState, type ResultStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

const EJEMPLOS: Record<ResultStatus, { title: string; body: string }> = {
  danger: { title: 'No se pudo iniciar la app', body: 'Hay un problema con el sistema. Intenta de nuevo en unos minutos.' },
  warning: { title: 'Tu celular está sin conexión', body: 'Conéctate a internet para seguir usando la app.' },
  success: { title: 'Tu identidad está verificada', body: 'Ya puedes entrar a la app.' },
  info: { title: 'La app está en mantenimiento', body: 'Algunos servicios no estarán disponibles de 02:00 a 04:00.' },
};

const STATUSES = Object.keys(EJEMPLOS) as ResultStatus[];

export function ResultStateScreen() {
  return (
    <ComponentPlayground name="ResultState" align="start">
      <Variants>
        {STATUSES.map((status) => (
          <Variant key={status} label={status}>
            <ResultState status={status} {...EJEMPLOS[status]} />
          </Variant>
        ))}
        <Variant label="warning · ícono propio">
          <ResultState status="warning" icon="alert-circle" title="Tu celular está sin conexión" body="Conéctate a internet para seguir usando la app." />
        </Variant>
        <Variant label="warning · con contenido">
          <ResultState
            status="warning"
            title="Tu acceso está bloqueado por 20 minutos"
            body="Ingresaste mal tus datos varias veces. Por seguridad, podrás intentarlo de nuevo a las 10:42."
          >
            <LinkButton label="Llama al (02) 2984-400" onPress={noop} />
          </ResultState>
        </Variant>
        <Variant label="info · texto largo">
          <ResultState
            status="info"
            title="Hay una nueva versión de la app disponible"
            body="Actualízala para seguir usándola con las últimas mejoras de seguridad. La descarga es gratuita y no cambia tus datos ni tus tarjetas."
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
