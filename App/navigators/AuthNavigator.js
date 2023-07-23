import { createStackNavigator } from '@react-navigation/stack';
import {FirstLogin, SignIn, SignUp, ForgotPassword, Home} from '../screens';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={styles.navigator}>
            <Stack.Screen name="FirstLogin" component={FirstLogin} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    navigator: {
        headerStatusBarHeight: 1,
        headerTitle: "",
        headerLeft: null,
        animationEnabled: false,
    },
    });

export default AuthNavigator
