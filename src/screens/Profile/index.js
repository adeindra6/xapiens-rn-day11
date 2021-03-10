import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { ProfileComponent } from '../../component';

class ProfileScreen extends Component {
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id','Id');
        const name = navigation.getParam('name', 'Name');
        const email = navigation.getParam('email', 'Email');
        const password = navigation.getParam('password', 'Password');
        const slogan = navigation.getParam('slogan', 'Slogan');
        const jobs = navigation.getParam('jobs', 'Jobs');

        return(
            <>
                <ProfileComponent 
                    action={() => console.log("")}
                    id={ id }
                    name={ name }
                    email={ email }
                    password={ password }
                    slogan={ slogan }
                    jobs={ jobs }
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;