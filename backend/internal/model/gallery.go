package model

// GalleryItem represents a gallery image
type GalleryItem struct {
	ID       string `json:"id"`
	Src      string `json:"src"`
	Alt      string `json:"alt"`
	Category string `json:"category"`
}
