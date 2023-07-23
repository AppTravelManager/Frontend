import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react'
import {Colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';



function SignIn_old() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showing, setShowing] = useState(false);
    function check(){
        console.log("Email: ", email);
        console.log("Pwd: ", pwd);
        //creare la funzione per passare i dati al backend (non so ancora come si fa )
    }

    //quando si mette il testo si accorcia e alcuni elementi sono fuori
    return (
        <View style={styles.container}>

            <View style={styles.rectangle}>
                <Text style={[styles.text, {paddingBottom: '20%'}]}>Login To Your Account</Text>

                <View style={styles.inputContainer}>
                    <Icon name="envelope" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'email'}
                        onChangeText={(text) => setEmail(text)}
                        value={email}/>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" style={styles.inputIcon} />

                    <TextInput
                        style={styles.input}
                        placeholder={'password'}
                        secureTextEntry = {showing}
                        onChangeText={(text) => setPwd(text)}
                        value={pwd}/>

                    <TouchableOpacity onPress={() => setShowing(!showing)}>
                        <Icon name={showing ? 'eye' : 'eye-slash'} style={styles.inputIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={()=>check()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                    <View style={styles.line} />
                    <Text >or login with</Text>
                    <View style={styles.line} />

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.green,
            justifyContent: 'center',
            alignItems: 'center',
        },
        rectangle: {
            position: "absolute",
            width: '90%',
            height: '90%',
            backgroundColor: Colors.white,
            borderRadius: 10,
            alignItems: 'center',
            bottom: '5%',
        },
        text: {
            color: Colors.green,
            fontStyle : "normal",
            fontWeight: 'bold',
            fontSize: 25,
            paddingTop: '10%',
        },
        inputContainer: {
            borderWidth: 1,
            borderColor: Colors.darkGreen,
            flexDirection: 'row',
            marginBottom: 20,
            width: '90%',
        },
        input: {
            flex: 1,
            width: '80%',
            borderRadius: 1,
            backgroundColor: '#fff',
        },
        inputIcon: {
            margin: 15,
            fontSize: 20,
            color: Colors.darkGreen,
        },
        button: {
            width: 250,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            backgroundColor: Colors.darkGreen,
        },
        buttonText: {
            color: Colors.white,
            fontStyle : "normal",
            fontWeight: 'bold',
            fontSize: 15,
        },
        line: {
            flex: 1,
            height: 1,
            width: "100%",
            borderRadius: 1,
            backgroundColor: Colors.darkGreen,
            margin: 2,
            marginVertical: 20,
        }
    });
export default SignIn_old