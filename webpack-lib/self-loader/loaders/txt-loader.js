module.exports = function(sourceCode) {
    console.log('text1')
    const itemList = sourceCode.trim().split('\n').filter(item => item.trim().length > 0).map(item => item.trim().split(":"));
    return JSON.stringify(itemList);
}
