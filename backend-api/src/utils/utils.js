 const slugCreater = (Text) => {
    return Text.toLowerCase()
               .replace(/ /g, '-').replace(/\+/g,'-plus-')
               .replace(/[^\w-]+/g, '');
  };
  module.exports = {
      slugCreater
  }
