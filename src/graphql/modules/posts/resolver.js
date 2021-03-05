import Post from "../../../models/Post";

export default {
    Query: {
        posts: async () => await Post.find(),
        post: async (_, { id }) => await Post.findById(id),
    },
    Mutation: {
        createPost: (_, { data }) => Post.create(data),
        updatePost: (_, { id, data}) => Post.findByIdAndUpdate(id, data, { new: true }),
        deletePost: async (_, { id }) => {
            const deleted = await Post.findOneAndDelete(id);
            return !!deleted;
        }
    },
}