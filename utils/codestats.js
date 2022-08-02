
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
 * Replace spaces at string for any character.
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
 * Sort from largest to smallest experience.
 * @param {*} languages fetched from https://codestats.net/api/users/ + username.
 * @param {*} exp Type of experience to sort by: 'new_xps' or 'xps'
 * @returns sorted array from largest to smallest exp type.
 */
const orderBy = (languages, exp) => Object.values(languages).sort((a,b) => b[exp] - a[exp])

/********************************************************************************************************/

/** 
 * Sort all languages from higher to lower value.
 * IMPORTANT: Create a new array with new propiety 'name' with the key name of each language (for better access later).
 * @param {*} languages fetched from https://codestats.net/api/users/ + username.
 * @param {*} value 'String' with the key name of value. ['xps' or 'new_xps']
 * @returns a new array of objects with sorted languages.
 */
const sortLanguagesBy = (value, languages) => {
    let result = []
    const orderedLangs = orderBy(languages, value)
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

/** GET TODAY EXP
 * 
 * Get only languages which today exp (new_xps) is not 0.
 * @param {*} languages ordered from higher to lower
 */
const getTodayExp = (languages) => {
    let result = []
    for (let i = 0; i < languages.length; i++){
        languages[i].new_xps === 0 ? languages.splice(i,1) : result[i] = languages[i];
    }
    if(result.length == 0) return console.log('No hay resultados')/* this.onVacation() */;
    return result
}

/** SORT ARRAY SIZE
 * 
 * Limite the array to determinated size.
 * @param {*} number the desired size of array.
 * @param {*} array the array to sort.
 * @returns new array with @number size.
 */
const sortSizeTo = (number,array) => {
    let result = []
    for (let i = 0; i < number; i++) {
        result[i] = array[i]
    }
    return result
}

module.exports = {
    getTodayExp,
    sortLanguagesBy,
    sortSizeTo,
    replaceKeySpaces,
    get_level,
    get_next_level_xp,
    get_level_progress,
}