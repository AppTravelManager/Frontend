import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {AuthNavigator} from "./navigators";


function App() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}

export default App;