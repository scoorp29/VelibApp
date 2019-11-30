import React from 'react';
import {Text, ActivityIndicator, StyleSheet, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {AppContext} from "../context/AppContext";
import {Ionicons} from "@expo/vector-icons";

const VelibStationsComponents = ({navigation}) => {

    return (

        <AppContext.Consumer>
            {context => (
                <ScrollView style={styles.container}>
                    {!context && <ActivityIndicator/>}
                    <Text style={[styles.title, styles.text]}>
                        Number of Velib stations nearby
                    </Text>
                    <Text style={[styles.textVelibAvailable, styles.text]}>
                        {context.data.data && (
                            context.data.data && context.data.data.nhits
                        )}
                    </Text>
                    <Text style={[styles.textAdditional, styles.text]}>
                        {context.data.data && (
                            <>
                                <Text>Load From {context.data.from}</Text>
                                {context.data.data.error &&
                                <Text> Error: {JSON.stringify(context.data.data.error)}</Text>}
                            </>
                        )}
                    </Text>
                    {context.data.data &&
                    <>
                        <FlatList style={styles.list}
                                  data={context.data.data.records}
                                  renderItem={({item}) =>
                                      <>
                                          <TouchableOpacity onPress={() => {
                                              navigation.navigate('Details', {
                                                  Id: item.recordid,
                                                  Station: item.fields.station_name,
                                                  State: item.fields.station_state,
                                                  Dock: item.fields.nbedock,
                                                  FreeDock: item.fields.nbfreeedock,
                                                  Payment: item.fields.creditcard,
                                                  VelibAvailable: item.fields.nbbike,
                                                  Latitude: item.fields.geo[0],
                                                  Longitude: item.fields.geo[1],
                                              });
                                          }}>
                                              <Text style={styles.itemTitle}>{item.fields.station_name}</Text>
                                              <Text style={styles.item}><Ionicons name="ios-checkmark-circle" size={20}
                                                                                  color={'green'}/> {item.fields.station_state}
                                              </Text>
                                          </TouchableOpacity>
                                      </>
                                  }
                                  keyExtractor={(item) => item.recordid}
                        />
                    </>
                    }
                </ScrollView>
            )}
        </AppContext.Consumer>
    )
};

export default VelibStationsComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
    },
    textVelibAvailable: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textAdditional: {
        fontStyle: 'italic',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
    },
    item: {
        fontSize: 16,
        textAlign: 'center',
    },
});