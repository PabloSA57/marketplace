import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const objMarket = [
    {
        type: 'client',
        properties: {
            iconSize: [60,60] 
        },
        geometry: {
            type: 'Point',
            coordinates: [-65.26133808868217,-26.788827134886617]
        }
    },
    {
        type: 'store',
        properties: {
            iconSize: [40,40]
        },
        geometry: {
            type: 'Point',
            coordinates: [-65.27133808868217,-26.755817134886617]
        }
    }
]

interface Prop {
    formLat: React.Dispatch<React.SetStateAction<number | null>>,
    formLng: React.Dispatch<React.SetStateAction<number | null>>,
    from: string,
    LngLatStore?: [number, number],
    LngLatClient?: [number,number] | []
}
mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX as string;
export const Mapbox = ({formLat, formLng, from, LngLatClient, LngLatStore}: Prop) => {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);
    const [lng, setLng] = useState(-68.16014203613013);
    const [lat, setLat] = useState(-38.95622024618729);
    const [zoom, setZoom] = useState(3);
    const [locationUpdate, setlocationUpdate] = useState(false);
    const [markerLat, setMarkerLat] = useState(-26.798227134886616);
    const [markerLng, setMarkerLng] = useState(-65.26133808868217);

    const marker = useRef<any>(null);
    
    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });

        console.log("mapActualizado")
    }, [locationUpdate]);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [locationUpdate]);
    
    useEffect(() => {
        if(from === "formcreate"){
            map.current.on("click", (e: any) => {
                let coordinates = e.lngLat;
                console.log("Lng:", coordinates.lng, "Lat:", coordinates.lat);
                setMarkerLat(coordinates.lat);
                setMarkerLng(coordinates.lng);
                console.log(markerLat, markerLng)
                const lngLat= [coordinates.lng, coordinates.lat];
                
    
                marker?.current?.remove();
                marker.current = new mapboxgl.Marker();
                marker.current.setLngLat(lngLat).addTo(map.current as any);
            
                // Info que va hacia el FORM NewPet
                //formLat(coordinates.lat);
                //formLng(coordinates.lng);
            });
        }
        
    }, [locationUpdate])

        useEffect(() => {
            map.current.on("load", () => {
                console.log('load map')
                const lngLat= LngLatClient !== undefined && LngLatClient.length > 1 ? LngLatClient : [markerLng, markerLat];
    
                //marker?.current?.remove();
                console.log(Boolean(LngLatClient), LngLatClient)
                formLat(markerLat)
                formLng(markerLng)
                    if(from === 'formcart'){
                        if(LngLatClient && LngLatStore){
                            console.log('aqqqq', lngLat)
                            const market1 = new mapboxgl.Marker({
                                draggable: true
                                })
                                .setLngLat(lngLat as [number, number])
                                .addTo(map.current as any);
    
                                const  onDragEnd = () => {
                                    const lngLat = market1.getLngLat();
                                    
                                    console.log(lngLat.lng, lngLat.lat)
                                    formLat(lngLat.lat)
                                    formLng(lngLat.lng)
                                    }
                                    market1.on('dragend', onDragEnd);
                                    
                                    console.log(LngLatStore)

                                    const market2 = new mapboxgl.Marker()
                                        .setLngLat(LngLatStore)
                                        .addTo(map.current as any);
                        }
                    }

                    /*const market2 = new mapboxgl.Marker()
                        .setLngLat([-65.27133808868217,-26.755817134886617])
                        .addTo(map.current as any);*/

                    
            })
        }, [])

    const myLocation = () => {
        if("geolocation" in navigator){
                navigator.geolocation.getCurrentPosition((position) => {

                    console.log(position.coords);
                    setLat(position.coords.latitude)
                    setLng(position.coords.longitude)

                    setZoom(14);
                    setlocationUpdate(!locationUpdate)
            })
            
        }else {
            console.log("no hay geolacation")
        }
    }

    return (
        <div style={{width:"100%", height: '350px'}}>
            
        <div ref={mapContainer} className="map-container" />

        </div>
    )
}
