import { Schema } from 'mongoose'

/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Locations =
  | 'Dhaka'
  | 'Chattogram'
  | 'Barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Comilla'
  | 'Rangpur'
  | 'Mymensingh'
export type Breeds =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej'
interface ICow {
  name: string
  age: number
  price: number
  location: Locations
  breed: Breeds
  weight: number
  label: 'for sale' | 'sold out'
  category: 'Dairy' | 'Beef' | 'Dual Purpose'
  seller: Schema.Types.ObjectId
}
export type SearchTerm = 'location' | 'breed' | 'category'
export default ICow
