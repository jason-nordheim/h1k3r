import { useState, useEffect } from 'react'

const ROOT_URL = "https://www.hikingproject.com/data/";
const API_KEY = "200731291-e2620666ef9b936d8ed6d61c398780b2";

const denver = {
    latitude: 39.750, 
    longitude: -104.975, 
    accuracy: 1500, 
    updatedAt: Date.now()
}

const getTrails = async (latitude, longitude, maxDistance = 10) => {
  // if(typeof(latitude) !== typeof(Number)) throw new Error('Invlalid Latitude')
  // if(typeof(longitude) !== typeof(Number)) throw new Error('Invalid Longitude')
  // if(typeof(maxDistance) !== typeof(Number)) throw new Error('Invalid Distance')

  const requestUrl = `${ROOT_URL}get-trails?lat=${parseFloat(
    latitude.toFixed(3)
  )}&lon=${parseFloat(
    longitude.toFixed(3)
  )}&maxDistance=${maxDistance}&key=${API_KEY}`;

  const response = await fetch(requestUrl)
  const data = await response.json() 
  return data.trails 
};

const queryTrails = async (ids) => {
    const idString = ids.join(',')
    const requestUrl = `${ROOT_URL}get-trails-by-id?ids=${idString}&key=${API_KEY}`;
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data.trails 
}

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
        async function getData() {
            if(position?.latitude !== undefined) {
                const offset = 0.2
                const latitude = parseFloat(position.latitude?.toFixed(3))
                const longitude = parseFloat(position.longitude?.toFixed(3))
                
                const center = await getTrails(latitude, longitude, 5)
                const left = await getTrails(latitude - offset, longitude, 5)
                const right = await getTrails(latitude + offset, longitude, 5)
                const top = await getTrails(latitude, longitude - offset, 5)
                const bottom = await getTrails(latitude, longitude + offset, 5)

                const combined = [...center, ...left, ...right, ...top, ...bottom]
                const ids = Array.from(new Set(combined.map(trail => trail.id))).sort() 
                const unique = await queryTrails(ids)
                setTrails(unique);
            }
        }  
        getData() 
    }, [position])

    return [position, error, trails, switchPosition] 
}
