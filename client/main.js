Template.registerHelper('jobs',function(){

  return Jobs.find().fetch();  

});

UI.registerHelper('summarizeDesc', function(jobDescription, maxChar){
	if (jobDescription.length > maxChar) {
		return jobDescription.substring(0, maxChar) + '...';
	}
		return jobDescription;

});

// Template.jobsForm.events({
//   'submit form': function (e, t) {
//     e.preventDefault();

//     $('#newjobModal').modal('hide');

//   },



// });