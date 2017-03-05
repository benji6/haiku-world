import {createElement} from 'react'

const About = () => createElement('div', {className: 'About'},
  createElement('p', {className: 'About_Body'}, 'Haiku is a very short form of Japanese poetry. A haiku should have 3 lines, the first with 5 syllables, the second with 7 syllables and the third with 5 syllables again.'),
  createElement('p', {className: 'About_Body'}, 'Here is an example:'),
  createElement('p', {className: 'About_Body'}, '"Not really an example :D"'),
  createElement('p', {className: 'About_Body'}, ' Be creative!')
)

About.proptTypes = {}

export default About
