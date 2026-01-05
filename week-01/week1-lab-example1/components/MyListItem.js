import { Text, Button, ListItem, Avatar } from '@rneui/themed';

export default function MyListItem({ itemData, navigatorRef }) {

  return (    
    <ListItem>
      <Avatar
        rounded
        source={{ uri: itemData.keyImage }}
      />

      <ListItem.Content>
        <Text>{itemData.name}</Text>
      </ListItem.Content>

      <Button
        icon={{
          name: 'caret-forward',
          type: 'ionicon',
          size: 15,
        }}
        iconPosition='right'
        disabled={!itemData.active}
        onPress={() => navigatorRef.navigate('ResortDetail', {
          detailId: itemData.id,
        })}
      />
    </ListItem>
  );
}
