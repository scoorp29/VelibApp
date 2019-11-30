import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.container2, {backgroundColor: '#f9b01f'}]}>
                <Button
                    color="#adb924"
                    title="Velib Station"
                    onPress={() => props.navigation.navigate('Stations')}
                />
            </View>
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9b01f',
    },
});