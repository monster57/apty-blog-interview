const filename = '../data/blog.json'
let blogs = require(filename)
const helper = require('../helper/helper')
async function getBlogs() {

    try {
        if (blogs.length === 0) {
            throw new Error('no blogs available');

        }

        return blogs;

    } catch (error) {
        console.log(error);
    };

}


async function getBlog(id) {
    try {

        const blog = blogs.find(b => b.id == id);
        if (!blog) {
            throw new Error('wrong blog id');

        }

        return blog;

    } catch (error) {
        console.log(error);
    };
}


async function createBlog(data) {
    try {
        const newBlog = {
            id: helper.createId(blogs),
            topic: data.topic,
            description: data.description
        };

        blogs.push(newBlog);

        let blog = await helper.write(filename, blogs);
        return blog;

    } catch (error) {
        console.log(error);
    }

}




async function updateBlog(id, data) {
    try {
        const blog = blogs.find(b => b.id == id);
        if (!blog) {
            throw new Error('wrong blog id');

        }

        const index = blogs.findIndex(b => b.id == blog.id);
        blog.topic = data.topic || blog.topic;
        blog.description = data.description || blog.description;

        blogs[index] = blog;
        let data = await helper.write(filename, blogs)
        return data;



    } catch (error) {
        console.log(error);
    }


}

async function deleteBlog(id) {

    try {
        blogs = blogs.filter(b => b.id !== id);
        let data = await helper.write(filename, blogs)
        return data;
    } catch (error) {
        console.log(error);
    }

}



module.exports = {
    getBlog,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}