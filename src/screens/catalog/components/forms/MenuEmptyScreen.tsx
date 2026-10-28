import { MenuEmpty } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';
import { MenuSurface } from './MenuSurface';

export function MenuEmptyScreen() {
  return (
    <ComponentPlayground name="MenuEmpty" align="start">
      <Variants>
        <Variant label="playground · sm">
          <MenuSurface>
            <MenuEmpty size="sm" message="Sin resultados" />
          </MenuSurface>
        </Variant>
        <Variant label="talla md">
          <MenuSurface>
            <MenuEmpty size="md" message="Sin resultados" />
          </MenuSurface>
        </Variant>
        <Variant label="texto largo">
          <MenuSurface>
            <MenuEmpty
              size="md"
              message="No encontramos un banco con ese nombre. Revisa cómo lo escribiste o busca por la ciudad de la agencia."
            />
          </MenuSurface>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
