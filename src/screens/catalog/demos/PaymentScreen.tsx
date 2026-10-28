import {
  ActionBar,
  Biometric,
  Button,
  FormScreen,
  formatAmount,
  ListItem,
  NavigationBar,
  otherAmountError,
  PaymentSummary,
  paymentAmount,
  ResultState,
  ScreenFrame,
  Sheet,
  type BiometricState,
  type PaymentChoice,
} from '@bds/react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';

// Demo «Pagar tarjeta» built only with bDS: FormScreen + PaymentSummary, account Sheet, Biometric and ResultState.
// Data is mocked; Biometric only simulates the system prompt.

const CARD = {
  name: 'Diners Club TITANIUM ···· 4821',
  total: 1250.56,
  minimum: 125,
  dueDate: '15 nov 2026',
};

const ACCOUNTS = [
  { id: 'savings', label: 'Cuenta de ahorros', description: 'Banco Pichincha ···· 3390 · Disponible $ 2,450.18' },
  { id: 'checking', label: 'Cuenta corriente', description: 'Banco Pichincha ···· 7715 · Disponible $ 860.40' },
];

type Step = 'form' | 'auth' | 'done';

export function PaymentScreen() {
  const navigation = useNavigation();

  const [choice, setChoice] = useState<PaymentChoice>('total');
  const [otherAmount, setOtherAmount] = useState('');
  const [accountId, setAccountId] = useState(ACCOUNTS[0].id);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [step, setStep] = useState<Step>('form');
  const [biometricState, setBiometricState] = useState<BiometricState>('authenticating');

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const account = ACCOUNTS.find((a) => a.id === accountId) ?? ACCOUNTS[0];
  const amount = paymentAmount({ choice, total: CARD.total, minimum: CARD.minimum, otherAmount });
  const isValid = Number.isFinite(amount) && !otherAmountError(amount, { minimum: CARD.minimum, total: CARD.total });

  const pay = () => {
    setBiometricState('authenticating');
    setStep('auth');
    timers.current.push(
      setTimeout(() => setBiometricState('success'), 1500),
      setTimeout(() => setStep('done'), 2300),
    );
  };

  const cancelAuth = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStep('form');
  };

  if (step === 'done') {
    return (
      <ScreenFrame
        header={<NavigationBar title="Pago" leading={null} />}
        footer={<ActionBar primary={{ label: 'Listo', onPress: () => navigation.goBack() }} />}
        footerKind="actionbar"
      >
        <ResultState
          status="success"
          title="Pago realizado"
          body={`Pagaste ${formatAmount(amount)} desde tu ${account.label.toLowerCase()}. Enviamos el comprobante a tu correo.`}
        />
      </ScreenFrame>
    );
  }

  return (
    <>
      <FormScreen
        header={<NavigationBar title="Pagar tarjeta" onBack={() => navigation.goBack()} />}
        submit={
          <Button
            label={isValid ? `Pagar ${formatAmount(amount)}` : 'Pagar'}
            size="lg"
            fullWidth
            disabled={!isValid}
            loading={step === 'auth'}
            onPress={pay}
          />
        }
      >
        <PaymentSummary
          cardName={CARD.name}
          total={CARD.total}
          minimum={CARD.minimum}
          dueDate={CARD.dueDate}
          choice={choice}
          onChoiceChange={setChoice}
          otherAmount={otherAmount}
          onOtherAmountChange={setOtherAmount}
          source={{ label: account.label, description: account.description }}
          onChangeSource={() => setSheetOpen(true)}
        />
      </FormScreen>

      <Sheet
        isOpen={isSheetOpen}
        onDismiss={() => setSheetOpen(false)}
        title="Cuenta de origen"
        description="Elige de dónde sale el dinero."
        detent="medium"
      >
        {ACCOUNTS.map((a) => (
          <ListItem
            key={a.id}
            label={a.label}
            description={a.description}
            leading={{ icon: 'wallet-02' }}
            trailing={a.id === accountId ? 'check' : undefined}
            onPress={() => {
              setAccountId(a.id);
              setSheetOpen(false);
            }}
          />
        ))}
      </Sheet>

      <Biometric
        isOpen={step === 'auth'}
        state={biometricState}
        title="Confirma el pago"
        subtitle={`Usa tu huella para aprobar el pago de ${formatAmount(amount)}.`}
        negativeLabel="Usar PIN"
        onNegative={() => {
          cancelAuth();
          setStep('done');
        }}
        onDismiss={cancelAuth}
      />
    </>
  );
}
