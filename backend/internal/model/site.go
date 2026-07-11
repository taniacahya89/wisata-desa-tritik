package model

// Site represents the archaeological site information
type Site struct {
	Title       string          `json:"title"`
	Description string          `json:"description"`
	History     string          `json:"history"`
	Timeline    []TimelineEvent `json:"timeline"`
}

// TimelineEvent represents a historical event
type TimelineEvent struct {
	Year        string `json:"year"`
	Title       string `json:"title"`
	Description string `json:"description"`
}
