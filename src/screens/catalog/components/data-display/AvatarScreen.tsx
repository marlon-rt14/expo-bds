import { Avatar } from '@bds/react-native';
import { ComponentPlayground } from '../../../../components';
import { View } from 'react-native';

export function AvatarScreen() {
  return <ComponentPlayground name="Avatar">
  <Avatar icon='search-md' size='lg' type='image' ring/>
  <Avatar name='Marlon Ruiz' size='lg' type='initials' status='online'/>
  <Avatar name='Marlon Ruiz' size='lg' type='initials' status='busy'/>
  <Avatar name='Marlon Ruiz' size='lg' type='initials' status='offline'/>
  <Avatar name='Marlon Ruiz' size='lg' type='initials' status='away'/>
  <View style={{flexDirection: 'row', gap: 8, backgroundColor: 'red' }}>

  <Avatar name='Marlon Ruiz' size='lg' type='initials' ring/>
  <Avatar name='Marlon Ruiz' size='lg' type='initials' />
  </View>
  </ComponentPlayground>;
}
