
var char = '[a-zA-Z0-9\/\+]'
var trail2 = '[AQgw]=='
var trail4 = '[AEIMQUYcgkosw048]='
var rx = '(?:' +char+ '{4})*(?:' +char+ '(?:(?:' +trail2 + ')|(?:' +char+trail4+ ')))?'

module.exports = function (prefix,suffix) {
  return new RegExp('^'+(prefix||'')+rx+(suffix||'')+'$')
}










