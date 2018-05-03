var keystone = require('keystone');

var DisplayCategory = new keystone.List('DisplayCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

DisplayCategory.add({
	name: { type: String, required: true },
});

DisplayCategory.register();
