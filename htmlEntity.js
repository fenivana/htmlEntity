/*!
 * htmlEntity v0.1.0
 * http://www.noindoin.com/
 *
 * Copyright 2014 Jiang Fengming <fenix@noindoin.com>
 * Released under the MIT license
 */


/*
htmlEntity.encode(str, ncr)
  Convert HTML markup characters to named entities, or convert all characters to numeric character references (NCR) if the second argument 'ncr' is set to TRUE.

htmlEntity.decode(str)
  Convert named entities and numeric character references (NCR) to corresponding characters.
*/

var htmlEntity = {
  encode: function(str, ncr) {
    if(!ncr)
      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var l = str.length;
    var s = '';
    for(var i = 0; i < l; i++)
      s += '&#' + str.charCodeAt(i) + ';';
    return s;
  },

  decode: function(str) {
    var textarea = document.createElement('textarea');
    textarea.innerHTML = str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return textarea.value;
  }
};

// CommonJS
if (typeof module != 'undefined' && module.exports)
  module.exports = htmlEntity;
