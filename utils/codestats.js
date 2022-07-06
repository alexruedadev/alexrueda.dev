/**
 * Replace spaces in string for any character.
 * 
 * The '\s' meta character is a regular expression that matches any whitespace in JS.
 * The 'g' flag tells JavaScript to replace it multiple times.
 * 
 * @param {*} key is the string to clear.
 * @param {*} item is the character to replace with.
 * @returns @key string without spaces.
 */
const replaceKeySpaces = (key, item) => key.replace(/\s/g, item);

/**
 * Sort languages from higher to lower experience `new_xps`
 * @param {*} languages fetched from https://codestats.net
 * @returns array of objects with sorted languages.
 */
function sortLanguagesByNewExp(languages){
    let result = []
    const orderedLangs = Object.values(languages).sort((a,b)  => b.new_xps - a.new_xps)
    for(const value in orderedLangs){
        for (const key in languages) {
            if(languages[key] == orderedLangs[value]){
                // Check if name string contains spaces and replaces it.
                let cleanKey = replaceKeySpaces(key,'');
                // Create new object with named properties.
                result.push({name:cleanKey, new_xps:orderedLangs[value].new_xps, xps:orderedLangs[value].xps})
            }
        }
    }
    console.log(result)
    return result
}

/**
 * Sort languages from higher to lower experience `new_xps`
 * @param {*} languages fetched from https://codestats.net
 * @returns array of objects with sorted languages.
 */
function sortLanguagesByTotalExp(languages){
    let result = []
    const orderedLangs = Object.values(languages).sort((a,b)  => b.xps - a.xps)
    for(const value in orderedLangs){
        for (const key in languages) {
            if(languages[key] == orderedLangs[value]){
                // Check if name string contains spaces and remove it.
                let cleanKey = key.indexOf(" ") == -1 ? cleanKey = key : cleanKey = key.replace(" ", "")
                result.push({name:cleanKey, new_xps:orderedLangs[value].new_xps, xps:orderedLangs[value].xps})
            }
        }
    }
    return result
}

/**
 * Get only languages which today exp (new_xps) is not 0.
 * @param {*} languages ordered from higher to lower
 */
function getTodayExp(languages){
    let result = []
    for (let i = 0; i < languages.length; i++){
        languages[i].new_xps === 0 ? languages.splice(i, 1) : result[i] = languages[i];
    }
    // result = [] // -> discomment to test 'not today activity' status
    if(result.length == 0) this.onVacation();
    return result
}

/**
 * Limite the array to determinated size.
 * @param {*} number the desired size of array.
 * @param {*} array the array to short.
 * @returns array with @number size.
 */
function shortSizeTo(number,array){
    let result = []
    for (let i = 0; i < number; i++) {
        result[i] = array[i]
    }
    return result
}

module.exports = {
    sortLanguagesByNewExp,
    sortLanguagesByTotalExp,
    getTodayExp,
    shortSizeTo,
    replaceKeySpaces
}