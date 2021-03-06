import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    title:  String,
    Message: String,
    creator: String,
    tags : [String],
    selectedFile: String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type: Date,
        default : new Data()
    },
});
const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;