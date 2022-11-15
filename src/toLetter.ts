import {lowerCase} from 'lodash'

function toLetter(int: number, isLowercase: boolean = false) {
    let letter = String.fromCharCode((int - 1) + 65)
    return isLowercase ? lowerCase(letter) : letter
}

export default toLetter