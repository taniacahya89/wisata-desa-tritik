package middleware

import (
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/config"
)

// CORS returns a CORS middleware configured with allowed origins
func CORS(cfg *config.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		origins := strings.Split(cfg.CORSOrigins, ",")
		origin := c.GetHeader("Origin")

		for _, allowed := range origins {
			if strings.TrimSpace(allowed) == origin || strings.TrimSpace(allowed) == "*" {
				c.Header("Access-Control-Allow-Origin", origin)
				break
			}
		}

		c.Header("Access-Control-Allow-Methods", "GET, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Type")
		c.Header("Access-Control-Max-Age", "86400")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
