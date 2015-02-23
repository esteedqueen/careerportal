Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loading",
	waitOn: function () { Meteor.subscribe('jobs');},
	routeControllerNameConverter: "camelCase",

});

Router.route('/', {
	name: 'home'
});

Router.route('/jobs/:_id', {
	name: 'jobsPage',
	data: function () { 
		return Jobs.findOne(this.params._id); 
	}
});

Router.route('/postjob', {
	name: 'postJob'
})
