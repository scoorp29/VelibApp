import React from "react";
import {Alert} from "react-native";

export const findCoordinates = (location, setLocation) => {
    navigator.geolocation.getCurrentPosition(
        position => {
            setLocation(position);
        },
        error => Alert.alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
};
