import inquirer from "inquirer";

inquirer.prompt([
  {
    type: 'list',
    name: 'stack',
    message: 'Do you prefer a Node full-stack, JSON API, or Node front-end application?',
    choices: [
      'Node full-stack',
      'JSON API',
      'Node front-end',
    ],
    default: ['Node full-stack'],
  },
  {
    type: 'list',
    name: 'language',
    message: 'Do you prefer to work with JavaScript or TypeScript?',
    choices: [
      'TypeScript',
      'JavaScript',
    ],
    default: ['TypeScript'],
  },
  {
    type: 'list',
    name: 'frontFrameworks',
    message: 'Which front-end framework do you want to use?',
    choices: [
      'React',
      'Next',
    ],
    when: (answers) => {
      if (answers.stack === 'JSON API') return false;

      return true;
    },
    default: ['React'],
  },
  {
    type: 'list',
    name: 'backFrameworks',
    message: 'Which back-end framework do you want to use?',
    choices: [
      'Express',
    ],
    when: (answers) => {
      if (answers.stack === 'Node front-end') return false;

      return true;
    },
    default: ['Express'],
  },
  {
    type: 'list',
    name: 'database',
    message: 'Do you want to use a database?',
    choices: [
      'Yes',
      'No',
    ],
    when: (answers) => {
      if (answers.stack === 'Node front-end') return false;

      return true;
    },
    default: ['Yes'],
  },
  {
    type: 'list',
    name: 'databaseCategory',
    message: 'Which database do you prefer to use?',
    choices: [
      'PostgresQL',
      'MongoDB',
    ],
    when: (answers) => {
      if (
        answers.stack === 'Node front-end'
        || answers.database === 'No'
      ) return false;

      return true;
    },
    default: ['Yes'],
  },
  {
    type: 'checkbox',
    name: 'environment',
    message: 'Which of the following tools you would like to use?',
    choices: (answers) => {
      if (answers.stack === 'Node front-end') {
        return [
          'Husky',
          'Commit lint',
          'GitHub Actions',
        ];
      } else {
        return [
          'Eslint',
          'Prettier',
          'Husky',
          'Commit lint',
          'GitHub Actions',
        ];
      }
    },
    default: ['Yes'],
  },
])
  .then((answers) => { console.log(answers, 'answers'); })
  .catch((error) => { console.log(error); });
