import User from "../../../models/User";

export default {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),
        updateUser: (_, { id, data}) => User.findByIdAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findOneAndDelete(id);
                return !!deleted;
        }
    },
}