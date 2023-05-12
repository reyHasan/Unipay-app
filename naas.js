const express = require('express');
const app = express ();
const port = 3000;
const methodOverride = require ('method-override');
const bodyParser = require ('body-parser');
app.use (bodyParser.urlencoded({extended: true}));
app.set ('view engine', 'ejs');
app.use (express.static('public'));
app.use (methodOverride ('_method'));
const models = require ('./models/category');
var mongoose = require ("mongoose");
const { stringify } = require('querystring');

mongoose.connect('mongodb+srv://hasan:Dotmund@cluster0.aqtva.mongodb.net/NaasDatabase', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, err => {
    if(err) console.log (err);
    console.log('Connected to MongoDB!!!')
    });

    let titles = [
        'Homeschooling Ages 1-5', 'Productivity For The Young Muslim', 'Healthy Teaching Methods For Little Children', 'Time Management For Homeschooling parents'
    ];



app.get ('/', function (req, res) {
    res.redirect('/index')
});





app.get ('/index', function (req, res) {    

        models.Program.find({}, function (err, programs) {
        models.Category.find({}, function (err, categories) { 
        models.Blog.find({}, function (err, blog) {
        models.Pub.find({}, function(err, pubs) {
        models.Course.find({}, function (err, courses){   
        models.Magazine.find({}, function(err, magazines) {
            res.render ('naasnew', {categories: categories, programs:programs, blog:blog, pubs:pubs, courses:courses, titles:titles, magazines:magazines})})
        })
        })   
        })
        }).limit(5);            
        }).limit(5);
    
});



app.get ('/index/posts/:id', function(req, res) {
        models.Program.find({}, function (err, programs) {
        models.Category.find({}, function (err, categories) { 
        models.Blog.findById(req.params.id, function (err, post) {
        models.Pub.find({}, function(err, pubs) {
        models.Course.find({}, function (err, courses){   
        models.Magazine.find({}, function(err, magazines) {
        models.Blog.find({}, function (err, blogs){  
            res.render ('posts', {categories: categories, programs:programs, post:post, blogs:blogs, pubs:pubs, courses:courses, titles:titles, magazines:magazines})})
        }).limit(3);
        })
        })   
        })
        })            
        });

  });  


  app.get ('/index/courses', function(req, res) {
    models.Program.find({}, function (err, programs) {
    models.Category.find({}, function (err, categories) { 
    models.Blog.findById(req.params.id, function (err, post) {
    models.Pub.find({}, function(err, pubs) {
    models.Course.find({}, function (err, courses){   
    models.Magazine.find({}, function(err, magazines) {
    models.Blog.find({}, function (err, blogs){  
        res.render ('courses', {categories: categories, programs:programs, post:post, blogs:blogs, pubs:pubs, courses:courses, titles:titles, magazines:magazines})})
    }).limit(3);
    })
    })   
    })
    })            
    });

});  


app.get ('/index/courses/:id', function(req, res) {
    models.Program.find({}, function (err, programs) {
    models.Category.find({}, function (err, categories) { 
    models.Course.findById(req.params.id, function (err, course) {
    models.Pub.find({}, function(err, pubs) {
    models.Course.find({}, function (err, courses){   
    models.Magazine.find({}, function(err, magazines) {
    models.Blog.find({}, function (err, blogs){  
        res.render ('courseshow', {categories: categories, programs:programs, course:course, blogs:blogs, pubs:pubs, courses:courses, titles:titles, magazines:magazines})})
    }).limit(3);
    })
    })   
    })
    })            
    });

});  




    app.listen(port, function (req, res) {
       console.log('Server started'); 
    });