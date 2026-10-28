import { View } from 'react-native';
import { Pagination, PaginationItem } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

export function PaginationScreen() {
  return (
    <ComponentPlayground name="Pagination" align="start">
      <Variants>
        <Variant label="first · 1 de 12">
          <Pagination page={1} pageCount={12} onPageChange={noop} />
        </Variant>
        <Variant label="middle · 5 de 12">
          <Pagination page={5} pageCount={12} onPageChange={noop} />
        </Variant>
        <Variant label="last · 12 de 12">
          <Pagination page={12} pageCount={12} onPageChange={noop} />
        </Variant>
        <Variant label="pocas páginas · 2 de 4">
          <Pagination page={2} pageCount={4} onPageChange={noop} />
        </Variant>
        <Variant label="una sola página: no se renderiza">
          <Pagination page={1} pageCount={1} onPageChange={noop} />
        </Variant>
        <Variant label="estados de cuenta · octubre">
          <Pagination page={6} pageCount={6} onPageChange={noop} accessibilityLabel="Estados de cuenta" />
        </Variant>
        <Variant label="item · sin elegir y elegida">
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start', gap: 8 }}>
            <PaginationItem page={5} onPress={noop} />
            <PaginationItem page={5} isSelected onPress={noop} />
          </View>
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
