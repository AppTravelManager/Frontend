import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Animated, Easing } from 'react-native';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function animateInput(field){
        Animated.sequence([
            Animated.timing(field, {
                toValue: -1,
                duration: 50,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
            Animated.timing(field, {
                toValue: 1,
                duration: 75,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
            Animated.timing(field, {
                toValue: 0,
                duration: 50,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
        ]).start();
}
function animatedInput(tipo, placeholder, value, onChangeText, isValid) {
    let icona, first, second, secure;
    const [showing, setShowing] = useState(false);

    if (placeholder === "Email") {
        icona = "envelope";
        first = "check";
        second = "close";
        secure = false;
    }
    else
    {
        icona = "lock";
        first = "eye";
        second = "eye-slash";
        secure = true;
    }

    return (
        <Animated.View
            style={[
                styles.inputContainer,
                {
                    borderColor: isValid === true ? Colors.darkGreen : "#DB4437",
                    transform: [
                        {
                            translateX: tipo.interpolate({
                                inputRange: [-1, 0, 1],
                                outputRange: [-10, 0, 10],
                            }),
                        },
                    ],
                },
            ]}
        >
            <Icon name={icona} style={[styles.inputIcon, {
                color: isValid === true ? Colors.darkGreen : "#DB4437",
            }]}/>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(text) => {
                    onChangeText(text);
                    if(placeholder === "Email")
                    {
                        setShowing(validateEmail(text))
                    }
                }}
                value={value}
                secureTextEntry={!showing && secure}
            />
            <TouchableOpacity onPress={() => {
                if (secure) {
                    setShowing(!showing);
                }
            }}>
                <Icon name={showing === true ? first : second} style={[styles.inputIcon, {
                    color: isValid === true ? Colors.darkGreen : "#DB4437",
                }]}/>
            </TouchableOpacity>
        </Animated.View>
    );
}

function SignIn({ navigation }) {

    // Var. di stato per memorizzare email e pwd
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');


    // Var. per gestire gli stati di animazione di inputContainer
    const [emailAnimation] = useState(new Animated.Value(0));
    const [pwdAnimation] = useState(new Animated.Value(0));

    //Var. di gestione input
    const [emailValid, setEmailValid] = useState(true);
    const [pwdValid, setPwdValid] = useState(true);

    const check = () => {
        console.log("Email: ", email);
        console.log("Pwd: ", pwd);
        // Passare i dati al backend

        //Se email o pwd sono vuoti o il controllo del backend non è andato bene
        const animations = [];
        if (email === '') {
            setEmailValid(false);
            animations.push(animateInput(emailAnimation));
        }

        if (pwd === '') {
            setPwdValid(false);
            animations.push(animateInput(pwdAnimation));
        }

        // se ci sono animazioni si eseguono in modo parallelo
        if (animations.length > 0) {
            Animated.parallel(animations).start();
            setTimeout(() => { // timeout per reimpostare i valori a true e quindi il colore iniziale
                setPwdValid(true);
                setEmailValid(true)
            }, 300);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"height"} enabled={false}>
            <Text style={styles.titleText}>Login To Your Account</Text>

            <View style={styles.loginContainer}>

                <View style={styles.loginCircle}>
                    <Icon name="user" size={30} color={Colors.darkGreen} />
                </View>

                {animatedInput(emailAnimation, 'Email', email, setEmail, emailValid)}

                {animatedInput(pwdAnimation, 'Password', pwd, setPwd,  pwdValid)}

                <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {  check(); }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}> or login with</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.socialContainer}>
                <View style={[styles.socialCircle, {backgroundColor: "#3b5998"}]}>
                    <TouchableOpacity>
                        <Icon name='facebook' size={30} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.socialCircle, {backgroundColor: "#DB4437"}]}>
                    <TouchableOpacity>
                        <Icon name='google' size={30} color={Colors.white} />
                    </TouchableOpacity>
                </View>
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
        paddingVertical: '10%',
    },
    titleText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: '20%',
    },
    forgotText: {
        color: 'grey',
        fontSize: 15,
        paddingBottom: "15%",
    },
    loginContainer: {
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
    },
    loginCircle: {
        width: '32%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 200,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        top: "-5%",
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
        width: '85%',
        height: "15%",
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
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '10%',
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: 'white',
        marginHorizontal: '5%',
    },
    orText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
    socialContainer:{
        width: '80%',
        height: '15%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: "row",
        },
    socialCircle: {
        width: '25%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 200,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        },
});

export default SignIn;