
class Genre{
	constructor(name) {
		if (!name) {
		    throw new Error('Field Name is required');
		}
		this.name = name;
	};
	getData() {
		return `${this.name[0].toUpperCase()}${this.name[this.name.length-1].toUpperCase()}`;
	}
}
