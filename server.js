const express = require('express')



const app = express()

app.set('views', __dirname + '/')
app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + '/public'))
app.get("*", function(req, res) {
  res.render('index.html')
})

console.log('Listening at localhost:' + app.get('port'))
app.listen(app.get('port')))
