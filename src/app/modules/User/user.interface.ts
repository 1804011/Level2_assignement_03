/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface IUser {
  phoneNumber: string
  role: 'seller' | 'buyer'
  password: string
  name: {
    firstName: string
    lastName: string
  }
  address: string
  budget: number
  income: number
}
export default IUser
