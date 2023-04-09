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
        createNews: async (_, { data }) => { 
            const user = await User.findById(data.author)
            if(!user){
                throw new Error('Error: Author not exists')
            }
            return await News.create(data)
        },
        updateNews: async (_, { id, data }) => {
            const news = await News.findById(id)
            if(!news){
                throw new Error('Error: News not exists')
            }
            const user = await User.findById(data.author)
            if(!user){
                throw new Error('Error: Author not exists')
            }
            await News.findOneAndUpdate(id, data, { new: true })
        },
        deleteNews: async (_, { id }) => {
            const news = await News.findById(id)
            if(!news){
                throw new Error('Error: News not exists')
            }
            !!(await News.findOneAndDelete(id))
        },
        deleteNewsForAuthor: async (_, { author }) => {
            const user = await User.findById(author)
            if(!user){
                throw new Error('Error: Author not exists')
            }
            !!(await News.where(author).findOneAndDelete())
        },
    }
}