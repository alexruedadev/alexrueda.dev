
// Codestats level factor value.
const level_factor = 0.025;

// Get the level based on given XP.
const get_level = (total_xp) => Math.floor(level_factor * Math.sqrt(total_xp));

// Get the amount of XP required to reach the next level from the given level.
const get_next_level_xp = (level) => Math.pow(Math.ceil( (level + 1) / level_factor), 2);

// Get the progress to the next level in percentage.
const get_level_progress = (total_xp) => {

    let level = get_level(total_xp);
    let current_level_xp = get_next_level_xp(level - 1);
    let next_level_xp = get_next_level_xp(level)
    let have_xp = total_xp - current_level_xp
    let needed_xp = next_level_xp - current_level_xp

    return Math.round( have_xp / needed_xp * 100 )
}

/********************************************************************************************************/

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
 * Sort all languages from higher to lower experience `new_xps`.
 * IMPORTANT: Create a new array with new propiety 'name' with the key name of each language (to access better later).
 * @param {*} languages fetched from https://codestats.net/api/users/ + username.
 * @returns a new array of objects with sorted languages.
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
        languages[i].new_xps === 0 ? languages.splice(i,1) : result[i] = languages[i];
    }
    // result = [] // -> discomment to test 'not today activity' status
    if(result.length == 0) return console.log('No hay resultados')/* this.onVacation() */;
    return result
}

/**
 * Limite the array to determinated size.
 * @param {*} number the desired size of array.
 * @param {*} array the array to short.
 * @returns array with @number size.
 */
function sortSizeTo(number,array){
    let result = []
    for (let i = 0; i < number; i++) {
        result[i] = array[i]
    }
    console.log(result)
    return result
}

module.exports = {
    sortLanguagesByNewExp,
    sortLanguagesByTotalExp,
    getTodayExp,
    sortSizeTo,
    replaceKeySpaces,
    get_level,
    get_next_level_xp,
    get_level_progress
}