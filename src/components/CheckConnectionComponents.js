import {useNetInfo} from "@react-native-community/netinfo";
import {StyleSheet, Text, View} from "react-native";
import React from "react";


export const CheckConnectionComponents = () => {
    const netInfo = useNetInfo();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connection</Text>
            <Text style={styles.text}>Type: {netInfo.type}</Text>
            <Text style={styles.text}> Connected :
                {netInfo.isConnected ? <Text style={styles.textGreen}> Yes</Text> :
                    <Text style={styles.textRed}> Non</Text>}
            </Text>
        </View>
    );
};

export default CheckConnectionComponents;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
    },
    textGreen: {
        color: 'green',
    },
    textRed: {
        color: 'red',
    }
});