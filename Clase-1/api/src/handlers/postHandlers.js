const {createPostDb} = require("../controllers/postController");


const createPostHandler = async (req, res) =>{
    const {title, body, userId} = req.body;

    try {
        const newPost = await createPostDb(title, body, userId);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {createPostHandler};