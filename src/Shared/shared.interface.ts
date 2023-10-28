/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface QueryOption<T> {
  page?: number
  limit?: number
  sortOrder?: 'asc' | 'desc'
  sortBy?: string
  minPrice?: number
  maxPrice?: number
  location?: string
  searchTerm?: T
}
