var keystone = require('keystone');
var Types = keystone.Field.Types;

var StudentScore = new keystone.List('StudentScore', {
	label: 'Student Score',
	autokey: { from: 'studentName', path: 'key', unique: true },
	map: { studentName: 'key' },
});

StudentScore.add({
	studentName: { type: Types.Name, required: true, initial: true },
	studentImagePath: { type: String },
	courseOpted: {
		type: Types.Select,
		options: 'Tenth, Ninth, Eighth, Seventh, Sixth, Fifth, Grammar',
		initial: true,
	},
	school: { type: String, required: true, initial: true },
	examination: { type: String, required: true, initial: true },
	percentScored: { type: Types.Number, required: true, initial: true },
	lastPercent: { type: Types.Number },
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
	displayInCategories: {
		type: Types.Select,
		numeric: true,
		options: [
			{ label: 'Top Scorer', value: 1 },
			{ label: 'Subject Highest', value: 2 },
			{ label: 'Growth Achieved', value: 3 },
		],
		index: true,
	},
});

StudentScore.schema.virtual('Subject.details').get(function () {
	return (
		this.subjects.english
		&& this.subjects.hindi
		&& this.subjects.marathi
		&& this.subjects.algebra
		&& this.subjects.geometry
		&& this.subjects.science1
		&& this.subjects.science2
		&& this.subjects.history
		&& this.subjects.geography
	);
});
StudentScore.defaultColumns = 'studentName,std,school,diplayInCategories';
StudentScore.register();
