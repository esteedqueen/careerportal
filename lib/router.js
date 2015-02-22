Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loading",
	waitOn: function () { Meteor.subscribe('jobs');},
	routeControllerNameConverter: "camelCase",

});

Router.route('/', {name: 'home'});