import User from '../models/usersModel.js'
import asyncHandler from 'express-async-handler'

// @desc     Auth user & get token
// @route    POST /api/users
// @access   Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

export {
    authUser
}