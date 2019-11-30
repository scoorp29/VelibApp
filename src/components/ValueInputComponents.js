import React from 'react';
import {View, StyleSheet, TouchableHighlight, TextInput, Text, Button} from 'react-native';
import {AppContext} from "../context/AppContext";


const ValueInputComponents = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Radius of geolocation</Text>
            <AppContext.Consumer>
                {context => (
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            if (value >= 10000) {
                                context.setValue('10000');
                            } else {
                                context.setValue(value);
                            }
                        }
                        }
                        value={context.value}
                    />
                )}
            </AppContext.Consumer>
            <Text style={styles.textAdditional}>
                Radius should be in meter and lower 10000m !
            </Text>
        </View>
    )
};

export default ValueInputComponents;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 30,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textAdditional: {
        fontStyle: 'italic',
    },
});