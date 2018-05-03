var keystone = require('keystone');
var Types = keystone.Field.Types;

var StudentScore = new keystone.List('StudentScore', {
	label: 'Student Score',
	autokey: { from: 'studentName', path: 'key', unique: true },
	map: { studentName: 'key' },
});

StudentScore.add({
	studentName: { type: Types.Name, required: true, initial: true },
	courses: {
		type: Types.Select,
		options: 'Tenth, Ninth, Eighth, Seventh, Sixth, Fifth, Grammar',
		initial: true,
	},
	school: { type: String, required: true, initial: true },
	examination: { type: String, required: true, initial: true },
	percentScored: { type: Types.Number, required: true, initial: true },
	studentImagePath: { type: String },
	lastPercent: { type: Types.Number },
	currentPercent: { type: Types.Number },
	studentRank: { type: Types.Number },
	scoredIn: {
		english: { type: Types.Number },
		hindi: { type: Types.Number },
		marathi: { type: Types.Number },
		algebra: { type: Types.Number },
		geometry: { type: Types.Number },
		science1: { type: Types.Number },
		science2: { type: Types.Number },
		history: { type: Types.Number },
		geography: { type: Types.Number },
	},
	diplayInCategories: {
		type: Types.Relationship,
		ref: 'DisplayCategory',
		many: true,
	},
	createdAt: { type: Date, default: Date.now },
});

StudentScore.schema.virtual('Subject.details').get(function () {
	return this.subjects.english && this.subjects.hindi && this.subjects.marathi && this.subjects.algebra
	&& this.subjects.geometry && this.subjects.science1 && this.subjects.science2 && this.subjects.history
	&& this.subjects.geography;
});
StudentScore.defaultSort = '-createdAt';
StudentScore.defaultColumns = 'studentName,std,school,diplayInCategories';
StudentScore.register();
