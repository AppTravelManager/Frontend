import { StyleSheet, Text, TouchableOpacity} from 'react-native';

function CustomizeButton(props) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor : props.backgroundColor}]}
            onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.textButton}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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

export default CustomizeButton;