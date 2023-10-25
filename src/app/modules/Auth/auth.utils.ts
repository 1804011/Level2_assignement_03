import * as bcrypt from 'bcrypt'
import config from '../../../config'
const hashPassword = async (password: string) => {
  const salt_round = Number(config.salt_round)
  const hashedPassword = await bcrypt.hash(password, salt_round)
  return hashedPassword
}
export const authUtilities = { hashPassword }
