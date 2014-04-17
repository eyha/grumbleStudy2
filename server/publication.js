/**
 * Grumble Button publication rules
 */

/**
 * Publish pagination limited number of issues
 */


Meteor.publish('newIssues', function(limit) {
	return Issues.find({}, {sort: {submitted: -1}, limit: limit});
	
});

Meteor.publish('singleIssue', function(id) {
	return id && Issues.find(id);
});


/*
Meteor.publish('issues', function() {
	return Issues.find();
	
});*/

/**
 * Publish comment data for the relevant issue
 */
Meteor.publish('comments', function(issueId) {
	return Comments.find({issueId: issueId});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId});
});

Meteor.publish('subscribed', function() {
	return Subscribed.find();
});

Meteor.publish('trial', function() {
	return Trial.find();
});



