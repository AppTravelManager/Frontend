import { createStackNavigator } from '@react-navigation/stack';
import {FirstLogin, SignIn, SignUp, ForgotPassword} from '../screens';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FirstLogin" component={FirstLogin} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthNavigator