import ICow from './cow.interface'
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
export const cowServices = { createCow, getCow, updateCow, deleteCow }
