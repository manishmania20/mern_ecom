import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Bryan',
        email: 'bryan_adm@example.com',
        password: bcrypt.hashSync(123456, 10),
        isAdmin: true
    },
    {
        name: 'Gary',
        email: 'gary@example.com',
        password: bcrypt.hashSync(123456, 10)
    },
    {
        name: 'James',
        email: 'james@example.com',
        password: bcrypt.hashSync(123456, 10)
    },
]

export default users