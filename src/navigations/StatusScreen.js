import React from 'react';
import {View, StyleSheet} from 'react-native';
import CheckConnectionComponents from "../components/CheckConnectionComponents";
import StatusComponents from "../components/StatusComponents";

const StatusScreen = () => {
    return (
        <View style={styles.container}>
            <CheckConnectionComponents/>
            <StatusComponents/>
        </View>
    )
}

export default StatusScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});