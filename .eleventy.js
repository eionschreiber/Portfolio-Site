module.exports = function(eleventyConfig) {
    // Pass through the 'img' and 'css' folders
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/css");
};