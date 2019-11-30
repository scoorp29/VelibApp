import React, {useState, useEffect} from "react";
import {get} from "../api/getAPIwithCache";
import {findCoordinates} from "../services/findCoordinatesServices";

export const AppContext = React.createContext(null);

export const AppProvider = props => {
    const [location, setLocation] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [like,setLike] = useState([]);

    const api = () => {
        let API_URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=1&facet=station_state&geofilter.distance=48.8534%2C2.3488%2C800";
        if (location.coords) {
            return API_URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=500&facet=station_state&geofilter.distance=" + location.coords.latitude + "%2C" + location.coords.longitude + "%2C10000";
        }
    };

    const fetchData = networkPriority => {
        setLoading(true);
        get(api(), networkPriority).then(data => {
            setData(data);
            setLoading(false);
        });
    };

    useEffect(() => {
        findCoordinates(location, setLocation);
    }, []);

    useEffect(() => {
        if (location) {
            fetchData();
            fetchData(true);
        }
    }, [location])

    return <AppContext.Provider value={{location, setLocation, data, setData, like, setLike}} {...props} />;
};
