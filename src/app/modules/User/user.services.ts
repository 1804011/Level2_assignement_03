import IUser from './user.interface'
import User from './user.model'

const createUser = async (user: IUser): Promise<IUser> => {
  const result = await User.create(user)
  return result
}
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({}).select('-password')
  return result
}
const getUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id).select('-password')
  return result
}
const updateUser = async (
  id: string,
  updateData: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate(
    {
      _id: id,
    },
    updateData,
    { new: true },
  )
  return result
}
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result
}
export const userServices = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
}
