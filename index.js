
module.exports = function deduce() {
  var args = Array.from(arguments)
  var len = args.length
  if(len == 0) return
  var result = args[0]
  for (var i = 1; i < len; i++) {
    result = args[i](result)
  }
  return result
}
