
const Express = require('express');
const App = Express();
const Projectmodel = require('./models/projects');
const summitmodel = require('./models/formData');
const cors = require('cors');
App.use(Express.json());
App.use(Express.urlencoded({
    extended:true,
}));

App.use(cors(
    {
        origin: [ "http://portfolio-fet.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true,
    }
));

// your routes and other middleware here
const Mongoose = require('mongoose');
Mongoose.connect("mongodb+srv://fabricemokfembam:Thiago+123.@cluster0.k1awser.mongodb.net/PFetDB?retryWrites=true&w=majority", {

    useNewUrlParser: true, 
    useUnifiedTopology:true,
}).then(
    () => {
     console.log('mongodb connected succesfully');
    }
).catch((err) => {
    console.log(err)
})

// App.get('/', (req, res) => {
//     res.send('na how');
// });

App.get('/', cors(), (req, res) => {
    
});

App.post('/api/contact', (req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
   // summitmodel.insertMany(formData);

    console.log(formData);
    res.sendStatus(200);
});

//Projectmodel.deleteMany(data);
//Projectmodel.insertMany(data);

App.get('/allCompassDATA', (req, res) => {
   Projectmodel.find().then((values) => {
        res.json(values);
    }).catch((err) => {
        console.log(err);
    })
})

//App.post('/createproject');

App.listen(3001, () => {
    console.log("Server runs perfectly 3001");
})