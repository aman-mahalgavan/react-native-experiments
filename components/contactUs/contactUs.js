import React,
{ Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet
} from 'react-native';
// import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class ContactUs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation;
        onPressGoBack = () => {
            navigate('Home');
        }
        return (
            <View style={styles.Container}>
                <Button
                    onPress={onPressGoBack}
                    title="Simon Go Back!"
                    color="#841584"
                    style={styles.button}
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text> Contact Us Screen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#c2c2c2',
        flex: 1
    }
});