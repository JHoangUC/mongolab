let myDatabase = function() {
	this.infoList = [];
}

myDatabase.prototype.getArraySize = function() {
	return this.infoList.length;
}

//add or modify.  Complete getAllObjects function.
myDatabase.prototype.getAllObjects = function() {
	return(this.infoList);
	}


myDatabase.prototype.getAllNames = function() {
	let names = [];
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i]) {
			names.push(this.infoList[i].name);
		}
	}
	return(names);
}

myDatabase.prototype.getObjectAtIndex = function(index) {
	if (index < 0 || index >= this.infoList.length)
		return (null);
	else {
		if (!this.infoList[index]) {
			return(null);
		} else {
			return(this.infoList[index]);
		}
	}
}

myDatabase.prototype.getObjectWithID = function(ident) {
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i] && ident == this.infoList[i].ident)
			return (this.infoList[i]);
	}
	return (null);
}

myDatabase.prototype.addObjectAtIndex = function(obj,index) {
	if (index < 0)
		return (null);
	if (index < this.infoList.length)
	{
		if (!this.infoList[index]) {
			this.infoList[index] = obj;
			return (obj);
		}
		else {
			return (null);
		}
	}
	else
		this.infoList[index] = obj;
	return (obj);
}


myDatabase.prototype.addObject = function(obj) {
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i] && obj.username == this.infoList[i].username)
			return (null);
	}
	this.infoList.push(obj);
	return ({redirect:"/"});
}




myDatabase.prototype.changeObjectAtIndex = function(obj,index) {
	if (index < 0 || index >= this.infoList.length)
	if (!this.infoList[index])
		return (null);
	this.infoList[index] = obj;
	return (obj);
}

//add or modify.  Complete changeObject function.
myDatabase.prototype.changeObject = function(obj) {
	for(var i=0;i<this.infoList.length;i++){
		if(obj.ident == this.infoList[i].ident){
			this.infoList[i].name = obj.name;
			return(obj);
		}
	}
	return (null);
}

myDatabase.prototype.deleteObjectAtIndex = function(index) {
	if (index < 0 || index >= this.infoList.length) {
		return(null);
	} else {
		if (!this.infoList[index]) {
			return(null);
		} else {
			let obj = this.infoList[index];
			this.infoList[index] = undefined;
			return(obj);
		}
	}
}


//add or modify.  Complete deleteObjectWithID function.
myDatabase.prototype.deleteObjectWithID = function(ident) {
	for(var i=0;i<this.infoList.length;i++){
	if(this.infoList[i].ident == ident){
		this.infoList[i].ident = undefined;
		this.infoList[i].name = undefined;
		return(ident);
	}
}
	return (null);
}


module.exports = myDatabase;
