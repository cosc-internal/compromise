import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/adjectives] '

test('adjectives misc', function (t) {

  let doc = nlp('he is so clear')
  let json = doc.adjectives().json()
  t.equal(json.length, 1, here + 'adj')
  t.equal(json[0].adjective.adverb, 'clearly', here + 'adv')
  t.equal(json[0].adjective.noun, 'clearness', here + 'noun')
  t.equal(json[0].adjective.superlative, 'clearest', here + 'super')
  t.equal(json[0].adjective.comparative, 'clearer', here + 'comp')

  t.end()
})
