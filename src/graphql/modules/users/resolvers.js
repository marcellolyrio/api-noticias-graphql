import User from '../../../models/User';
// import News from '../../../models/News';

export default {
    Query: {
        users: async () => await User.find({}),
        user: async (_, { id }) => await User.findById(id)
    },
    Mutation: {
        createUser: async (_, { data }) => {
            const user = await User.findOne({email: data.email})
            if(user){
                throw new Error(`Error: There is already a user with email ${data.email}`)
            }
            await User.create(data)
        },
        updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
    }
}