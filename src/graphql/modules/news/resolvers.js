import News from '../../../models/News';
import User from '../../../models/User';

export default {
    News: {
        author: async (news) => await User.findById(news.author)
    },
    Query: {
        news: async () => await News.find(),
        newsById: async (_, { id }) => await News.findById(id)
    },
    Mutation: {
        createNews: async (_, { data }) => await News.create(data),
        updateNews: async (_, { id, data }) => await News.findOneAndUpdate(id, data, { new: true }),
        deleteNews: async (_, { id }) => !!(await News.findOneAndDelete(id)),
        deleteNewsForAuthor: async (_, { author }) => !!(await News.where(author).findOneAndDelete()),
    }
}