package model

// News represents a news article
type News struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Excerpt   string `json:"excerpt"`
	Date      string `json:"date"`
	Category  string `json:"category"`
	Thumbnail string `json:"thumbnail"`
}
