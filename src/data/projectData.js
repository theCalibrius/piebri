import dedent from 'dedent-js';
// dedent removes indentation whitespace on multiline ES6 strings

var projectData = {
  leftColumnProjects: [
    {
      title: 'tableCRM',
      description: dedent`
        tableCRM is a CRM Application with an intuitive,
        table-based UI.  This project utilizes various technologies
        including those below.
      `,
      technologies: {
        left: ['node.js', 'express', 'webpack', 'aws', '-'],
        center: ['react', 'handsontable', 'highcharts', 'docker', 'REST api'],
        right: ['redux', 'jest/enzyme', 'mysql', 'travisCI', 'ES6']
      },
      gitHubURL: 'https://github.com/theCalibrius/TableCRM',
      liveURL: 'https://intense-tundra-17858.herokuapp.com/dashboard'
    },
    {
      title: 'noComments',
      description: dedent`
        A minimalist social network application.  Mitigates the
        negatives of social networks by focusing on sharing of ideas
        and content.  No likes, no messaging, no comments.
      `,
      technologies: {
        left: ['node.js', 'REST api'],
        center: ['angular', 'typescript'],
        right: ['mongodb', '-']
      },
      gitHubURL: 'https://github.com/theCalibrius/nocomments',
      liveURL: '#'
    },
    {
      title: 'pieBri',
      description: dedent`
        Personal profile website with a retro UI.  This project utilizes
        various technologies including those below.
      `,
      technologies: {
        left: ['node.js', 'cssGrid', '-'],
        center: ['react', 'ES6', 'flexBox'],
        right: ['lambda', 'aws ses', '-']
      },
      gitHubURL: 'https://github.com/theCalibrius/piebri',
      liveURL: 'http://www.piebri.com'
    },
    {
      title: 'wanderFund',
      description: dedent`
        A crowdfunding application for travel that matters.  This project
        utilizes various technologies including those below.
      `,
      technologies: {
        left: ['PHP', '-'],
        center: ['jQuery', 'sql'],
        right: ['javascript', '-']
      },
      gitHubURL: '#',
      liveURL: 'http://www.wanderfund.com'
    },
    {
      title: 'dlmfIt',
      description: dedent`
        A serverless reminder app that sends scheduled SMS notifications to
        your phone.  This project utilizes various technologies including
        those below.
      `,
      technologies: {
        left: ['node.js', 'angular'],
        center: ['lambda', '-'],
        right: ['aws sns', '-']
      },
      gitHubURL: '#',
      liveURL: '#'
    }
  ],
  rightColumnProjects: [
    {
      title: 'enGauge',
      description: dedent`
        Relationship tracker application designed to help people have better
        relationships.  This project utilizes various technologies including
        those below.
      `,
      technologies: {
        left: ['node.js', 'REST api'],
        center: ['angular', 'typescript'],
        right: ['mongodb', '-']
      },
      gitHubURL: 'https://github.com/theCalibrius/enGauged',
      liveURL: '#'
    },
    {
      title: 'marvelShake',
      description: dedent`
        An interactive dance party starring characters from the Marvel
        universe.  This project utilizes various technologies including
        those below.
      `,
      technologies: {
        left: ['jQuery'],
        center: ['javascript'],
        right: ['chai/mocha']
      },
      gitHubURL: '#',
      liveURL: '#'
    },
    {
      title: 'fitStop',
      description: dedent`
        A fitness application that guides users through timed workouts.
        This project utilizes various technologies including those below.
      `,
      technologies: {
        left: ['node.js', 'REST api'],
        center: ['react', 'ES6'],
        right: ['mongodb', '-']
      },
      gitHubURL: 'https://github.com/theCalibrius/fit-stop',
      liveURL: 'http://fit-stop.herokuapp.com/'
    },
    {
      title: 'talkRight',
      description: dedent`
        A mobile application that makes it easy to check facts relating to
        common conversation topics.  This project utilizes various
        technologies including those below.
      `,
      technologies: {
        left: ['node.js', '-'],
        center: ['angular', 'lambda'],
        right: ['ionic', '-']
      },
      gitHubURL: '#',
      liveURL: '#'
    },
    {
      title: 'docAdemy',
      description: dedent`
        An innovative online learning platform focused on programming.
        This project utilizes various technologies including those below.
      `,
      technologies: {
        left: ['-'],
        center: ['-'],
        right: ['-']
      },
      gitHubURL: '#',
      liveURL: '#'
    }
  ]
};


export default projectData;
