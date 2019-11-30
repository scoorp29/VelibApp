import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native';
import VelibStationsComponents from "../components/VelibStationsComponents";
import ValueInputComponents from "../components/ValueInputComponents";


const VelibStationsScreen = (props) => {
    return (
        <View style={styles.container}>
            <ValueInputComponents/>
            <VelibStationsComponents navigation={props.navigation}/>
        </View>
    )
};

export default VelibStationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});