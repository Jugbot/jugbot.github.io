const content =
`(function() {
  return {
    // Projects
    'Full-Stack-Web-App': {
      duration: 'Summer 2018',
      description: \`Vue Frontend with Flask RESTful Backend.
          Game-like web app in which users doodle competitively.\`
    },
    'Python-Tank-Game': {
      duration: 'January 2018',
      description: \`Tank shooter game.
          Home-brewed hit detection and quad-tree optimization.
          Includes randomly generated maze maps.\`
    },
    'Funkey-Keyboard': {
      duration: 'HackNYU 2018',
      description: \`Physical piano rythme game trainer.
          Extensive Raspberry Pi, EE, CAD Work.
          Worked with others on game logic.\`,
      awards() {
        return 'NYU Nick-Russo (entrepreneurial award)';
      }
    }
  }
})()
`

export default content
