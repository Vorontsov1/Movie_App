import { Text, StyleSheet, ScrollView, View } from "react-native";
import {StatusBar} from 'expo-status-bar';



const MovieScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
          <StatusBar style="auto" translucent={false} />
      <Text>MovieScreen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
  },
});

export default MovieScreen;
