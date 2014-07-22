/**
 * map URLs to specific templates in the {{renderPage}} helper
 */
Router.configure({

    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('issues', {path:'/'});
    this.route('issues', {path:'/issues', template: 'issues'});
    this.route('closedIssues', {path:'/closedIssues', template: 'closedIssues'});
    this.route('subscribedKeywords', {path:'/subscribedKeywords', template: 'subscribedKeywords'});
    this.route('report', {path:'/sayit'});
    this.route('studyInfo', {path:'/studyInfoSheet', template:'studyInfo'});
    
    //Going to need updating to load the notifications up
    this.route('notifications', {
	path:'/notifications', template:'notifications'
    });
    
    this.route('issuePage', {
        path:'/issues/:_id',
        data: function() { Session.set('currentIssueId', this.params._id); }
    });

    this.route('closedIssuePage', {

        path:'/closedIssues/:_id',
        data: function() { Session.set('currentClosedIssueId', this.params._id); }
    });
});

var requireLogin = function() {
    if ( Meteor.user()) 
        this.render(this.params);
    else if (Meteor.loggingIn())
        this.render('loading');
    else
        this.render('accessDenied');


        //this.stop();
        //pause();

}

/*var clear = function() {
    clearErrors();
    this.render(this.params);

    //this.stop();
    pause();

} */

Router.onBeforeAction(requireLogin, {only: 'report'});
//Router.onBeforeAction(clear);