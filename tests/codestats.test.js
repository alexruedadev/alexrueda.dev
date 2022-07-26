const data = require('./data/codestats-data');
const {getTodayExp, sortLanguagesByNewExp, replaceKeySpaces} = require('../utils/codestats');
const { it } = require('date-fns/locale');

/* describe('replaces spaces from string',()=> {

    it('between two words', ()=> {
        expect(replaceKeySpaces('Plain text', '_')).toBe('Plain_text')
    })

    it('at end of string',() => {
        expect(replaceKeySpaces('Plaintext ', '')).toBe('Plaintext')
    })

    it('at start of string',() => {
        expect(replaceKeySpaces(' Plaintext', '')).toBe('Plaintext')
    })

    it('with more than one space',() =>{
        expect(replaceKeySpaces(' Plain text ', '_')).toBe('_Plain_text_')
    })
})
*/
describe('Sort languages by new exp',()=> {

    test('the first element has the highest new_xps',() => {

        // JSON of all languages.
        const languages = data.languages;

        // Get the first element 'new_xp' value.
        const higherNewXp = Object.values(languages).sort((a,b)  => b.new_xps - a.new_xps)[0].new_xps
        
        const firstLangNewXp = sortLanguagesByNewExp(languages)[0].new_xps;

        expect(firstLangNewXp).toBe(higherNewXp)

    }),

    test('get only the languages with more than 0 xp', () => {

        const languages = data.languages;

        const languagesSortedByNewXp = sortLanguagesByNewExp(languages)

        const todayXp = getTodayExp(languagesSortedByNewXp);

        expect(todayXp).toBe("something")

    })
})