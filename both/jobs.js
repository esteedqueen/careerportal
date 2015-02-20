Jobs = new Mongo.Collection('jobs');

Jobs.attachSchema(new SimpleSchema({
	jobtitle: {
		type: String,
		label: "Job Title",
		max: 200
	},
	jobdescription: {
		type: String,
		label: "Job Description",
		autoform: {
			rows: 10
		}
	},
	minrequirements: {
		type: String,
		label: "Minimum Requirements",
		autoform: {
			options: [{
				label: "High School",
				value: "highschool"
			}, {
				label: "Diploma, Polytechnic",
				value: "diploma"
			}, {
				label: "BSc, BA",
				value: "bsc"
			}, {
				label: "MSc, MBA",
				value: "msc"
			}]
		}

	},
	experience: {
		type: String,
		label: "Years of Experience",
		autoform: {
			options: [{
				label: "< 1yrs",
				value: "< 1yrs"
			}, {
				label: "1 - 3yrs",
				value: "1 - 3yrs"
			}, {
				label: "3 - 5yrs",
				value: "3 - 5yrs"
			}, {
				label: "above 5 yrs",
				value: "Above 5years"
			}]
		}
	},
	deadline: {
		type: Date,
		label: "Application Deadline"
	}




}));