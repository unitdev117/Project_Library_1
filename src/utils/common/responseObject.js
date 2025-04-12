export const internalErrorResponse = (error) => {
  return {
    success: false,
    err: error,
    data: {},
    message: 'Internal server error',
  }
}

export const customErrorResponse = (error) => {
  if (!error.message && !error.explanation) {
    return internalErrorResponse(error)
  }
  return {
    success: false,
    err: error.explanation,
    data: {},
    message: 'error.message',
  }
}

export const successResponse = (data, message) => {
  return {
    success: true,
    err: {},
    data,
    message,
  }
}
