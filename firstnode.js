var cors=require('cors')
const express = require('express')
const app=express()
app.use(cors())

app.get('/getname', function (req, res) {
  var a=JSON.parse('{"name":"a.abigail","age":18,"phonenumber":[9443460492,9487391008],"favouritebooks":["twilight","wings of fire"]}');
  var x=a;
console.log('hi')
  res.send(x.name)
})
app.get('/getage', function (req, res) {
  var a=JSON.parse('{"name":"a.abigail","age":18,"phonenumber":[9443460492,9487391008],"favouritebooks":["twilight","wings of fire"]}');
var y=a;
  console.log('hi')
  res.send(y.age)
})
app.get('/getfavouritebooks', function (req, res) {
  var a=JSON.parse('{"name":"a.abigail","age":18,"phonenumber":[9443460492,9487391008],"favouritebooks":["twilight","wings of fire"]}');
var z=a;
console.log('hi')
res.send(z.favouritebooks[1])
})
app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})
