Meteor.subscribe('jobs');

Template.registerHelper('jobs',function(){

  return Jobs.find().fetch();

})

Template.jobsForm.events({
  'submit form': function (e, t) {
    e.preventDefault();

    // jobs = {
    //   title: $('#inputJobTitle').val(),
    //   description: $('#inputJobDesc').val(),
    //   salary: $('#inputSalary').val(),
    //   qualification: $('#inputQualification').val()

    // }

    // Jobs.insert(jobs);

    $('#newjobModal').modal('hide');

  },



});