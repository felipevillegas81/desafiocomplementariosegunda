import { Router } from "express"
import usersDao from "../daos/dbManager/users.dao.js"
import { hashPassword } from "../utils.js"

const router = Router()

router.get('/')