const {Post} = require("../db");

const createPostDb = async(body, title, userId) =>{
    const post = await Post.create({body, title});

    await post.setUser(userId);
    
    return post;
}

module.exports = {
    createPostDb,
}