import React from 'react';
import {View, StyleSheet} from 'react-native';
import VelibStationsComponents from "../components/VelibStationsComponents";


const VelibStationsScreen = (props) => {
    return (
        <View style={styles.container}>
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