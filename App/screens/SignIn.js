import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Animated, Easing } from 'react-native';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showing, setShowing] = useState(true);
    const [checkE, setCheckE] = useState(false);

    const [emailAnimation] = useState(new Animated.Value(0));
    const [pwdAnimation] = useState(new Animated.Value(0));

    const [emailValid, setEmailValid] = useState(true);
    const [pwdValid, setPwdValid] = useState(true);

    const check = () => {
        console.log("Email: ", email);
        console.log("Pwd: ", pwd);
        // Passare i dati al backend

        if (email === '') {
            animateInput(emailAnimation)
            setEmailValid(false)
            setTimeout(() => {
                emailAnimation.setValue(0);
                setEmailValid(true)
            }, 250);
        }

        if (pwd === '') {
            animateInput(pwdAnimation)
            setPwdValid(false)
            setTimeout(() => {
                pwdAnimation.setValue(0);
                setPwdValid(true)
            }, 250);
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setCheckE(emailRegex.test(email));


    };
    const animateInput= (field) => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(field, {
                    toValue: 1,
                    duration: 50,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(field, {
                    toValue: 0,
                    duration: 50,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    };

    const animatedInput = (tipo, placeholder, value, onChangeText, icona, state, first, second, secure) => (
        <Animated.View
            style={[
                styles.inputContainer,
                {
                    borderColor: placeholder === 'Email' ? (emailValid ? Colors.darkGreen : 'red') : (pwdValid ? Colors.darkGreen : 'red'),
                    transform: [
                        {
                            translateX: tipo.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 10],
                            }),
                        },
                    ],
                },
            ]}
        >
            <Icon name={icona} style={[styles.inputIcon, {
                color:  placeholder === 'Email' ? (emailValid ? Colors.darkGreen : "#DB4437") : (pwdValid ? Colors.darkGreen : "#DB4437")
            }]} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={showing && secure}
            />
            <TouchableOpacity onPress={() => {
                if (secure) {
                    setShowing(!showing);
                }}}>
                <Icon name={state ? first : second} style={[styles.inputIcon, {
                    color:  placeholder === 'Email' ? (emailValid ? Colors.darkGreen : "#DB4437") : (pwdValid ? Colors.darkGreen : "#DB4437")
                }]} />
            </TouchableOpacity>
        </Animated.View>
    );

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"height"} enabled={false}>
            <Text style={styles.titleText}>Login To Your Account</Text>

            <View style={styles.loginContainer}>

                <View style={styles.loginCircle}>
                    <Icon name="user" size={30} color={Colors.darkGreen} />
                </View>

                {animatedInput(emailAnimation, 'Email', email, (text) => {
                    setEmail(text);
                    validateEmail(text);
                }, 'envelope', checkE, "check", "close", false)}

                {animatedInput(pwdAnimation, 'Password', pwd, setPwd, 'lock', showing, "eye", "eye-slash", true)}

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