const Blog = require('../model/blog');



async function getAll(req, res) {
    try {
        let blogs = await Blog.getBlogs();

        if (!blogs || blogs.length == 0) {
            throw new Error('no blogs available');
        };


        res.json(blogs)
    } catch (err) {
    	res.status(500).json({ message: err.message })
    }

}



async function get(req, res) {
    try {
    	if(!req.params.id){
    		throw new Error('Please provide blog id');
    	}
        let blog = await Blog.getBlog(req.params.id);

        if (!blog) {
            throw new Error('wrong blog id');
        };


        res.json(blog)
    } catch (err) {
    	res.status(500).json({ message: err.message })
    }

}



async function create(req, res) {
    try {
    	if(!req.body){
    		throw new Error('no blog data present');
    	}
    	const blog = await Blog.createBlog(req.body);
    	

        if (!blog) {
            throw new Error('Blog not created');
        };


        res.json(blog);
    } catch (err) {
    	res.status(500).json({ message: err.message })
    }

}


async function update(req, res) {
    try {
    	if(!req.body){
    		throw new Error('no blog data present');
    	}
    	const blog = await Blog.updateBlog(req.params.id , req.body);
    	

        if (!blog) {
            throw new Error('Blog not created');
        };


        res.json(blog);
    } catch (err) {
    	res.status(500).json({ message: err.message })
    }

}


 async function deleteBlog(req, res){

 	try{
 		const id = req.params.id;
    	const blog = await blog.deleteBlog(id);
    	res.json({
	        message: `The post #${id} has been deleted`
	    })
 	}catch(err){
 		res.status(500).json({ message: err.message })
 	}
}








module.exports = {
	getAll,
	get,
	create,
	update,
	deleteBlog
};