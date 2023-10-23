export type ErrorMessage = {
  path: string
  message: string
}
type ErrorResponse = {
  status: boolean
  message: string
  errorMessages: ErrorMessage[]
  stack?: string
}
export default ErrorResponse
