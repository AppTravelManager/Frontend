import {StyleSheet, View} from 'react-native';
import {Colors} from "../constants";
import {CustomizeButton} from "../components";

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
                        <CustomizeButton backgroundColor={Colors.yellow} textButton={"sort"} onPress={() => navigation.navigate("SignIn")}/>
                        <CustomizeButton backgroundColor={Colors.orange} textButton={"Register"} onPress={() => navigation.navigate("SignUp")}/>
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
});

export default FirstLogin
