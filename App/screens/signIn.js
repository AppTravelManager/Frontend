import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

function SignIn() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showing, setShowing] = useState(false);
    const [checkE, setCheckE] = useState(false);

    function check() {
        console.log("Email: ", email);
        console.log("Pwd: ", pwd);
        // passare i dati al backend
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"height"} enabled={false}>
            <Text style={[styles.text, { paddingBottom: '20%' }]}>Login To Your Account</Text>
            <View style={styles.circle}>
                <View style={styles.inputContainer}>
                    <Icon name="envelope" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'email'}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Icon name={checkE ? 'check' : 'close'} style={styles.inputIcon} />
                </View>
                <View style={[styles.inputContainer, { marginBottom: "10%" }]}>
                    <Icon name="lock" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'password'}
                        secureTextEntry={showing}
                        onChangeText={setPwd}
                        value={pwd}
                    />
                    <TouchableOpacity onPress={() => setShowing(!showing)}>
                        <Icon name={showing ? 'eye' : 'eye-slash'} style={styles.inputIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => check()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: '10%',
    },
    circle: {
        width: '80%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: 1000,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.darkGreen,
        flexDirection: 'row',
        marginBottom: "5%",
        width: '80%',
    },
    input: {
        flex: 1,
        width: '80%',
        backgroundColor: '#fff',
    },
    inputIcon: {
        margin: 15,
        fontSize: 20,
        color: Colors.darkGreen,
    },
    button: {
        bottom: '5%',
        width: '40%',
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGreen,
        borderRadius: 1000,
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default SignIn;
