from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GenericResponse(_message.Message):
    __slots__ = ("message", "code")
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    message: str
    code: int
    def __init__(self, message: _Optional[str] = ..., code: _Optional[int] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ("username", "password")
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    username: str
    password: str
    def __init__(self, username: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class LoginResponse(_message.Message):
    __slots__ = ("token", "response_info")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    RESPONSE_INFO_FIELD_NUMBER: _ClassVar[int]
    token: str
    response_info: GenericResponse
    def __init__(self, token: _Optional[str] = ..., response_info: _Optional[_Union[GenericResponse, _Mapping]] = ...) -> None: ...

class SignUpRequest(_message.Message):
    __slots__ = ("username", "password")
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    username: str
    password: str
    def __init__(self, username: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class SignUpResponse(_message.Message):
    __slots__ = ("token", "response_info")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    RESPONSE_INFO_FIELD_NUMBER: _ClassVar[int]
    token: str
    response_info: GenericResponse
    def __init__(self, token: _Optional[str] = ..., response_info: _Optional[_Union[GenericResponse, _Mapping]] = ...) -> None: ...

class LogoutResponse(_message.Message):
    __slots__ = ("response_info",)
    RESPONSE_INFO_FIELD_NUMBER: _ClassVar[int]
    response_info: GenericResponse
    def __init__(self, response_info: _Optional[_Union[GenericResponse, _Mapping]] = ...) -> None: ...
