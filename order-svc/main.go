package main

import (
	"context"
	"log"
	"net"

	"order-svc/pb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	log.Println("Starting server...")
	if err := ServerStart(); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func ServerStart() error {
	// Register the service with the server
	orderServer := NewOrderService()

	grpcServer := grpc.NewServer()

	pb.RegisterOrderServiceServer(grpcServer, orderServer)
	reflection.Register(grpcServer)

	listen, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
		return err
	}

	log.Println("Server still running...")

	if err := grpcServer.Serve(listen); err != nil {
		log.Fatalf("Failed to start server: %v", err)
		return err
	}
	log.Printf("Server listening at %v", listen.Addr())
	return nil
}

type OrderService struct {
	pb.OrderServiceServer
}

func NewOrderService() *OrderService {
	return &OrderService{}
}

func (s *OrderService) CreateOrder(ctx context.Context, req *pb.CreateOrderRequest) (*pb.CreateOrderResponse, error) {
	return &pb.CreateOrderResponse{
		OrderId: "1234",
		GenericResponse: &pb.GenericResponse{
			StatusCode: 200,
			Message:    "Order created successfully",
		},
	}, nil
}
