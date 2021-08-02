module.exports = function reverse (n) {
    let revers = n.toString().split('');
    if (revers[0] === '-') {
        revers.shift()
    }
    return revers.reverse().join('')
}
