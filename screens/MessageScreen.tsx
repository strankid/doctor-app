import { FlatList, View, StyleSheet } from "react-native";
import  ChatRoomItem  from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
      data={chatRoomsData}
      renderItem= {({ item }) => <ChatRoomItem chatRoom={item} />  }
      />
    </View>
  );
}



const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
