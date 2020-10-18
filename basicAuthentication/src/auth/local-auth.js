const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const User = require('../models/user');

// Saves user session with passport when "local-signup" strategy has been executed successfully.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Retrieves user session data and validate it with passport.
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});



/** Name signup method (could be named different than 'local-signup') 
 *  and use the Strategy to authenticate user.
 */ 
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true  // Allows reading request in the next callback (as 'req' argument)
}, async (req, userEmail, password, done) => {
    const newUser = new User();
    newUser.email = userEmail;
    newUser.password = newUser.encryptPassword(password);
    console.log(newUser);
    try {
        await newUser.save();  // Save user to database
        done(null, newUser);
    } catch (error) {
        console.log(error);
        done(error)
    }
}));