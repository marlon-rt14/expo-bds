// Mirrors the sidebar of the DinersClub-bds Storybook (story `title`s).
// Sub-sub-components (e.g. TextList/TextListItem) are flattened next to their parent.

export interface CatalogGroup {
  id: string;
  title: string;
  components: string[];
}

export type CatalogSection =
  | { id: string; title: string; kind: 'groups'; groups: CatalogGroup[] }
  | { id: string; title: string; kind: 'components'; components: string[] };

export const catalog: CatalogSection[] = [
  {
    id: 'components',
    title: 'Components',
    kind: 'groups',
    groups: [
      {
        id: 'actions',
        title: 'Actions',
        components: ['Button', 'ButtonGroup', 'FloatingActionButton', 'IconButton', 'LinkButton'],
      },
      {
        id: 'containers',
        title: 'Containers',
        components: ['Accordion', 'AccordionItem', 'Card', 'Carousel', 'Expansion'],
      },
      {
        id: 'data-display',
        title: 'Data display',
        components: [
          'Amount',
          'Avatar',
          'AvatarGroup',
          'AvatarIndicator',
          'Badge',
          'Image',
          'Map',
          'MapPin',
          'MerchantAvatar',
          'Tag',
          'TagGroup',
        ],
      },
      {
        id: 'feedback',
        title: 'Feedback',
        components: ['Alert', 'Callout', 'EmptyState', 'ProgressBar', 'ResultState', 'Snackbar', 'SnackbarStack'],
      },
      {
        id: 'forms',
        title: 'Forms',
        components: [
          'AmountField',
          'Calendar',
          'CalendarDay',
          'CardField',
          'Combobox',
          'DateField',
          'Ejemplos',
          'KeyboardAccessory',
          'Menu',
          'MenuEmpty',
          'MenuItem',
          'NumericStepper',
          'OTPField',
          'PasswordField',
          'PasswordRequirements',
          'PasswordStrength',
          'PhoneField',
          'RequirementItem',
          'SearchField',
          'Select',
          'TextArea',
          'TextField',
        ],
      },
      {
        id: 'lists',
        title: 'Lists',
        components: ['ListGroup', 'ListItem', 'TextList', 'TextListItem'],
      },
      {
        id: 'navigation',
        title: 'Navigation',
        components: ['Breadcrumb', 'PageIndicator', 'Pagination', 'ProgressStepper', 'Step', 'Tabs', 'TabItem'],
      },
      {
        id: 'overlays',
        title: 'Overlays',
        components: ['Coachmark', 'Popover', 'Tooltip', 'TipPointer'],
      },
      {
        id: 'primitives',
        title: 'Primitives',
        components: ['Divider', 'Icon', 'Skeleton', 'Spinner', 'Text'],
      },
      {
        id: 'selection',
        title: 'Selection',
        components: [
          'Checkbox',
          'CheckboxGroup',
          'Chip',
          'ChoiceBox',
          'ChoiceItem',
          'Radio',
          'RadioGroup',
          'SegmentedControl',
          'Slider',
          'Switch',
          'SwitchGroup',
          'SwitchItem',
        ],
      },
    ],
  },
  {
    id: 'charts',
    title: 'Charts',
    kind: 'groups',
    groups: [
      {
        id: 'comparison',
        title: 'Comparison',
        components: ['Bar', 'Bar + line', 'Bar horizontal', 'Multi bar'],
      },
      {
        id: 'elements',
        title: 'Elements',
        components: ['Legend'],
      },
      {
        id: 'part-to-whole',
        title: 'Part-to-whole',
        components: ['Donut', 'Meter', 'Progress circle', 'Stacked bar horizontal'],
      },
      {
        id: 'trend',
        title: 'Trend',
        components: ['Line', 'Sparkline'],
      },
    ],
  },
  {
    id: 'patterns',
    title: 'Patterns',
    kind: 'components',
    components: [
      'CreateCredentials',
      'FeatureList',
      'FieldHint',
      'IdDocumentInput',
      'LegalConsent',
      'OtpVerification',
      'PhotoGuidelines',
      'SignInForm',
      'SupportContact',
    ],
  },
];

export function getSection(sectionId: string): CatalogSection | undefined {
  return catalog.find((section) => section.id === sectionId);
}

export function getGroup(sectionId: string, groupId: string): CatalogGroup | undefined {
  const section = getSection(sectionId);
  if (section?.kind !== 'groups') return undefined;
  return section.groups.find((group) => group.id === groupId);
}

// Unique id of a component across sections; also used as its stack route name.
export type ComponentKey = `${string}/${string}`;

export function componentKey(sectionId: string, name: string): ComponentKey {
  return `${sectionId}/${name}`;
}

export interface CatalogComponent {
  key: ComponentKey;
  name: string;
}

export const allComponents: CatalogComponent[] = catalog.flatMap((section) => {
  const names = section.kind === 'groups' ? section.groups.flatMap((group) => group.components) : section.components;
  return names.map((name) => ({ key: componentKey(section.id, name), name }));
});
