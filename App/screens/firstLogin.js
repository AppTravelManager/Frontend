import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../constants'


//In caso l'utente abbia gia fatto il primo login si va ad Home
let  hasLogged = false;
function FirstLogin({navigation}) {
    if(hasLogged){
        return navigation.navigate("Home")
    }
    else{
        return (
            <View style={styles.container}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style= {[styles.button, {backgroundColor : Colors.yellow}]}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={[styles.button, {backgroundColor : Colors.orange}]}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green,
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

export default FirstLogin
