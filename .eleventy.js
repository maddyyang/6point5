
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  return {
    dir: {
      input: "src",      
      includes: "_includes",
      output: "dist"     
    }
  };
};
