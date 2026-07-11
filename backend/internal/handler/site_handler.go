package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// SiteHandler handles site/archaeological requests
type SiteHandler struct{}

func NewSiteHandler() *SiteHandler {
	return &SiteHandler{}
}

// GetSite returns site information
func (h *SiteHandler) GetSite(c *gin.Context) {
	response.Success(c, "Site data retrieved", data.SiteData)
}
