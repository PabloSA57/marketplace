import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { WrappertMap } from './style';

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
export const Mapbox = ({formLat, formLng, from, LngLatClient, LngLatStore}: Prop) => {
    const mapContainer = useRef<any>(null);
    const map = useRef<any>(null);
    const [lng, setLng] = useState(-68.16014203613013);
    const [lat, setLat] = useState(-38.95622024618729);
    const [zoom, setZoom] = useState(3);
    const [locationUpdate, setlocationUpdate] = useState(false);
    const [markerLat, setMarkerLat] = useState(-26.798227134886616);
    const [markerLng, setMarkerLng] = useState(-65.26133808868300);

    const marker = useRef<any>(null);
    
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoicGFibG9zNTciLCJhIjoiY2w1ZnUyaDl1MTNtMjNqbnRwcWRtaDY2cCJ9.yhPZqGTzceXkygvQ_DWDAw";
        
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
                formLat(coordinates.lat);
                formLng(coordinates.lng);
            });
        }
        
    }, [locationUpdate])

        useEffect(() => {
            if(from === 'formcart'){
            map.current.on("load", () => {
                const lngLat= 
                    LngLatClient !== undefined 
                    && LngLatClient.length > 1 
                    ? LngLatClient 
                    : [markerLng, markerLat];
    
                marker?.current?.remove();
                formLat(markerLat)
                formLng(markerLng)
                    
                        if(LngLatClient && LngLatStore){
                            console.log('aqqqq', lngLat)
                            const market1 = new mapboxgl.Marker({
                                draggable: true
                                })
                                .setLngLat(lngLat as [number, number])
                                .addTo(map.current as any);
    
                                const  onDragEnd = () => {
                                    const lngLatget = market1.getLngLat();
                                    
                                    formLat(lngLatget.lat)
                                    formLng(lngLatget.lng)
                                    }
                                    market1.on('dragend', onDragEnd);

                                        
                        
                    }

                    const el = document.createElement('div');
                    const width = '30px';
                    const height = '25px';
                    el.className ='marker'
                    el.style.width = width
                    el.style.height = height;
                    el.style.borderRadius = '5px'
                    el.style.backgroundImage = 'url(https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
                    el.style.backgroundSize = '100%'
                    const market2 = new mapboxgl.Marker(el)
                        .setLngLat(LngLatStore as [number, number])
                        .addTo(map.current as any);

                    
            })}
        }, [])

        /*useEffect(() => {
            if('updateStore'){
                console.log(LngLatStore)
                map.current.on("load", () => { 
                    const market1 = new mapboxgl.Marker({
                        draggable: true
                        })
                        .setLngLat(LngLatStore as [number, number])
                        .addTo(map.current as any);

                        const  onDragEnd = () => {
                            const lngLat = market1.getLngLat();
                            
                            console.log(lngLat.lng, lngLat.lat)
                            formLat(lngLat.lat)
                            formLng(lngLat.lng)
                            }

                            market1.on('dragend', onDragEnd);
                })
            }
        }, [])*/

    /*const myLocation = () => {
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
    }*/

    return (
            <WrappertMap >
                <div ref={mapContainer} className="map-container" />
            </WrappertMap>
    )
}
