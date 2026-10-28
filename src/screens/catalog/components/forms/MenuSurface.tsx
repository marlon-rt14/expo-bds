import type { ReactNode } from 'react';
import { View } from 'react-native';
import { useTokens } from '@bds/react-native';

/** Superficie del desplegable (Menu): mismo contrato que `popoverSurface` en Storybook. */
export function MenuSurface({ children }: { children: ReactNode }) {
  const t = useTokens();
  return (
    <View
      style={{
        backgroundColor: String(t['component.menu.surface.bg']),
        borderWidth: Number(t['border.width.default']),
        borderColor: String(t['component.menu.surface.border']),
        borderRadius: Number(t['radius.surface.md']),
        overflow: 'hidden',
        boxShadow: [
          {
            offsetX: 0,
            offsetY: Number(t['elevation.overlay.shadow.near-y']),
            blurRadius: Number(t['elevation.overlay.shadow.near-blur']),
            color: String(t['elevation.overlay.shadow.near']),
          },
          {
            offsetX: 0,
            offsetY: Number(t['elevation.overlay.shadow.far-y']),
            blurRadius: Number(t['elevation.overlay.shadow.far-blur']),
            color: String(t['elevation.overlay.shadow.far']),
          },
        ],
      }}
    >
      {children}
    </View>
  );
}
