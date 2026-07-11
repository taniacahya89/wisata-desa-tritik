package model

// Umkm represents a local business
type Umkm struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Contact     string `json:"contact"`
	Location    string `json:"location"`
	Category    string `json:"category"`
}
