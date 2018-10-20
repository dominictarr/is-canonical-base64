
var isCannonicalBase64 = require('../')()

var b = Buffer.alloc(4)
var b1 = b.slice(1)
var b2 = b.slice(2)
for(var i = 0; i < 1<<24; i++) {
  b.writeUInt32BE(i, 0)
  if(!isCannonicalBase64.test(b.toString('base64')))
    throw new Error(b.toString('base64')+', ' + i + 'was not cannonical base64')
  if(!isCannonicalBase64.test(b1.toString('base64')))
    throw new Error(b1.toString('base64')+', ' + i + 'was not cannonical base64')
  if(!isCannonicalBase64.test(b2.toString('base64')))
    throw new Error(b2.toString('base64')+', ' + i + 'was not cannonical base64')

  if(!(i % 1000000))
    console.log(i)
}

console.log(i)
