const User = require('../model/userSchema')

const userCltr = {}

userCltr.form = async (req, res) => {
    const body = req.body
    try {
        const user = new User(body)
        await user.save()
        res.json(user)
    } catch (e) {
        res.status(400).json(e)
}
}
module.exports = userCltr