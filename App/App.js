import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';




export default function App() {
  return (
        <View style={styles.container}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <TouchableOpacity style={[styles.button, {backgroundColor : '#E9C46A'}]}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {backgroundColor : '#F4A261'}]}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A9D8F',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circle: {
    width: '120%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontStyle : "normal",
    fontWeight: 'bold',
    fontSize: 15,
  }
});
