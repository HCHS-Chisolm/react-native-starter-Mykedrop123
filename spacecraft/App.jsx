import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <LoginScreen />
      <StarshipFeedScreen/>
      {/* <TermsScreen />*/}
    </PaperProvider>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;