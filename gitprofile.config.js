// gitprofile.config.js

const config = {
    github: {
      username: 'bugresearch', // Your GitHub org/user name. (Required)
      sortBy: 'stars', // stars | updated
      limit: 10, // How many projects to display.
      exclude: {
        forks: false, // Forked projects will not be displayed if set to true.
        projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
      },
    },
    social: {
      linkedin: 'denizbektas',
      twitter: 'bugresearchdev',
      mastodon: '',
      facebook: '',
      instagram: 'bugresearch',
      dribbble: '',
      behance: '',
      medium: '',
      dev: 'bugresearch',
      stackoverflow: '', // format: userid/username
      skype: '',
      telegram: 'bugresearch',
      website: 'https://bugresearch.dev',
      phone: '',
      email: 'info@denizbektas.com.tr',
    },
    resume: {
      fileUrl:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
      'PHP',
      'Laravel',
      'JavaScript',
      'React.js',
      'Node.js',
      'Nest.js',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Docker',
      'PHPUnit',
      'CSS',
      'Antd',
      'Tailwind',
    ],
    experiences: [
      {
        company: 'Asis Elektronik',
        position: 'Red Team Security Consultant',
        from: 'Februrary 2023',
        to: 'Present',
        companyLink: 'https://asiselektronik.com.tr',
      },
      {
        company: 'Gais Security',
        position: 'Jr. Red Team Security Engineer',
        from: 'February 2023',
        to: 'March 2023',
        companyLink: 'https://gaissecurity.com',
      },
      {
        company: 'Efol Yazilim',
        position: 'Backend Developer',
        from: 'Agust 2022',
        to: 'Februrary 203',
        companyLink: 'https://efol.com.tr',
      },
      {
        company: 'JotForm',
        position: 'SecOps Intern',
        from: 'Agust 2022',
        to: 'September 2022',
        companyLink: 'https://jotform.com',
      },
    ],
    certifications: [
      {
        name: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet',
        year: 'March 2022',
        link: 'https://example.com'
      },
    ],
    education: [
      {
        institution: 'Firat University',
        degree: 'MSc. Computer Engineering',
        from: '2020',
        to: '2024',
      },
      {
        institution: 'Kemal Hasoglu High School',
        degree: 'High School',
        from: '2016',
        to: '2020',
      },
    ],
  
    // To hide the `My Projects` section, keep it empty.
    externalProjects: [
      {
        title: 'Project Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://example.com',
      },
      {
        title: 'Project Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://example.com',
      },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
      source: 'dev', // medium | dev
      username: 'bugresearch', // to hide blog section, keep it empty
      limit: 10, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
      id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
      id: '',
      snippetVersion: 6,
    },
    themeConfig: {
      defaultTheme: 'dark',
  
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
  
      // Should use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultTheme
      respectPrefersColorScheme: false,
  
      // Hide the ring in Profile picture
      hideAvatarRing: false,
  
      // Available themes. To remove any theme, exclude from here.
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
        'procyon',
      ],
  
      // Custom theme
      customTheme: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
        '--rounded-btn': '3rem',
      },
    },
  
    // Optional Footer. Supports plain text or HTML.
    footer: `Create with  ❤️`,
  };
  
  export default config;