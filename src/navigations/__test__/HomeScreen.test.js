import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from "../HomeScreen";
import {AppProvider} from "../../context/AppContext";

test('renders correctly HommeScreen', () => {

    const tree = renderer.create(
        <AppProvider>
            <HomeScreen/>
        </AppProvider>
    ).toJSON();


    expect(tree).toMatchSnapshot();
});