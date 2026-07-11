package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// ManagerHandler handles manager information requests
type ManagerHandler struct{}

func NewManagerHandler() *ManagerHandler {
	return &ManagerHandler{}
}

// GetManager returns manager/team information
func (h *ManagerHandler) GetManager(c *gin.Context) {
	response.Success(c, "Manager data retrieved", data.ManagerList)
}
