import { PasswordRequirements, type PasswordRequirementsProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const LIST: PasswordRequirementsProps['requirements'] = [
  { label: '12 caracteres', met: true },
  { label: 'Una mayúscula y una minúscula', met: true },
  { label: 'Un número', met: false },
  { label: 'Un símbolo (por ejemplo ! o #)', met: false, failed: true },
];

export function PasswordRequirementsScreen() {
  return (
    <ComponentPlayground name="PasswordRequirements" align="start">
      <Variants>
        <Variant label="playground">
          <PasswordRequirements label="Tu contraseña debe tener al menos:" showLabel requirements={LIST} />
        </Variant>
        <Variant label="sin título">
          <PasswordRequirements label="Tu contraseña debe tener al menos:" showLabel={false} requirements={LIST} />
        </Variant>
        <Variant label="texto largo">
          <PasswordRequirements
            label="Tu contraseña debe tener al menos:"
            showLabel
            requirements={[
              {
                label: 'No puede ser igual a ninguna de las últimas cinco contraseñas que usaste en la banca en línea',
                met: false,
              },
              { label: '12 caracteres', met: true },
            ]}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
