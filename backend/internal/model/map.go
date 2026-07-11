package model

// MapData holds location information
type MapData struct {
	Coordinates Coordinates `json:"coordinates"`
	Address     string      `json:"address"`
	Directions  []Direction `json:"directions"`
}

// Coordinates holds lat/lng
type Coordinates struct {
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
}

// Direction holds a direction instruction
type Direction struct {
	From        string `json:"from"`
	Description string `json:"description"`
}
