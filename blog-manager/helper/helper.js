// const fs = require('fs');
const fsPromises = require('fs').promises;


function createId(blogs) {
    if (blogs.length > 0) {
        return blogs[blogs.length - 1].id + 1
    } else {
        return 1
    }
}

async function write(filename, content) {

    try{
        const blog = await fsPromises.writeFile(__dirname+'/'+filename, JSON.stringify(content))
        .catch((err) => console.error('Failed to write file', err));
        return blog;
    }
    catch(error){
        console.log(error);
        return null;
    }
    
}
module.exports = {
    createId,
    write
}