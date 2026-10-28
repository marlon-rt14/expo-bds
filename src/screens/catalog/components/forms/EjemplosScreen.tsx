import { useState } from 'react';
import {
  AmountField,
  Button,
  DateField,
  OTPField,
  PhoneField,
  Select,
  Text,
  TextArea,
  TextField,
  formatAmountInput,
  isValidCedula,
  parseAmount,
} from '@bds/react-native';
import { View } from 'react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';
import { addDays, startOfDay, toISODate } from './dates';

const AVAILABLE = 2450.18;

/**
 * Cédula (10, con su dígito verificador) o RUC de persona natural (la cédula + 001). Los RUC de sociedades y del
 * sector público (tercer dígito 9 o 6) tienen otro verificador: acá basta con que terminen en 001.
 */
function isValidIdOrRuc(id: string): boolean {
  if (id.length === 10) return isValidCedula(id);
  if (id.length !== 13 || !id.endsWith('001')) return false;
  const kind = Number(id[2]);
  return kind === 6 || kind === 9 || isValidCedula(id.slice(0, 10));
}

function Transfer() {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [holder, setHolder] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [note, setNote] = useState('');
  const [step, setStep] = useState<'datos' | 'codigo'>('datos');
  const [code, setCode] = useState('');
  const [tried, setTried] = useState(false);

  const value = parseAmount(amount);
  const errors = {
    amount: !amount
      ? 'Escribe cuánto quieres transferir.'
      : value > AVAILABLE
        ? 'Supera tu disponible de $ 2,450.18. Escribe un monto menor.'
        : value <= 0
          ? 'El monto tiene que ser mayor a $ 0.00.'
          : undefined,
    account:
      account.replace(/\D/g, '').length < 10
        ? 'El número de cuenta tiene 10 dígitos. Revísalo en la libreta o en la app del otro banco.'
        : undefined,
    holder:
      holder.trim().split(/\s+/).length < 2
        ? 'Escribe el nombre y el apellido del titular, como aparecen en su cuenta.'
        : undefined,
    idNumber: ![10, 13].includes(idNumber.length)
      ? 'La cédula tiene 10 dígitos y el RUC 13. Revisa el número.'
      : !isValidIdOrRuc(idNumber)
        ? 'Revisa el número: no corresponde a una cédula o un RUC de Ecuador.'
        : undefined,
  };
  const valid = !Object.values(errors).some(Boolean);
  const show = (error?: string) => (tried ? error : undefined);

  if (step === 'codigo') {
    return (
      <View style={{ gap: 16 }}>
        <Text variant="heading-sm" heading={2}>
          Confirma la transferencia
        </Text>
        <Text variant="body-md-default" color="color.text.secondary">
          {`Te enviamos un código por SMS para transferir ${amount} a ${holder}.`}
        </Text>
        <OTPField
          value={code}
          onChangeText={setCode}
          label="Código de verificación enviado por SMS"
          helperText="Puedes pedir otro código en 0:30"
        />
        <Button label="Volver a los datos" appearance="ghost" onPress={() => setStep('datos')} />
      </View>
    );
  }

  return (
    <View style={{ gap: 16 }}>
      <Text variant="heading-sm" heading={2}>
        Transferir a otra cuenta
      </Text>
      <AmountField
        value={amount}
        onChangeText={(next) => setAmount(formatAmountInput(next, '$', amount))}
        label="Monto a transferir"
        helperText="Disponible $ 2,450.18"
        error={show(errors.amount)}
      />
      <TextField
        label="Número de cuenta de destino"
        value={account}
        onChangeText={(next) => setAccount(next.replace(/\D/g, '').slice(0, 10))}
        keyboardType="number-pad"
        helperText="Cuenta de ahorros o corriente en Ecuador."
        error={show(errors.account)}
      />
      <TextField
        label="Nombre del titular"
        value={holder}
        onChangeText={setHolder}
        autoComplete="name"
        textContentType="name"
        autoCapitalize="words"
        error={show(errors.holder)}
      />
      <TextField
        label="Cédula o RUC del titular"
        value={idNumber}
        onChangeText={(next) => setIdNumber(next.replace(/\D/g, '').slice(0, 13))}
        keyboardType="number-pad"
        error={show(errors.idNumber)}
      />
      <TextArea
        label="Descripción (opcional)"
        value={note}
        onChangeText={setNote}
        rows={2}
        maxLength={60}
        counter={{ current: note.length, max: 60 }}
        helperText="La verá el beneficiario en su estado de cuenta."
      />
      <Button
        label="Continuar"
        size="lg"
        fullWidth
        onPress={() => {
          setTried(true);
          if (valid) setStep('codigo');
        }}
      />
    </View>
  );
}

function SchedulePayment() {
  const [account, setAccount] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [phone, setPhone] = useState('99 123 4567');
  const [tried, setTried] = useState(false);
  const today = startOfDay(new Date());
  return (
    <View style={{ gap: 16 }}>
      <Text variant="heading-sm" heading={2}>
        Programar el pago
      </Text>
      <Text variant="body-md-default" color="color.text.secondary">
        Diners Club Visa ···· 4821 · Total $ 1,250.56
      </Text>
      <Select
        label="Cuenta de origen"
        options={[
          {
            value: 'ahorros',
            label: 'Cuenta de ahorros',
            icon: 'wallet-02',
            description: 'N.º •••• 4821 · Disponible $ 2,450.18',
          },
          {
            value: 'corriente',
            label: 'Cuenta corriente',
            icon: 'bank',
            description: 'N.º •••• 0937 · Disponible $ 8,430.10',
          },
        ]}
        value={account}
        onChange={setAccount}
        placeholder="Elige una cuenta"
        error={tried && !account ? 'Elige la cuenta de la que sale el pago.' : undefined}
      />
      <DateField
        label="Fecha de pago"
        value={date}
        onChange={(next) => setDate(typeof next === 'string' ? next : (next?.start ?? null))}
        minDate={toISODate(today)}
        maxDate={toISODate(addDays(today, 30))}
        validation={tried && !date ? 'error' : 'none'}
        helperText={tried && !date ? 'Elige un día entre hoy y la fecha de vencimiento.' : 'Hasta tu fecha de vencimiento.'}
      />
      <PhoneField
        label="Celular para el aviso"
        value={phone}
        onChangeText={setPhone}
        helperText="Te avisamos por SMS cuando se debite."
      />
      <Button label="Programar pago" size="lg" fullWidth onPress={() => setTried(true)} />
    </View>
  );
}

export function EjemplosScreen() {
  return (
    <ComponentPlayground name="Ejemplos" align="start">
      <Variants>
        <Variant label="transferencia">
          <Transfer />
        </Variant>
        <Variant label="programar el pago de la tarjeta">
          <SchedulePayment />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
