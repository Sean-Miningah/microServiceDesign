package handler

import (
	"api_gateway/router/middleware"
	"api_gateway/utils"

	"github.com/labstack/echo/v4"
)

func Register(v1 *echo.Group) {
	jwtMiddleware := middleware.JWT(utils.JWTSecret)

	guestUsers := v1.Group("/users")
	guestUsers.POST("", SignUp)
	guestUsers.POST("/login", Login)

	user := v1.Group("/user", jwtMiddleware)
	user.GET("", CurrentUser)
	user.GET("", UpdateUser)
}
