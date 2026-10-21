import { Text, View } from 'react-native';
import { EmptyState } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from './Variant';

const title = 'Aún no tienes movimientos';
const body = 'Cuando uses tu tarjeta, tus compras y pagos van a aparecer aquí.';

export function EmptyStateScreen() {
  return (
    <ComponentPlayground name="EmptyState" align="start">
      <Variants>
        <Variant label="page · ícono, acción">
          <EmptyState layout="page" icon="receipt" title={title} body={body} action={{ label: 'Ver mis tarjetas', onPress: noop }} />
        </Variant>
        <Variant label="page · acción + secundaria">
          <EmptyState
            layout="page"
            icon="receipt"
            title={title}
            body={body}
            action={{ label: 'Ver mis tarjetas', onPress: noop }}
            secondaryAction={{ label: 'Ver cómo funciona', onPress: noop }}
          />
        </Variant>
        <Variant label="inline · acción + secundaria">
          <EmptyState
            layout="inline"
            icon="receipt"
            title={title}
            body={body}
            action={{ label: 'Ver mis tarjetas', onPress: noop }}
            secondaryAction={{ label: 'Ver cómo funciona', onPress: noop }}
          />
        </Variant>
        <Variant label="inline · sin acción">
          <EmptyState layout="inline" icon="bell-01" title="No tienes notificaciones" body="Te avisaremos aquí cuando haya algo nuevo en tu cuenta." />
        </Variant>
        <Variant label="inline · sin gráfico">
          <EmptyState layout="inline" title={title} body={body} action={{ label: 'Ver mis tarjetas', onPress: noop }} />
        </Variant>
        <Variant label="inline · graphic slot">
          <EmptyState
            layout="inline"
            graphic={
              <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#d5dbe3', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 11, color: '#445' }}>img</Text>
              </View>
            }
            title={title}
            body={body}
          />
        </Variant>
        <Variant label="inline · sin resultados">
          <EmptyState
            layout="inline"
            icon="search-md"
            title="No encontramos «Supermaxi»"
            body="Revisa cómo lo escribiste o prueba con otro comercio."
            action={{ label: 'Limpiar búsqueda', onPress: noop }}
          />
        </Variant>
        <Variant label="page · texto largo">
          <EmptyState
            icon="gift-01"
            title="Todavía no tienes beneficios activos en tu tarjeta"
            body="Cuando actives un beneficio de ClubMiles, cashback o descuentos en establecimientos, lo vas a ver en esta sección con su vigencia y cuánto llevas ahorrado."
            action={{ label: 'Ver mis tarjetas', onPress: noop }}
            secondaryAction={{ label: 'Ver cómo funciona', onPress: noop }}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
