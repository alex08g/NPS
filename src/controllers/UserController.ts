import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '@models/User'

class UserController {
  async create (req: Request, res: Response) {
    const userRepository = getRepository(User)

    const { name, email } = req.body

    const user = userRepository.create({ name, email })
    await userRepository.save(user)

    res.json({ user })
  }
}

export default new UserController()
