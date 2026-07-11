package model

// Manager represents a team member
type Manager struct {
	Name  string `json:"name"`
	Role  string `json:"role"`
	Image string `json:"image"`
}

// Partner represents a partner organization
type Partner struct {
	Name string `json:"name"`
	Logo string `json:"logo"`
}

// ManagerData holds all manager page data
type ManagerData struct {
	Managers []Manager `json:"managers"`
	Partners []Partner `json:"partners"`
}
