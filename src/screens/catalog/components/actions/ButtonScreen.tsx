import { Button } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';

export function ButtonScreen() {
  return (
    <ComponentPlayground name="Button">
      <Button label="Hola mundo" onPress={() => {}} disabled />
    </ComponentPlayground>
  );
}
