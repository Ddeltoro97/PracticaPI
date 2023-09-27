const createPostHandler = (req, res) =>{
    res.status(200).send("Crear un post");
};

module.exports = {createPostHandler};