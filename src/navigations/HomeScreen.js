import React from 'react';
import {Button, View, StyleSheet, Animated} from 'react-native';
import {AppContext} from "../context/AppContext";

const HomeScreen = (props) => {

    return (
        <View style={styles.container}>
                <AppContext.Consumer>
                    {context => (
                            <Animated.View style={[{flex: context.height, backgroundColor: '#f9b01f'}]}>
                                <View style={[styles.container2]}>
                                <Button
                                    color="#adb924"
                                    title="Velib Station"
                                    onPress={() => props.navigation.navigate('Stations')}
                                />
                                </View>
                            </Animated.View>
                    )}
                </AppContext.Consumer>
            <View style={[styles.container2, {backgroundColor: '#df2f8a'}]}>
                <Button
                    color="#15aac3"
                    title="Velib Maps"
                    onPress={() => props.navigation.navigate('Maps')}
                />
            </View>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9b01f',
    },
});