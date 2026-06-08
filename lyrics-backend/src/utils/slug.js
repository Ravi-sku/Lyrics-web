const slugify = require('slugify');

const makeSlug = (text)=>{
   return slugify(text,{
      lower:true,
      strict:true
   })
}

module.exports = makeSlug

