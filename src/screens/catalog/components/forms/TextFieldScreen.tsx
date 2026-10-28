import { useState } from 'react';
import { TextField, validateCedulaRuc, type TextFieldProps } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

type ControlledProps = Omit<TextFieldProps, 'value' | 'onChangeText'> & { initial?: string };

function Controlled({ initial = '', ...rest }: ControlledProps) {
  const [value, setValue] = useState(initial);
  return <TextField {...rest} value={value} onChangeText={setValue} />;
}

const MAIL: Omit<ControlledProps, 'label'> = {
  placeholder: 'nombre@correo.com',
  keyboardType: 'email-address',
  leadingIcon: 'mail-01',
};

const PLAIN: Omit<ControlledProps, 'label'> = { keyboardType: 'default' };

function Beneficiary() {
  const [name, setName] = useState('María José Andrade');
  const [id, setId] = useState('1710034065');
  const [idError, setIdError] = useState<string | undefined>();
  const [mail, setMail] = useState('');
  return (
    <>
      <TextField
        label="Nombre del beneficiario"
        value={name}
        onChangeText={setName}
        autoComplete="name"
        textContentType="name"
        autoCapitalize="words"
      />
      <TextField
        label="Cédula o RUC"
        value={id}
        onChangeText={(next) => {
          setId(next);
          if (idError) setIdError(undefined);
        }}
        onBlur={() => setIdError(validateCedulaRuc(id))}
        keyboardType="number-pad"
        maxLength={13}
        autoComplete="off"
        helperText="10 números si es cédula, 13 si es RUC."
        error={idError}
      />
      <TextField
        label="Correo para el comprobante"
        value={mail}
        onChangeText={setMail}
        keyboardType="email-address"
        autoComplete="email"
        placeholder="nombre@correo.com"
        helperText="Opcional. Le enviamos una copia del comprobante."
      />
    </>
  );
}

export function TextFieldScreen() {
  return (
    <ComponentPlayground name="TextField" align="start">
      <Variants>
        <Variant label="playground · md">
          <Controlled
            label="Correo electrónico"
            {...MAIL}
            autoComplete="email"
            textContentType="emailAddress"
            size="md"
          />
        </Variant>
        <Variant label="vacío · con valor">
          <Controlled label="default · vacío" {...MAIL} />
          <Controlled label="default · con valor" {...MAIL} initial="jetto@dinersclub.com.ec" />
        </Variant>
        <Variant label="con ayuda">
          <Controlled label="Con ayuda" {...MAIL} helperText="Te enviaremos el estado de cuenta a este correo." />
        </Variant>
        <Variant label="con error">
          <Controlled
            label="Con error"
            {...MAIL}
            initial="jetto@"
            error="Al correo le falta el dominio. Escríbelo completo, por ejemplo nombre@gmail.com."
          />
        </Variant>
        <Variant label="deshabilitado · solo lectura">
          <Controlled
            label="Deshabilitado"
            {...MAIL}
            initial="jetto@dinersclub.com.ec"
            disabled
            helperText="Para cambiarlo, llama al 1800 DINERS."
          />
          <Controlled label="Solo lectura" {...MAIL} initial="jetto@dinersclub.com.ec" readOnly />
        </Variant>
        <Variant label="tallas · lg · md · sm">
          <Controlled label="Talla lg" {...PLAIN} size="lg" initial="56 en Android y web, 52 en iOS" />
          <Controlled label="Talla md" {...PLAIN} size="md" initial="44" />
          <Controlled label="Talla sm" {...PLAIN} size="sm" initial="32: una línea, etiqueta afuera" />
          <Controlled label="Talla sm vacía" {...PLAIN} size="sm" />
        </Variant>
        <Variant label="íconos y afijos">
          <Controlled
            label="Buscar comercio"
            {...PLAIN}
            leadingIcon="search-md"
            autoComplete="off"
            placeholder="Supermaxi, Fybeca…"
          />
          <Controlled label="Peso del paquete" trailingText="kg" keyboardType="decimal-pad" initial="2,5" placeholder="0" />
          <Controlled
            label="Celular"
            leadingText="+593"
            keyboardType="phone-pad"
            autoComplete="tel"
            initial="99 123 4567"
          />
          <Controlled label="Código de referido" {...PLAIN} trailingIcon="gift-01" autoCapitalize="characters" />
        </Variant>
        <Variant label="contador">
          <Controlled
            label="Alias de la cuenta"
            {...PLAIN}
            initial="Ahorros de vacaciones"
            counter={{ max: 30 }}
            helperText="Así la verás en tu lista de cuentas."
          />
          <Controlled
            label="Alias de la cuenta"
            {...PLAIN}
            initial="Ahorros para las vacaciones de agosto en Galápagos"
            counter={{ max: 30 }}
            error="El alias tiene más de 30 caracteres. Acórtalo."
          />
        </Variant>
        <Variant label="texto largo">
          <Controlled
            label="Dirección de entrega de la tarjeta adicional para tu familiar"
            {...PLAIN}
            initial="Av. República de El Salvador N34-127 y Suiza, edificio Murano, piso 8, oficina 802"
            helperText="Si no hay nadie en la dirección, el courier intentará la entrega dos veces más en los siguientes tres días hábiles."
          />
        </Variant>
        <Variant label="beneficiario">
          <Beneficiary />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
