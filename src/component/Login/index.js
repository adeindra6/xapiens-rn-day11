import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

class LoginComponent extends Component {
    state = {
        email: '',
        password: '',
    };

    emailHandler(text) {
        console.log("Login Component Email Handler : " + text);
        this.setState({email: text});
    }

    passwordHandler(text) {
        console.log("Login Component Password Handler : " + text);
        this.setState({password: text});
    }

    actionSubmit = () => {
        const { action } = this.props;
        const { email, password } = this.state;
        action(email, password);
        this.setState({email: '', password: ''});
    };

    render() {
        const { email, password } = this.state;
        return(
            <View>
                <TextInput
                    value={ email }
                    placeholder="Email"
                    style={ styles.input }
                    onChangeText={(text) => {
                        this.emailHandler(text);
                    }}
                />
                <TextInput
                    value={ password }
                    placeholder="Password"
                    secureTextEntry={true}
                    style={ styles.input }
                    onChangeText={(text) => {
                        this.passwordHandler(text);
                    }}
                />
                <TouchableOpacity
                    style={ styles.btn }
                    onPress={() => this.actionSubmit()}>
                    <Text style={ styles.label }>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.link }>
                    <Text style={ styles.linklabel }>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#e8e8e8',
        alignSelf: 'center',
    },

    btn: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '30%',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    link: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'white',
    },

    linklabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#5db075',
    },
});

export default LoginComponent;