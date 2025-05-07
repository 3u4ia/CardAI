import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, Platform, ScrollView} from 'react-native';
export default function App() {
  console.log("app executed");
  const handlePress = () => alert("Text pressed");

  return (
    <SafeAreaView style={styles.background}> 
    <View style={styles.topToolbar}>
    </View>
    <ScrollView style={styles.noteCardRegion}>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 1</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      <View style={
        styles.noteCard
      }> 
      <Text style={styles.text}>Card 2</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#dbffd4',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  noteCardRegion: {
    backgroundColor: '#dbffd4',
    flexGrow: 1,
    padding: 20
  },
  noteCard: {
    backgroundColor: "#ffb6c1",
    width: '50%',
    height: '30%',
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    top: 20,
    columnGap: 20,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'black'
  },
  topToolbar: {
    backgroundColor: '#126e00',
    height: '10%',
    top: 0
  }
});