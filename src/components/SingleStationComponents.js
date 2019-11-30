import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {Ionicons} from "@expo/vector-icons";
import {AppContext} from "../context/AppContext";

const SingleStationComponents = ({navigation}) => {
    const [icon, setIcon] = useState("ios-heart-empty");

    const liked = (like, setLike) => {
        if (like === 'false') {
            AsyncStorage.setItem(setLike('true'));
            setIcon("ios-heart");
            setLike('true');
        } else {
            AsyncStorage.setItem(setLike('false'));
            setIcon("ios-heart-empty");
            setLike('false');
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.containerMap}
                initialRegion={{
                    latitude: navigation.getParam('Latitude'),
                    longitude: navigation.getParam('Longitude'),
                    latitudeDelta: 0.0090,
                    longitudeDelta: 0.0090,
                }}
            >
                <Marker
                    draggable
                    coordinate={{
                        latitude: navigation.getParam('Latitude'),
                        longitude: navigation.getParam('Longitude'),
                    }}
                    onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                    title={navigation.getParam('Station')}
                >
                    <View style={styles.containerMarker}>
                        <Ionicons style={styles.iconVelo} name="ios-bicycle"/>
                        {
                            navigation.getParam('VelibAvailable') !== 0 && (
                                <Text
                                    style={[styles.text, styles.textAvailable]}>{navigation.getParam('VelibAvailable')}/{navigation.getParam('Dock')}</Text>
                            )
                        }
                        {
                            navigation.getParam('VelibAvailable') === 0 && (
                                <Text
                                    style={[styles.text, styles.textNotAvailable]}>{navigation.getParam('VelibAvailable')}/{navigation.getParam('Dock')}</Text>
                            )
                        }
                    </View>
                </Marker>
            </MapView>
            <View style={styles.containerDescription}>
                <Text style={styles.title}>{navigation.getParam('Station')}</Text>
                <Text style={styles.text}>
                    <Ionicons name="ios-checkmark-circle" size={20} color={'green'}/> {navigation.getParam('State')}
                </Text>
                <Text style={styles.text}>Dock : {navigation.getParam('Dock')}</Text>
                <Text style={styles.text}>Free dock : {navigation.getParam('FreeDock')}</Text>
                <Text style={styles.text}>Payment : {navigation.getParam('Payment')}</Text>
                <Text style={styles.text}>Velib Available : {navigation.getParam('VelibAvailable')}</Text>
                <AppContext.Consumer>
                    {context => (
                        <TouchableOpacity onPress={() => {
                            if (context.like.indexOf(navigation.getParam('Id')) === -1) {
                                context.setLike([
                                    ...context.like,
                                    navigation.getParam('Id')
                                ]);
                            } else {
                                var array = [...context.like];
                                var index = array.indexOf(navigation.getParam('Id'));
                                if (index !== -1) {
                                    array.splice(index, 1);
                                    context.setLike([array])
                                }
                            }
                        }}>
                            {(context.like.indexOf(navigation.getParam('Id')) === -1) &&
                            <Ionicons name="ios-heart-empty" style={styles.icon}/>}
                            {(context.like.indexOf(navigation.getParam('Id')) >= 0) &&
                            <Ionicons name="ios-heart" style={styles.icon}/>}
                        </TouchableOpacity>
                    )}
                </AppContext.Consumer>
            </View>
        </View>
    )
};

export default SingleStationComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMap: {
        flex: 2,
        width: '100%',
    },
    containerDescription: {
        flex: 2,
        padding: 20,
        alignItems: 'center',
    },
    containerMarker: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    image: {
        width: 25,
        height: 15,
    },
    icon: {
        color: '#FFD700',
        fontSize: 50,
    },
    iconVelo: {
        color: '#ac599e',
        fontSize: 26,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
    },
    textAvailable: {
        color: 'green',
    },
    textNotAvailable: {
        color: 'red',
    },
    textAdditional: {
        fontStyle: 'italic',
    },
});