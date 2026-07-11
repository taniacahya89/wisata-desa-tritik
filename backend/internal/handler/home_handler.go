package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// HomeHandler handles home page requests
type HomeHandler struct{}

func NewHomeHandler() *HomeHandler {
	return &HomeHandler{}
}

// GetHome returns homepage data
func (h *HomeHandler) GetHome(c *gin.Context) {
	response.Success(c, "Homepage data retrieved", data.Home)
}
