import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';



export default class Navigation extends Component {
    render() {
        return (

            <View style={styles.container}>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Logout')}
                >
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('About')}
                >
                    <Text style={styles.text}>About</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Gallery')}
                >
                    <Text style={styles.text}>Gallery</Text>
                </TouchableOpacity> */}

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 25,
        color: '#000',
        alignSelf: 'center',
        marginVertical: 12,
        marginHorizontal: 20,
        width: 300
    },
    button: {
        marginVertical: 1,
        backgroundColor: 'rgb(250,250,250)',
        elevation: 3
    }


})