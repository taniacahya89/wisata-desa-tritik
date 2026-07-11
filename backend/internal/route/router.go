package route

import (
	"github.com/gin-gonic/gin"
	"github.com/nganjuk-tritik/backend/internal/config"
	"github.com/nganjuk-tritik/backend/internal/handler"
	"github.com/nganjuk-tritik/backend/internal/middleware"
)

// Setup initializes the Gin router with all routes
func Setup(cfg *config.Config) *gin.Engine {
	if cfg.Environment == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.Default()

	// Middleware
	r.Use(middleware.CORS(cfg))

	// Initialize handlers
	homeHandler := handler.NewHomeHandler()
	newsHandler := handler.NewNewsHandler()
	galleryHandler := handler.NewGalleryHandler()
	umkmHandler := handler.NewUmkmHandler()
	siteHandler := handler.NewSiteHandler()
	visitHandler := handler.NewVisitHandler()
	managerHandler := handler.NewManagerHandler()
	mapHandler := handler.NewMapHandler()

	// API routes (GET only)
	api := r.Group("/api")
	{
		api.GET("/home", homeHandler.GetHome)
		api.GET("/news", newsHandler.GetNews)
		api.GET("/gallery", galleryHandler.GetGallery)
		api.GET("/umkm", umkmHandler.GetUmkm)
		api.GET("/site", siteHandler.GetSite)
		api.GET("/visit", visitHandler.GetVisit)
		api.GET("/manager", managerHandler.GetManager)
		api.GET("/map", mapHandler.GetMap)
	}

	return r
}
