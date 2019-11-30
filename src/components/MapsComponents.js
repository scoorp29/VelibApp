import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {AppContext} from "../context/AppContext";
import {Ionicons} from "@expo/vector-icons";


const MapsComponents = () => {

    return (
        <AppContext.Consumer>
            {context => (

                <View style={styles.container}>
                    {context.location.coords &&
                    (
                        <>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: context.location.coords.latitude,
                                    longitude: context.location.coords.longitude,
                                    latitudeDelta: 0.0090,
                                    longitudeDelta: 0.0090,
                                }}
                                showsUserLocation={true}
                            >
                                {context.data.data && context.data.data.records.map(function (item, i) {
                                    return <Marker
                                        draggable
                                        coordinate={{
                                            latitude: item.fields.geo[0],
                                            longitude: item.fields.geo[1],
                                        }}
                                        onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                                        title={item.fields.station_name}
                                        key={i}
                                    >
                                        <View style={styles.container2}>
                                            <Ionicons style={styles.iconVelo} name="ios-bicycle"/>
                                            {
                                                item.fields.nbbike !== 0 && (
                                                    <Text style={[styles.text, styles.textAvailable]}>{item.fields.nbbike}/{item.fields.nbedock}</Text>
                                                )
                                            }
                                            {
                                                item.fields.nbbike === 0 && (
                                                    <Text style={[styles.text, styles.textNotAvailable]}>{item.fields.nbbike}/{item.fields.nbdock}</Text>
                                                )
                                            }
                                        </View>
                                    </Marker>
                                })}
                            </MapView>
                        </>
                    )}
                </View>
            )}
        </AppContext.Consumer>
    )
};

export default MapsComponents;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container2: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    iconVelo: {
        color: '#ac599e',
        fontSize: 26,
    },
    text: {
        fontSize: 14,
    },
    textAvailable: {
        color: 'green',
    },
    textNotAvailable: {
        color: 'red',
    },
});


