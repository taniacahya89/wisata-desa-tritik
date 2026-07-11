package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// GalleryHandler handles gallery requests
type GalleryHandler struct{}

func NewGalleryHandler() *GalleryHandler {
	return &GalleryHandler{}
}

// GetGallery returns all gallery items
func (h *GalleryHandler) GetGallery(c *gin.Context) {
	response.Success(c, "Gallery retrieved", data.Gallery)
}
