type SuccessResponse<T> = {
  success: boolean
  statusCode: number
  message: string
  data?: T
  meta?: {
    page: number
    limit: number
  }
}
export default SuccessResponse
