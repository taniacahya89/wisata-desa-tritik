package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// VisitHandler handles visit information requests
type VisitHandler struct{}

func NewVisitHandler() *VisitHandler {
	return &VisitHandler{}
}

// GetVisit returns visitor information
func (h *VisitHandler) GetVisit(c *gin.Context) {
	response.Success(c, "Visit data retrieved", data.VisitData)
}
