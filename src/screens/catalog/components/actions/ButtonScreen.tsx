import { Button } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';

export function ButtonScreen() {
  return (
    <ComponentPlayground name="Button">
      {/* <Button label="Hola mundo" onPress={() => {}} /> */}
      {/* <Button label="Hola mundo" onPress={() => {}} variant='danger' /> */}
      {/* <Button label="Hola mundo" onPress={() => {}} appearance='outline' /> */}
      {/* <Button label="Hola mundo" onPress={() => {}} loading /> */}
      <Button label="Hola mundo" onPress={() => {}} leadingIcon='whatsapp' trailingIcon='whatsapp' fullWidth/>
    </ComponentPlayground>
  );
}
