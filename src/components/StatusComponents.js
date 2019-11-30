import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {AppContext} from "../context/AppContext";

const StatusComponents = () => {

    return (
        <AppContext.Consumer>
            {context => (
                <View style={styles.container}>
                    <Text style={styles.title}>My GPS Coords?</Text>
                    {!context.location.coords && <ActivityIndicator/>}
                    {context.location.coords && (
                        <>
                            <Text style={styles.text}>Longitude: {context.location.coords.latitude}</Text>
                            <Text style={styles.text}>Longitude: {context.location.coords.longitude}</Text>
                        </>
                    )}
                </View>
            )}
        </AppContext.Consumer>
    );
};
export default StatusComponents;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#0c68a6',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    title: {
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: '#fff',
    },
});