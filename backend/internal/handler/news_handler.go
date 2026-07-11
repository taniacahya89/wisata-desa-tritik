package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/data"
	"github.com/nganjuk-tritik/backend/pkg/response"
)

// NewsHandler handles news requests
type NewsHandler struct{}

func NewNewsHandler() *NewsHandler {
	return &NewsHandler{}
}

// GetNews returns all news articles
func (h *NewsHandler) GetNews(c *gin.Context) {
	response.Success(c, "News retrieved", data.News)
}
