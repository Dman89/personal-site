// CONTROLLERS
personalSite.controller('homeController', ['$scope',
  function($scope) {
$scope.data = {
  title: "Who is Daniel Cudney?",
  subtitle: {
    events: "Milestones",
    goals: "Future Milestones",
    title: "JavaScript Monk"
  },
  links: [
    {
      label: "LinkedIn",
      href: "www.linkedin.com/danielcudney",
      icon: 'linkedin',
      showLabel: false
    },
    {
      label: "GitHub",
      href: "www.github.com/dman89",
      icon: 'github',
      showLabel: false
    },
    {
      label: "Twitter",
      href: "www.Twitter.com/danielcudney",
      icon: 'twitter',
      showLabel: false
    }
  ],
  events: [
    {
      year: '99',
      action: 'Reversed',
      details: 'engineered a chatbot for Battle.net'
    },
    {
      year: '04',
      action: 'Hacked',
      details: 'away at programs that exploited my favorite video games, in a search to see how exploits worked.'
    },
    {
      year: '16',
      action: 'Decided',
      details: 'to change careers paths and go into programming by becoming a self-taught programmer.'
    },
    {
      year: '16',
      action: 'Initiated',
      details: 'a local meet up for FreeCodeCamp.com and still run the meet ups from time to time.'
    },
    {
      year: '17',
      action: 'Landed',
      details: 'a job as a Front-End Engineer at NewRocket, Inc. working with Nathan Firth and Todd Bashor.'
    },
    {
      year: '17',
      action: 'Implemented and Executed',
      details: 'a custom application for a fortune 500 company to validate client\'s information during the on boarding process, on the ServiceNow Platform and in the ServiceNow Portal.'
    }
  ],
  goals: [
    {
      year: '17 (Dec 12th)',
      action: 'SN Imp Specialist',
      details: 'ServiceNow Implementation Specialist'
    },
    {
      year: '18 (Feb 1st)',
      action: 'Winner',
      details: 'of an Toastmaster\'s event'
    }
  ],
  contact: {
    label: "Want to get in touch?",
    href: "/#!/contact"
  }
}


  }
])
