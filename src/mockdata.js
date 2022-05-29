import sha256 from 'sha256'

export default async function ({ sequelize }) {
    try {
        await sequelize.models.User.bulkCreate([
            {
                username: 'ali',
                password: sha256('olma'),
                user_img: 'ali.jpg',
            },
            {
                username: 'nosir',
                password: sha256('olma'),
                user_img: 'nosir.jpg',
            }
        ])
    } catch (error) {
        console.log('error name: ', error.name)
        console.log('error message: ', error.message)
    }
}