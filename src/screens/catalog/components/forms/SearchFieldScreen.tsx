import { useState } from 'react';
import { Text } from 'react-native';
import { IconButton, SearchField, type SearchFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { noop, Variant, Variants } from '../feedback/Variant';

const FILTERS = (
  <IconButton icon="filter-lines" label="Filtrar movimientos" appearance="ghost" size="sm" onPress={noop} />
);

type ControlledProps = Omit<SearchFieldProps, 'value' | 'onChangeText'> & { initial?: string };

function Controlled({ initial = '', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <SearchField {...rest} value={value} onChangeText={setValue} />;
}

function FilterMovements() {
  const [query, setQuery] = useState('Uber');
  const items = ['Supermaxi El Bosque · − $ 84.20', 'Fybeca Cumbayá · − $ 12.35', 'Kywi Granados · − $ 46.00'];
  const found = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <SearchField label="Buscar movimientos" value={query} onChangeText={setQuery} placeholder="Buscar movimientos" />
      {found.length ? (
        found.map((item) => <Text key={item}>{item}</Text>)
      ) : (
        <Text style={{ color: '#5c6570' }}>
          {`No encontramos movimientos con «${query}». Prueba con el nombre del comercio.`}
        </Text>
      )}
    </>
  );
}

const PLACEHOLDER = 'Buscar movimientos';

export function SearchFieldScreen() {
  return (
    <ComponentPlayground name="SearchField" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled placeholder={PLACEHOLDER} size="md" onSubmit={noop} />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled placeholder="Buscar · default" />
          <Controlled placeholder={PLACEHOLDER} initial="Supermaxi · default" />
        </Variant>
        <Variant label="deshabilitado">
          <Controlled placeholder="Buscar comercio · deshabilitado" disabled />
          <Controlled placeholder={PLACEHOLDER} initial="Fybeca · deshabilitado" disabled />
        </Variant>
        <Variant label="con filtros (trailingAccessory)">
          <Controlled placeholder="Buscar con filtros" trailingAccessory={FILTERS} />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled placeholder="Buscar en lg (56)" size="lg" />
          <Controlled placeholder="Buscar en md (44)" size="md" initial="Kywi" />
          <Controlled placeholder="Buscar en sm (32)" size="sm" initial="Kywi" />
        </Variant>
        <Variant label="filtrar movimientos">
          <FilterMovements />
        </Variant>
        <Variant label="texto largo">
          <Controlled placeholder="Buscar comercios, categorías o montos de tus movimientos de los últimos 90 días" />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
