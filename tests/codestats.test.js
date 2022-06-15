const data = require('./data/codestats-data');
const {sortLanguagesByNewExp, replaceKeySpaces} = require('../utils/codestats');

describe('replaces spaces from string',()=> {

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

describe('Sort languages by new exp',()=> {

    it('the first element has the highest new_xps',() => {

        const languages = data.languages;
        const higherXps = Object.values(languages).sort((a,b)  => b.new_xps - a.new_xps)[0].new_xps
        
        const firstLangXps = sortLanguagesByNewExp(languages)[0].new_xps;

        expect(firstLangXps).toBe(higherXps)

    })
})