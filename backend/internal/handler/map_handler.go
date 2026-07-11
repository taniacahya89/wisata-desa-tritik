package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// MapHandler handles map/location requests
type MapHandler struct{}

func NewMapHandler() *MapHandler {
	return &MapHandler{}
}

// GetMap returns location/map data
func (h *MapHandler) GetMap(c *gin.Context) {
	response.Success(c, "Map data retrieved", data.MapInfo)
}
