var fs = require('fs')
var fileContents = fs.readFileSync(__dirname + '/nouns.txt').toString()
var data = fileContents.split('\n')
var datalen = data.length - 1

function random(max) {
  return Math.floor(Math.random() * max)
}

function titlecase(x) {
  return x[0].toUpperCase() + x.slice(1)
}

function xkpasswd(opt) {
  var output = []
  opt.pattern.split('').forEach(function (x) {
	switch (x) {
	case "w":
	  output.push(data[random(datalen)])
	  break
	case "W":
	  output.push(titlecase(data[random(datalen)]))
	  break
	case "d":
	  output.push(random(10))
	  break
	default:
	  output.push(x)
	}
  })
  return output.join('')
}

window.genpasswd = function(opt) {
  return xkpasswd(opt)
}
