import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Animated

} from 'react-native';

import { createTransition, FlipX } from 'react-native-transition';

const Transition = createTransition(FlipX);


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.flipValue = new Animated.Value(0);
        this.finalVal = 100;
    }

    switch = () => {
        Transition.show(
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>This is another view</Text>
            </View>
        );
    }

    componentDidMount() {

        this.flip()
    }

    flip = (FinalVal) => {
        Animated.timing(this.flipValue, {
            toValue: 100,
            duration: 5000
        }).start()
    }

    render() {
        const { navigate } = this.props.navigation;
        routeToGallery = () => {
            navigate('Gallery');
        }
        routeToContactUs = () => {
            navigate('ContactUs');
        }

        const interpolate = this.flipValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg']
        })
        return (
            <Transition>
                <View style={styles.container}>
                    <Animated.Image
                        style={[styles.headerImage, { transform: [{ rotateX: interpolate }] }]}
                        source={require('../assets/images/One_piece_logo-5.png')}
                    />

                    <View>
                        <Image style={styles.backgroundImage} source={require('../assets/images/one-piece-bg.jpg')}>
                        </Image>
                        <View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)' }}></View>
                        <View style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: 'transparent', textAlign: 'center' }}>
                            <Text style={{ color: '#fff', textAlign: 'center', width: '100%', fontSize: 20 }}>
                                Welcome to the world of One Piece.
                        </Text>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
                                <Button
                                    onPress={routeToGallery}
                                    title="View Gallery"
                                    color="#30839f"
                                    style={styles.button}
                                    accessibilityLabel="View our gallery"
                                />
                                <Button title="Press to Switch" onPress={this.switch} />
                                <Button
                                    onPress={routeToContactUs}
                                    title="Contact Us"
                                    color="#30839f"
                                    style={styles.button}
                                    accessibilityLabel="Send us an email"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Transition>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        height: 1000
    },
    headerImage: {
        left: 50,
        top: 20,
        marginBottom: 40,
        width: 300,
        height: 100
    },
    backgroundImage: {
        width: '100%',
        height: 485,
        resizeMode: 'cover',
    },
    button: {
        // marginTop: 50,
        // paddingHorizontal: 50,
        paddingVertical: 50,
        borderRadius: 20,
        bottom: 0,
        // flex: 50
    },
});

/* 
    <View style={styles.container}>
                <Image
                    style={styles.headerImage}
                    source={require('../assets/images/One_piece_logo-5.png')}
                />
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/images/one-piece-bg.jpg')}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30, color: 'rgb(255,255,255)' }}>
                        This App is about One Piece Anime Series.
                    </Text>
                    <View style={{ height: '100%', width: '100%', opacity: 1 }}>

                    </View>
                </ImageBackground>

                <Button
                    onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    style={styles.button}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View >
*/