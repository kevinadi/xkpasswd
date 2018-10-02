import {nouns} from './nouns'
var datalen = nouns.length - 1

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
	  output.push(nouns[random(datalen)])
	  break
	case "W":
	  output.push(titlecase(nouns[random(datalen)]))
	  break
	case "d":
	  output.push(random(9))
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
