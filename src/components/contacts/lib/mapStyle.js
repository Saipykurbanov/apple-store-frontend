const customMapStyle = [
    {
        "tags": {
            "any": ["road"]
        },
        "elements": "geometry.stroke",
        "stylers": {
            "color": "#1A1A1A"  // Здесь указывается новый цвет дорог в HEX формате
        }
    },
    {
        "tags": {
            "any": ["road"]
        },
        "elements": "geometry.fill",
        "stylers": {
            "color": "#505f7c"  // Цвет заливки дорог
        }
    },
    {
        "tags": {
            "any": [
                "urban_area",
                "locality"
            ]
        },
        "elements": "geometry",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "terrain",
                "bathymetry",
                "landscape"
            ],
            "none": "land"
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "park",
                "cemetery"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "vegetation"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "industrial",
                "construction_site",
                "medical",
                "sports_ground",
                "beach"
            ]
        },
        "types": "polygon",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": "transit",
            "none": [
                "transit_location",
                "transit_line",
                "transit_schema",
                "is_unclassified_transit"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": "urban_area",
            "none": [
                "residential",
                "industrial",
                "cemetery",
                "park",
                "medical",
                "sports_ground",
                "beach",
                "construction_site"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "food_and_drink",
                "shopping",
                "commercial_services"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "traffic_light"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "entrance"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "road"
            ],
            "none": [
                "road_1",
                "road_2",
                "road_3",
                "road_4",
                "road_5",
                "road_6",
                "road_7"
            ]
        },
        "elements": "label.icon",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "tags": {
            "any": [
                "road_construction",
                "road_minor",
                "road_unclassified",
                "path",
                "road_limited"
            ]
        },
        "stylers": {
            "visibility": "off"
        }
    }
]

export default customMapStyle