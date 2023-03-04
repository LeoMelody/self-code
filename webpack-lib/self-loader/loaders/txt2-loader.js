module.exports = function(sourceCode) {
    console.log('text2')
    console.log(sourceCode);
    return `const a = ${sourceCode};`;
}
