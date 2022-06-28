import { Blog } from './blog.js';



class BlogManager {
    constructor() {
        this.blogs = new Map();
    }

    add(id, topic, description) {
        const blog = new Blog(id, topic, description);
        this.blogs.set(id, blog);
    }


    get(id) {
        if (!this.blogs.has(id)) {
            console.log("Wrong id")
            return;
        }
        const blog = this.blogs.get(id);
        return blog.blog;

    }


    update(id , obj){
    	const blog = this.blog.get(id);
    	if(!blog){
    		console.log("Wrong id");
    	}

    	Object.keys(obj).forEach(key=>{
    		const result = blog.update(key , obj[key]);
    		if(!result){
    			console.log("wrong id");
    		}

    	})
    }






}


// const bl = new Blog(1, "h w" , "hello world");

// console.log(bl.blog.description);


const bm = new BlogManager();
bm.addBlog(1, "h w", "hello world");
bm.addBlog(2, "s b", "surajit Barman");

console.log(bm.getBlog(1));

// console.log(bm.blogs);



{



	1:{
		id:1,
		topic:"...",
		description:"...."
	}
}