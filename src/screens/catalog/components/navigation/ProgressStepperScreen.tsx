import { ProgressStepper, type StepDef, type StepStatus } from '@bds/react-native';

import { ComponentPlayground } from '../../../../components';
import { Variant, Variants } from '../feedback/Variant';

function steps(n: number, active = 1, withDate = true): StepDef[] {
  return Array.from({ length: n }, (_, i) => ({
    label: `Paso ${i + 1}`,
    secondaryLabel: withDate && i <= active ? '12 ago, 10:45' : undefined,
    status: (i < active ? 'done' : i === active ? 'active' : 'pending') as StepStatus,
  }));
}

const SOLICITUD: StepDef[] = [
  { label: 'Solicitud enviada', secondaryLabel: '2 oct, 09:12', status: 'done' },
  { label: 'Datos verificados', secondaryLabel: '3 oct, 16:40', status: 'done' },
  { label: 'Tarjeta aprobada', secondaryLabel: 'Hoy, 11:05', status: 'active' },
  { label: 'Tarjeta entregada', secondaryLabel: 'Estimado: 14 oct', status: 'pending' },
];

const ESTADOS: StepDef[] = [
  { label: 'Hecho', secondaryLabel: 'done', status: 'done' },
  { label: 'Con advertencia', secondaryLabel: 'warning: el flujo sigue', status: 'warning' },
  { label: 'Actual', secondaryLabel: 'active', status: 'active' },
  { label: 'Con error', secondaryLabel: 'error: el proceso se detuvo', status: 'error' },
  { label: 'Pendiente', secondaryLabel: 'pending', status: 'pending' },
];

export function ProgressStepperScreen() {
  return (
    <ComponentPlayground name="ProgressStepper" align="start">
      <Variants>
        <Variant label="status · horizontal · 3">
          <ProgressStepper steps={steps(3)} orientation="horizontal" label="Ejemplo" />
        </Variant>
        <Variant label="wizard · sin orientation · 3">
          <ProgressStepper steps={steps(3, 1, false)} purpose="wizard" label="Ejemplo" />
        </Variant>
        <Variant label="status · sin orientation · 3">
          <ProgressStepper steps={steps(3)} label="Ejemplo" />
        </Variant>
        <Variant label="status · horizontal · 4">
          <ProgressStepper steps={steps(4)} orientation="horizontal" label="Ejemplo" />
        </Variant>
        <Variant label="status · vertical · 5">
          <ProgressStepper steps={steps(5)} orientation="vertical" label="Ejemplo" />
        </Variant>
        <Variant label="wizard · vertical · 4">
          <ProgressStepper steps={steps(4, 1, false)} purpose="wizard" orientation="vertical" label="Ejemplo" />
        </Variant>
        <Variant label="pending · active · done · warning · error">
          <ProgressStepper orientation="vertical" label="Estados" steps={ESTADOS} />
        </Variant>
        <Variant label="texto largo">
          <ProgressStepper
            orientation="vertical"
            label="Solicitud de aumento de cupo"
            steps={[
              {
                label: 'Recibimos los documentos de tu solicitud de aumento de cupo',
                secondaryLabel: 'Lunes 6 de octubre de 2026, 10:45',
                status: 'done',
              },
              {
                label: 'Nuestro equipo de crédito está revisando tu información',
                secondaryLabel: 'Puede tardar hasta 48 horas hábiles',
                status: 'active',
              },
              { label: 'Te avisaremos por correo y en la app con la respuesta', status: 'pending' },
            ]}
          />
        </Variant>
        <Variant label="solicitud de tarjeta">
          <ProgressStepper steps={SOLICITUD} orientation="vertical" label="Estado de tu solicitud de tarjeta" />
        </Variant>
        <Variant label="wizard · formulario">
          <ProgressStepper
            purpose="wizard"
            label="Pasos de tu solicitud"
            steps={[
              { label: 'Datos personales', status: 'done' },
              { label: 'Ingresos', status: 'active' },
              { label: 'Revisión', status: 'pending' },
            ]}
          />
        </Variant>
      </Variants>
    </ComponentPlayground>
  );
}
