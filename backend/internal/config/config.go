package config

import "os"

// Config holds the application configuration
type Config struct {
	Port        string
	Environment string
	CORSOrigins string
}

// Load returns application configuration from environment variables
func Load() *Config {
	return &Config{
		Port:        getEnv("PORT", "8080"),
		Environment: getEnv("APP_ENV", "development"),
		CORSOrigins: getEnv("CORS_ORIGINS", "http://localhost:5173"),
	}
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
