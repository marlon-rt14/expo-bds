import { PasswordStrength, type PasswordStrengthLevel } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

const LEVELS: PasswordStrengthLevel[] = ['weak', 'acceptable', 'good', 'strong'];

const LABELS = { weakLabel: 'Débil', acceptableLabel: 'Media', goodLabel: 'Fuerte', strongLabel: 'Muy fuerte' };

export function PasswordStrengthScreen() {
  return (
    <ComponentPlayground name="PasswordStrength" align="start">
      <Variants>
        <Variant label="playground · good">
          <PasswordStrength level="good" {...LABELS} />
        </Variant>
        <Variant label="niveles · weak · acceptable · good · strong">
          {LEVELS.map((level) => (
            <PasswordStrength key={level} level={level} {...LABELS} />
          ))}
        </Variant>
        <Variant label="texto largo">
          <PasswordStrength
            level="acceptable"
            {...LABELS}
            acceptableLabel="Media: agrega un símbolo para hacerla más segura"
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
