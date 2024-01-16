from concurrent import futures
import logging

import grpc 
from pb import authentication_pb2_grpc, authentication_pb2


class AuthenticationService(authentication_pb2_grpc.AuthenticationServiceServicer):
  def Login(self, request, context):
    return authentication_pb2.LoginResponse()

  def SignUp(self, request, context):
    return authentication_pb2.SignUpResponse()

  def Logout(self, request, context):
    return authentication_pb2.LogoutResponse()

def serve(): 
  port = 50055 
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  authentication_pb2_grpc.add_AuthenticationServiceServicer_to_server(AuthenticationService(), server)
  server.add_insecure_port("[::]:" + port)
  server.start()
  print("Server started, listening on " + port)
  server.wait_for_termination()

if __name__ == "__main__":
  logging.basicConfig()
  serve()