export class Blog{
	constructor(id,topic, description){

		this.blog={
			id: id,
			topic:topic,
			description: description
		}
	}


	get(id){
		return this.blog
	}

	update(field , content){

		if(!this.blog[field]){
			console.log(field+" is not an field of blog");
			return false;
		}
		this.blog[field] = content;
		return true;
	}


}