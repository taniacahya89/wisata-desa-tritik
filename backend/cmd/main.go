package main

import (
	"fmt"
	"log"

	"github.com/nganjuk-tritik/backend/internal/config"
	"github.com/nganjuk-tritik/backend/internal/route"
)

func main() {
	// Load configuration
	cfg := config.Load()

	// Setup router
	r := route.Setup(cfg)

	// Start server
	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("Server starting on %s (env: %s)", addr, cfg.Environment)

	if err := r.Run(addr); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
