var LocalStrategy    = require('passport-local').Strategy;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// load up the user model
var User       = require('../app/models/user');

// load the auth variables
var configAuth = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    passport.use(new LinkedInStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.linkedinAuth.clientID,
        clientSecret    : configAuth.linkedinAuth.clientSecret,
        callbackURL     : configAuth.linkedinAuth.callbackURL,
        profileFields   : ['id', 'first-name','email-address', 'location', 'industry', 'positions','picture-url', 'num-connections']
    },

    function(token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {

            User.findOne({ 'linkedin.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    console.log(profile);
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User();

                    newUser.linkedin.id    = profile.id;                  
                    newUser.linkedin.name  = profile._json.firstName
                    newUser.linkedin.email = profile._json.emailAddress
                    newUser.linkedin.company = profile._json.positions.values[0].company.name
                    newUser.linkedin.industry = profile._json.industry;    
                    newUser.linkedin.location = profile._json.location.name;
                    newUser.linkedin.picture = profile._json.pictureUrl;

                    // save our user to the database//
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));

};
