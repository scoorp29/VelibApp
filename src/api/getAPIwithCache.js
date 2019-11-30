import {AsyncStorage} from "react-native";
import React from 'react';

export const get = async (url, networkPriority = false) => {
    const key = encodeURIComponent(url);
    const value = await AsyncStorage.getItem(key);

    try {
        if (value !== null && !networkPriority) {
            return {data: JSON.parse(value), from: "Cache"};
        } else {
            const response = await fetch(url);
            const json = await response.json();
            await AsyncStorage.setItem(key, JSON.stringify(json));
            return {data: json, from: "API"}
        }
    } catch (e) {
        return {
            data: JSON.parse(value),
            from: "Cache",
            error: e.message,
        };
    }
};
