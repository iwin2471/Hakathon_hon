module.exports = index;

function index(app, Users) {
  app.get('/', function(req, res){
     res.render('index');
  });

  app.get('/editor', function(req, res){
     res.render('editor');
  });
}
