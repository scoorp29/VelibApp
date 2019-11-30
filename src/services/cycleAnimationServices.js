import React from "react";
import {Animated} from "react-native";

export const cycleAnimation = (height) => {
    Animated.sequence([
        Animated.timing(height, {
            toValue: 1,
            duration: 1500,
        }),
        Animated.timing(height, {
            toValue: 0,
            duration: 1500,
        }),
    ]).start(event => {
        if (event.finished) {
            cycleAnimation(height);
        }
    });
};