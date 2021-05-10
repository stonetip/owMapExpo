const accessToken = "pk.eyJ1Ijoib253YXRlciIsImEiOiJja241Y2xnYmQwMnNyMndyaXBoMzUzZTAyIn0._x9srIOllR-H8cbNgsXa9A";

/*** Source and layer definitions tend to be verbose and clutter up other code. Since they don't change, stick them in their own space. Name layer definitions with "style" ***/

const mapDef = {
	container: "map",
	style: "mapbox://styles/onwater/ckn5cnhx20fgj17o2v1cqpgln/draft",
	zoom: 14,
	maxZoom: 18,
	center: [-111.9624391561786, 47.07432703753028]
}

const mapboxSatelliteSourceDef = {
	"url": "mapbox://mapbox.satellite",
	"type": "raster",
	"tileSize": 256
}

const hereSatelliteSourceDef = {
	"type": "raster",
	"tiles": [
		"https://1.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apiKey=5LWKv1QJmFGCoCj3sno_fAqjbpqynsPivPsDQ5F4poc",
		"https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apiKey=5LWKv1QJmFGCoCj3sno_fAqjbpqynsPivPsDQ5F4poc",
		"https://3.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apiKey=5LWKv1QJmFGCoCj3sno_fAqjbpqynsPivPsDQ5F4poc",
		"https://4.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apiKey=5LWKv1QJmFGCoCj3sno_fAqjbpqynsPivPsDQ5F4poc"
	],
	"tileSize": 256
}

const hillshadeDef = {
	"url": "mapbox://mapbox.terrain-rgb",
	"type": "raster-dem",
	"tileSize": 256
}

const allUSHydroDef = {
	"type": "vector",
	"tiles": [
		"https://atlas.mapture.com/tilesets/hydro/all_us_ls/{z}/{x}/{y}.pbf",
		"https://atlas-a.mapture.com/tilesets/hydro/all_us_ls/{z}/{x}/{y}.pbf",
		"https://atlas-b.mapture.com/tilesets/hydro/all_us_ls/{z}/{x}/{y}.pbf",
		"https://atlas-c.mapture.com/tilesets/hydro/all_us_ls/{z}/{x}/{y}.pbf"
	],
	"minzoom": 4,
	"maxzoom": 9
}

const allDissolvedHydroDef = {
	"type": "vector",
	"tiles": [
		"https://atlas.mapture.com/tilesets/hydro/all_us_ls_d/{z}/{x}/{y}.pbf",
		"https://atlas-a.mapture.com/tilesets/hydro/all_us_ls_d/{z}/{x}/{y}.pbf",
		"https://atlas-b.mapture.com/tilesets/hydro/all_us_ls_d/{z}/{x}/{y}.pbf",
		"https://atlas-c.mapture.com/tilesets/hydro/all_us_ls_d/{z}/{x}/{y}.pbf"
	],
	"minzoom": 4,
	"maxzoom": 9
}

const allHydroLabelsDef = {
	"type": "vector",
	"tiles": [
		"https://atlas.mapture.com/tilesets/hydro/all_us_labels/{z}/{x}/{y}.pbf",
		"https://atlas-a.mapture.com/tilesets/hydro/all_us_labels/{z}/{x}/{y}.pbf",
		"https://atlas-b.mapture.com/tilesets/hydro/all_us_labels/{z}/{x}/{y}.pbf",
		"https://atlas-c.mapture.com/tilesets/hydro/all_us_labels/{z}/{x}/{y}.pbf"
	],
	"minzoom": 1,
	"maxzoom": 8
}

const owPOIsDef = {
	"type": "vector",
	"tiles": [
		"https://atlas.mapture.com/tilesets/ow/pois/{z}/{x}/{y}.pbf", 
		"https://atlas-a.mapture.com/tilesets/ow/pois/{z}/{x}/{y}.pbf", 
		"https://atlas-b.mapture.com/tilesets/ow/pois/{z}/{x}/{y}.pbf", 
		"https://atlas-c.mapture.com/tilesets/ow/pois/{z}/{x}/{y}.pbf"
	],
	"minzoom": 4,
	"maxzoom": 7
}

const satelliteStyleDef = {
	"id": "satellite",
	"type": "raster",
	"source": "satellite",
	"minzoom": 0,
	"maxzoom": 22
}

const shadedReliefStyleDef = {
	"id": "shadedRelief",
	"type": "hillshade",
	"source": "shadedRelief",
	"minzoom": 0,
	"maxzoom": 22,
	"layout": {},
	"paint": {
		"hillshade-illumination-direction": 315,
		"hillshade-shadow-color": "hsl(326, 7%, 20%)",
		"hillshade-highlight-color": "hsl(326, 7%, 80%)",
		"hillshade-accent-color": "hsl(326, 56%, 60%)"
	}
}

// Note: This will only be needed if loading POIs from GeoJSON rather 
// than tiles.The tile server style.json file contains the same layer style
const poiStyleDef = {
	"id": "owpois",
	"type": "symbol",
	"source": "owpois",
	"source-layer": "owpois",
	"layout": {
		"icon_image": [
			"match",
			["get", "poi_type"],
			["Boat Ramp"],
			"iconBoatRamp",
			["Fly Shop"],
			"iconFlyShop",
			["Camp Site"],
			"iconCamping",
			["Fishing Lodge"],
			"iconLodge",
			["Bridge"],
			"iconBridge",
			["Restroom"],
			"iconRestroom",
			["Dam"],
			"iconDam",
			["Hazard"],
			"iconHazard",
			["Hotel"],
			"iconHotel",
			["Access Point"],
			"iconAccess",
			["Parking"],
			"iconParking",
			"iconMisc"
		],
		"icon-size": ["interpolate", ["linear"], ["zoom"], 6, 0, 16, 0.5],
		"symbol-sort-key": ["get", "priority"],
		"icon-allow-overlap": true
	},
	"paint": {
		"icon-opacity": [
			"interpolate",
			["linear"],
			["zoom"],
			6,
			0.25,
			10,
			1
		]
	}
}



const styleNames = {
	"basemap": "basemap",
	"shadedRelief": "shadedRelief",
	"satellite": "satellite",
	"shadedSatellite": "shadedSatellite"
}

const poiNames = {
	"boatramp": "Boat Ramp",
	"flyshop": "Fly Shop",
	"campsite": "Camp Site",
	"fishinglodge": "Fishing Lodge",
	"bridge": "Bridge",
	"restroom": "Restroom",
	"dam": "Dam",
	"hazard": "Hazard",
	"hotel": "Hotel",
	"accesspoint": "Access Point",
	"parking": "Parking"
}

const parcelsAvailableStatesURL = "https://atlas.mapture.com/tilesets/parcels_available_states.json";

export {
	accessToken,
	mapDef,
	mapboxSatelliteSourceDef,
	hereSatelliteSourceDef,
	hillshadeDef,
	allUSHydroDef,
	allDissolvedHydroDef,
	allHydroLabelsDef,
	satelliteStyleDef,
	shadedReliefStyleDef,
	owPOIsDef,
	poiStyleDef,
	styleNames,
	parcelsAvailableStatesURL,
	poiNames
}