package main

import (
	"api_gateway/handler"
	"api_gateway/router"

	_ "api_gateway/docs"

	echoSwagger "github.com/swaggo/echo-swagger"
)

// @title API Gateway
// @version 1.0
// @description This a sample API Gateway server.
// @title API Gateway

// @host localhost:8384
// @BasePath /api

// @schemes http https
// @produce application/json
// @consumes application/json

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

func main() {
	r := router.New()

	r.GET("/swagger/*", echoSwagger.WrapHandler)

	v1 := r.Group("/api")

	handler.Register(v1)

	r.Logger.Fatal(r.Start(":8384"))

}
