class Formatter {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.split('').splice(1, str.length).join('')


    }
    static sanitize(str) {
        var c = str.match(/[a-z0-9-\s']/gi)
        if (c !== null) {
            return c.join('')
        } else {
            return ''
        }

    }
    static titleize(str) {
        let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let strArr = str.split(' ')
        let newArr = []
        for (var f = 0; f <= strArr.length - 1; f++) {
            if (f === 0) {
                newArr.push(strArr[f].charAt(0).toUpperCase() + strArr[f].split('').splice(1, strArr[f].length).join(''))
                continue
            }
            if (arr.includes(strArr[f])) {
                newArr.push(strArr[f])
            } else {
                newArr.push(strArr[f].charAt(0).toUpperCase() + strArr[f].split('').splice(1, strArr[f].length).join(''))
            }

        }
        return newArr.join(' ')
    }
}