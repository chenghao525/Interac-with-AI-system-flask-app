from .constants import *


def create_api_response(response_body, response_code):
    return {'body': response_body, 'code': response_code}


def create_failure_response():
    return {'body': 'invalid request', 'code': API_CODE.FAILURE}


def create_failure_response_token():
    return {'body': 'invalid token', 'code': API_CODE.FAILURE}


def create_error_response():
    return {'body': 'internal error', 'code': API_CODE.ERROR}


def create_no_privileges_response():
    return {'body': 'No Privileges Error', 'code': API_CODE.NOPRIVILEGES}


def create_verify_time_error_response():
    return {'body': 'User expire, please login again!', 'code': API_CODE.REDIRECT}


def create_verify_user_error_response():
    return {'body': 'User is not found, please login again!', 'code': API_CODE.REDIRECT}


def create_verify_user_ok_response():
    return {'body': 'User is found!', 'code': API_CODE.OK}

