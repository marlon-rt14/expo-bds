import { Platform, Text, View } from 'react-native';
import { KeyboardAccessory, useTokens } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

/** El vidrio necesita algo detrás: la barra va sobre el fondo de la página. */
function Device({ children }: { children: React.ReactNode }) {
  const t = useTokens();
  return <View style={{ backgroundColor: String(t['color.canvas.background.page']) }}>{children}</View>;
}

export function KeyboardAccessoryScreen() {
  if (Platform.OS !== 'ios') {
    return (
      <ComponentPlayground name="KeyboardAccessory">
        <Text style={{ textAlign: 'center' }}>
          En Android no hay barra: la tecla de acción del teclado cierra o avanza (returnKeyType done · next).
        </Text>
      </ComponentPlayground>
    );
  }
  return (
    <ComponentPlayground name="KeyboardAccessory" align="start">
      <Variants>
        <Variant label="playground · showNavigation">
          <Device>
            <KeyboardAccessory showNavigation onPrevious={noop} onNext={noop} onDone={noop} />
          </Device>
        </Variant>
        <Variant label="showNavigation false">
          <Device>
            <KeyboardAccessory showNavigation={false} onDone={noop} />
          </Device>
        </Variant>
        <Variant label="primer campo (anterior en disabled)">
          <Device>
            <KeyboardAccessory onNext={noop} onDone={noop} />
          </Device>
        </Variant>
        <Variant label="último campo (siguiente en disabled)">
          <Device>
            <KeyboardAccessory onPrevious={noop} onDone={noop} />
          </Device>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
