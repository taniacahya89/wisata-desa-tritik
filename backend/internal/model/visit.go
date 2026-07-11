package model

// Visit holds visitor information
type Visit struct {
	OperatingHours []OperatingHour `json:"operatingHours"`
	Facilities     []Facility      `json:"facilities"`
	Regulations    []string        `json:"regulations"`
	FAQ            []FAQItem       `json:"faq"`
}

// OperatingHour represents the schedule
type OperatingHour struct {
	Days     string `json:"days"`
	Hours    string `json:"hours"`
	IsClosed bool   `json:"isClosed"`
}

// Facility represents a facility at the site
type Facility struct {
	Icon string `json:"icon"`
	Name string `json:"name"`
}

// FAQItem represents a frequently asked question
type FAQItem struct {
	Question string `json:"question"`
	Answer   string `json:"answer"`
}
