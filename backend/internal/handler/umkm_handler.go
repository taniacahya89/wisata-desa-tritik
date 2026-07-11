package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// UmkmHandler handles UMKM requests
type UmkmHandler struct{}

func NewUmkmHandler() *UmkmHandler {
	return &UmkmHandler{}
}

// GetUmkm returns all UMKM listings
func (h *UmkmHandler) GetUmkm(c *gin.Context) {
	response.Success(c, "UMKM retrieved", data.UmkmList)
}
