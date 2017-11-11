const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const app = express();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const exphbs = require('express-handlebars');
const session = require('express-session');
const static = express.static(__dirname + '/public');
const userData = require("./data/users");
const configRoutes = require('./routes');

app.use('/public', static);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(require('cookie-parser')());

app.engine('handlebars', exphbs({
    defaultLayout:'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing == 'number')
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
        }
    }
}));

app.set('view engine', 'handlebars');

passport.use(new localStrategy({passReqToCallback: true},
    function(req, username, passpord, done) {
        process.nextTick(async function() {
            let user = await userData.getUser(username, passpord);
            if (user === false)
                throw 'Invalid username or password';
            else return user;
        })
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });

passport.deserializeUser(function(user, done) {
done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

configRoutes(app);
app.listen(3000, ()=>{
	console.log("We've got a server running!");
	console.log("Your routes will be running on http://localhost:3000");
});
