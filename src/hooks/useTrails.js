import { useState, useEffect } from 'react'

const ROOT_URL = "https://www.hikingproject.com/data/";
const API_KEY = "200731291-e2620666ef9b936d8ed6d61c398780b2";

const denver = {
    latitude: 39.750, 
    longitude: -104.975, 
    accuracy: 1500, 
    updatedAt: Date.now()
}

const getTrails = (latitude, longitude, maxDistance = 10, saveDataCallback) => {
  // if(typeof(latitude) !== typeof(Number)) throw new Error('Invlalid Latitude')
  // if(typeof(longitude) !== typeof(Number)) throw new Error('Invalid Longitude')
  // if(typeof(maxDistance) !== typeof(Number)) throw new Error('Invalid Distance')

  const requestUrl = `${ROOT_URL}get-trails?lat=${parseFloat(
    latitude.toFixed(3)
  )}&lon=${parseFloat(
    longitude.toFixed(3)
  )}&maxDistance=${maxDistance}&key=${API_KEY}`;

  fetch(requestUrl)
    .then((response) => response.json())
    .then(saveDataCallback);
};


export const useTrails = () => {
    const [position, setPosition] = useState(denver) 
    const [error, setError] = useState(null)
    const [trails, setTrails] = useState(null)

    const switchPosition = (latitude, longitude, accuracy = null) => {
        console.log('switching position')
        setPosition({
            latitude: latitude, 
            longitude: longitude, 
            accuracy: accuracy === null ? position.accuracy : accuracy, 
            updatedAt: Date.now()
        })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setPosition({
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude, 
                    accuracy: position.coords.accuracy, 
                    updatedAt: new Date(position.timestamp)
                })
            }, 
            error => setError(error), 
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 })
    }, [])


    useEffect(() => {
        if(position?.latitude !== undefined) {
            const latitude = parseFloat(position.latitude?.toFixed(3))
            const longitude = parseFloat(position.longitude?.toFixed(3))
            // closest 
            getTrails(latitude, longitude, 5, (data) => {
                console.log('data', data)
                setTrails(data.trails)
            })
            // // to the right 
            // getTrails(latitude + 0.5, longitude, 5, (data) => {
            //     setTrails([...trails, data.trails])
            // })
            // getTrails(latitude - 0.5, longitude, 5, (data) => {
            //     setTrails([...trails, data.trails]);
            // })
            // getTrails(latitude, longitude + 0.5, 5, (data) => {
            //     setTrails([...trails, data.trails]);
            // })
            // getTrails(latitude, longitude - 0.5, 5, (data) => {
            //     setTrails([...trails, data.trails]);
            // })
        }  
    }, [position])

    return [position, error, trails, switchPosition] 
}