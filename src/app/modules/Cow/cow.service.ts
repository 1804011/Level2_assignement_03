import { QueryOption } from '../../../Shared/shared.interface'
import ICow, { SearchTerm } from './cow.interface'
import Cow from './cow.model'

const createCow = async (cow: ICow): Promise<ICow> => {
  const result = await Cow.create(cow)
  return result
}
const getCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id)
  return result
}
const updateCow = async (
  id: string,
  updateData: Partial<ICow>,
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate(
    { _id: id },
    {
      $set: updateData,
    },
    { new: true },
  )
  return result
}
const deleteCow = async (id: string) => {
  const result = await Cow.findOneAndDelete({ _id: id })
  return result
}
const getCows = async (queryOption: QueryOption<SearchTerm>) => {
  const {
    limit = 10,
    searchTerm,
    location,
    sortBy,
    sortOrder = 'asc',
    page = 1,
    minPrice,
    maxPrice,
  } = queryOption
  const filterOption = JSON.parse(
    JSON.stringify({
      location: location,
      price: (minPrice || maxPrice) && {
        $gte: minPrice,
        $lte: maxPrice,
      },
      $or: searchTerm
        ? [
            { location: { $regex: searchTerm, $options: 'i' } },
            { breed: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
          ]
        : undefined,
    }),
  )
  const sortString = sortBy
    ? `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
    : `${sortOrder === 'desc' ? 'createdAt' : '-createdAt'}`
  // console.log({ sortBy, filterOption, sortString })
  const result = await Cow.find(filterOption)
    .sort(sortString)
    .limit(page * limit)
    .skip((page - 1) * limit)

  return result
}
export const cowServices = { createCow, getCow, updateCow, deleteCow, getCows }
