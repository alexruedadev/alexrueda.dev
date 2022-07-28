// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Álex Rueda',
  domain: 'alexrueda.dev', // add without https:// , used in meta tags and share urls
  image: '/images/avatar.png',
  email: 'me@alexrueda.dev',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  skills: {
    header: 'High Skilled',
    subtext: 'Languajes and Tools i love',
    description: 'This stats are measured by codestats.net and resume my most-used development skills.',
    languages: {
      JavaScript: {img:'/images/pixelart/js.png', activity:'Programming'},
      Markdown: {img:'/images/pixelart/md.png', activity:'Blogging / Studing'},
      HTML: {img: '/images/pixelart/html.png', activity: 'Hypertexting'},
      CSS: {img:'/images/pixelart/css3.png', activity: 'Styling'},
      Vue: {img: '/images/pixelart/vuejs.png', activity: 'Developing'},
      php: {img: '/images/pixelart/php.png', activity: 'Programming'},
      java: {img: '/images/pixelart/java.png', activity: 'Programming'},
      python: {img: '/images/pixelart/python.png', activity: 'Programming'},
      /* edit from here */
      sql: {img: '/images/html5.svg', activity: 'Structuring data'},
      Ignore: {img: '/images/vuejs.svg', activity: 'Ignoring files'},
      XML: {img: '/images/vuejs.svg', activity: 'IDK'},
      YAML: {img: '/images/vuejs.svg', activity: 'IDK'},
      scminput: {img: '/images/vuejs.svg', activity: 'IDK'},
      Plaintext: {img: '/images/vuejs.svg', activity: 'IDK'},
      JSON: {img: '/images/pixelart/json.png', activity: 'IDK'},
      DotEnv: {img: '/images/html5.svg', activity: 'Enviroment'},
      XML: {img: '/images/html5.svg', activity: 'Structuring data'},
    },
  },
  fullstack: {
    languages: {
      html: {img: '/images/html-pixel5.png', desc: 'HTML5 Description'},
      css: {img:'/images/css-pixel.png', desc: 'CSS3 Description'},
      javascript: {img:'/images/javascript-pixel.png', desc: 'Javascript Description'},
      Java: {img:'/images/java-pixel2.png', desc: 'Java Description'},
      python: {img:'/images/python-pixel.png', desc: 'Python Description'},
      php: {img:'/images/php-pixel2.png', desc: 'PHP Description'},
    },
    frameworks: {
      vue: {img: '/images/vuejs.svg', desc: 'HTML5 Description'},
      react: {img: '/images/react.svg', desc: 'HTML5 Description'},
      angular: {img: '/images/angularjs.svg', desc: 'HTML5 Description'},
    },
    databases: {
      mysql: {img: '/images/mysql.svg', desc: 'HTML5 Description'},
      mongodb: {img: '/images/mongodb.svg', desc: 'HTML5 Description'},
      firebase: {img: '/images/firebase.svg', desc: 'HTML5 Description'},
    },
    design: {
      photoshop: {img: '/images/photoshop.svg'},
      figma: {img: '/images/figma.svg'},
      xd: {img: '/images/xd.svg'},
    },
    os: {
      windows: {img: '/images/windows.svg'},
      linux: {img: '/images/linux.svg'},
    }
  },
  studing: {
    header: 'studing',
    upheader: 'never stop',
    description: 'As every great developer, i am constantly trying to improve my knowledges about web development and related technologies with courses, blogs, and different trainings.',
    courses: [
      {title: 'Fundamentals of digital marketing', from: 'Google', progress: 'width: 15%', icon:'/images/google.svg', url:'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing' },
      {title: 'Advanced Javascript', from: 'Udemy', progress: 'width: 75%', icon:'/images/udemy.svg', url:''},
      {title: 'Higher Grade Web app development', from: 'Ceedcv', progress: 'width: 75%', icon:'/images/resume/ceed-dark.svg', url:''}
    ]
  },
  projects: {
    enabled: true,
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'alexrueda.dev',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  firebase: {
    enabled: true
  },
  social: {
    github: 'alexruedadev',
    linkedin: 'alexsrueda',
    facebook: '',
    twitter: 'alexruedadev',
    instagram: 'alexrueda.dev',
    codestats: 'alexdiple'
  },
  buyMeACoffee: {
    enabled: false,
    url: ''
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: false,
    pdfUrl: '/RESUME_RUEDA_ALEX_DARK.pdf', // add files in static folder
    pdfUrlLight: '/RESUME_RUEDA_ALEX_LIGHT.pdf'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'Windows 11'},
      {title: 'Memory', value: '32 GB 5200 MHz DDR5'},
      {title: 'Keyboard', value: 'Logitech G915 TKL Gaming - Wireless Lightspeed'},
      {title: 'Mouse', value: 'Logitech G703 - Wireless Lightspeed'},
      {title: 'Monitor', value: 'Lenovo QHD (2560 x 1440) 24 Inch IPS Display'},
      {title: 'Laptop', value: 'Notebook HP Envy - Intel i7 - Nvidia...'}
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: '', designation: '', image: '', linkedin: '', content: '' },
      { name: '', designation: '', image: '', linkedin: '', content: '' },
    ]
  },
  loadingIndicator: {
    name: 'cube-grid'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'Home',
        blog: 'Blog',
        projects: 'Projects',
        uses: 'Stats',
        resume: 'Resume',
        buyMeACoffee: 'Buy me a coffee',
        signIn: 'Sign in',
        signOut: 'Sign out'
      },
      hero: {
        iBlogTech: 'I blog things',
        haveALook: 'have a look',
        friendlyNeighborhood: 'Your friendly neighborhood',
        description: `My name is Alex Rueda and i'm web developer student and freelance. If you are interested in working together, have a look to my website to learn about me.`,
        words: ['Developer', 'Programmer'],
        working: {
          title: 'Working as',
          job: 'Freelancer',
        },
      },
      githubCalendar: {
        header: 'Github',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'Blog', // 🖋
        subtext: 'My blog, my notebook.'
      },
      recentBlog: {
        header: 'Recent notes',
        subtext: 'tech & dev'
      },
      stats: {
        header: 'Stats',
        subheader: '',
        info: 'Data measured by codestats.net'
      },
      projects: {
        header: 'Projects', // 🛠
        subtext: 'Every project has its own story and proposit.'
      },
      hardskills: {
        header: 'Hardskills',
        subtext: '{ Languajes and Tools i main }',
        description: "These are my most-used development languages and tools. I don't say it, it does <a href='https://codestats.net/users/alexdiple'>codestats.net</a> 👈",
      },
      currently: {
        header: 'Currently',
        studing: {
          header: 'studing',
          upheader: 'daily',
          description: 'As every great developer, i am constantly trying to improve my knowledges about web development and related technologies with courses, blogs, and different trainings.',
        },
        working: {
          header: 'project',
          upheader: 'free time',
          description: 'I use to practice my learnings, building real applications that requires more difficulty to find my limits. Also, i use to try contributing to open sorce.',
          project: {
            title: 'Mr Beat',
            techs: 'javascript, discordjs, react',
            description: 'Mr Beat is a full integrated music bot for Discord app. The first integrated reproductor that allows see the music status in realtime.',
            icon:'/images/discord-bot.png',
            url: 'https://discord-mrbeat.com',
            github: 'https://github.com/alexruedadev/discord-mr-beat'
          }
        }
      },
      button: {
        blog: 'I blog things',
        stats: 'I keep all stats',
        projects: 'I build projects',
        action: 'have a look'
      },
      resume: {
        name: 'Soriano Rueda Álex',
        rol: 'Web developement student / Freelancer',
        address: 'Valencia, Spain',
        mail: 'me@alexrueda.dev',
        job: 'Freelancer',
        experience: {
          title: 'Work experience',
          meta: [
            {company: 'Freelance', icon:'/images/resume/freelance.svg', url:'https://alexdiple.dev', web: 'alexrueda.dev', roll: 'freelance developer', time:'1 March, 2022 - Present • 2 months', team: '',  
              achievements:[
                {desc: 'Development and collaboration in open source projects. (See on Github)'},

              ]
            },
            {company: 'Tudron', icon: '/images/resume/tudron.svg', url:'https://tudron.net',web: 'tudron.net', roll: 'web developer freelance', time:'1 Jul, 2020 - 30 Jan, 2021 • about 7 months', team: '', 
              achievements:[
                {desc: 'Complete web development with WordPress, coding php and using plugins as: Elementor, Yoast SEO...'},
                {desc: 'Hosting, domain and corporative emails administration.'},
                {desc: 'Web maintenance and content update.'},
                {desc: 'Usage of Google bussiness tools, index and SEO, positioning at first search page results.'},

              ]
            },
            {company: 'ACSE Brokerage', icon:'/images/resume/acse.svg', url:'https://acseteruel.com', web:'acseteruel.com', roll: 'freelance', time:'5 Feb, 2018 - 31 Jan, 2019 • 12 months', team: '', 
              achievements:[
                {desc: 'No achievements.'}
              ]
            },

          ]
        },
        education: {
          title: 'Education',
          meta: [
            {college: 'Ceedcv • Specific education center, Valencia', formation: 'Professional Training • Web App Development', time: '1 Oct, 2019 - Present', mode: 'Distance', url:'https://www.boe.es/eli/es/rd/2010/05/20/686',
              signatures: [
                // {title:'', description: ''},
              ],
              icon: '/images/resume/ceed-dark.svg',
            },
            {college: 'The Vines • College, Teruel', formation: 'Bachelor of Sciences • First course', time: '25 Sep, 2013 - 30 June, 2014', mode: 'Full-time', 
              signatures: [],
              icon: '/images/resume/vines.png'
            }
          ]
        },
        licenses: {
          title: 'Licences & Certifications',
          meta: [
            {title: 'license title', college: 'Academy Name • Information Technology', date: 'dd mm, aaaa - dd mm, aaaa', expiration:'Expiration date', credential: '', icon: ''},
            // {title: 'license title', college: 'Udemy Academy • Information Technology', date: '27 July, 2017 - 30 June, 2021', expiration:'No expiration date', credential: '', icon: ''}
          ],
          btn: 'show credential'
        },
        skills: {

        }
      }
    },
    es_ES: {
      download: 'download',
      nav: {
        home: 'Home',
        blog: 'Blog',
        projects: 'Projectos',
        uses: 'Estadísticas',
        resume: 'Currículum',
        buyMeACoffee: 'Buy me a coffee',
        signIn: 'Sign in',
        signOut: 'Sign out'
      },
      hero: {
        iBlogTech: 'I blog things',
        haveALook: 'have a look',
        friendlyNeighborhood: 'Tu amigo y vecino',
        description: `Hola! 👋 mi nombre es <b>Álex Rueda</b> y soy <b>estudiante de desarrollo web</b>. Mi pasión por internet y el desarrollo de software me convierten en un constante devorador de código. Si te interesa que trabajemos juntos, <b>cotillea mi página</b> para saber más sobre mí y contacta conmigo cuando quieras.`,
        words: ['Desarrollador', 'Programador'],
        working: {
          title: 'Trabajo actual',
          job: 'Autónomo',
        }
      },
      hardskills: {
        header: 'Habilidades',
        subtext: 'Lenguajes y herramientas',
        description: "Estos son los lenguajes y herramientas de desarrollo que más utilizo. Y no lo digo yo, lo dice <a href='https://codestats.net/users/alexdiple'>codestats.net</a> 👈",
        languages: {
          HTML: {title:'html', level: 'medium', img: '/images/html5.svg'},
          CSS: {title:'css', level: 'medium', img: '/images/css.svg'},
          JavaScript: {title:'html', level: 'medium', img: '/images/js.svg'},
          php: {title:'php', level: 'medium', img: '/images/html5.svg'},
          java: {title:'java', level: 'low', img: '/images/html5.svg'},
          python: {title:'python', level: 'low', img: '/images/html5.svg'},
          sql: {title:'sql', level: 'low', img: '/images/html5.svg'}
        },
      frameworks: {
        vue: {},
        react: {},
        angular: {}
      }
      },
      currently: {
        header: 'Actualmente',
        studing: {
          header: 'estudiando',
          upheader: 'cada día',
          description: "Como todo buen desarrollador, me mantengo actualizado cada día y trato de mejorar mis conocimientos sobre desarrollo web y tecnologías relacionadas mediante <b>cursos, libros, y diferentes formaciones</b>.",
        },
        working: {
          header: 'proyecto',
          upheader: 'de tiempo libre',
          description: 'Suelo practicar mis aprendizajes, desarrollando aplicaciones reales que requieren más dificultad para encontrar mis límites. También, intento contribuir a proyectos de código abierto.',
          project: {
            title: 'Mr Beat',
            techs: 'javascript, discordjs, react',
            description: 'Mr Beat es un bot de música integrado en la aplicación de discord. El primer reproductor integrado que te permite ver el estado de la música en tiempo real.',
            icon:'/images/discord-bot.png',
            url: 'https://discord-mrbeat.com',
            github: 'https://github.com/alexruedadev/discord-mr-beat'
          }
        },
      },
      recentBlog: {
        header: 'Notas recientes',
        subtext: 'tech & dev'
      },
      githubCalendar: {
        header: 'Github',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'Blog', // 🖋
        subtext: 'Mi blog, mi cuaderno de notas.'
      },
      stats: {
        header: 'Estadísticas',
        subheader: '',
        info: 'Datos medidos por codestats.net'
      },
      projects: {
        header: 'Projectos', // 🛠 
        subtext: 'Cada proyecto tiene su propia historia y su propio propósito.'
      },
      button: {
        blog: 'Escribo cosas',
        stats: 'Mido estadísticas',
        projects: 'Hago proyectos',
        action: 'cotillear'
      },
      resume: {
        name: 'Soriano Rueda Álex',
        rol: 'Estudiante de desarrollo web / Autónomo',
        address: 'Valencia, España',
        mail: 'me@alexrueda.dev',
        job: 'Autónomo',
        experience: {
          title: 'Experiencia laboral',
          meta: [
            {company: 'Autónomo', icon:'/images/resume/freelance.svg', url:'https://alexdiple.dev', web: 'alexrueda.dev', roll: 'desarrollador autónomo', time:'1 Mar, 2022 - Presente • 2 meses', team: '',  
              achievements:[
                {desc: 'Desarrollo y colaboración en proyectos de código abierto. (ver Github)'},

              ]
            },
            {company: 'Tudron', icon: '/images/resume/tudron.svg', url:'https://tudron.net',web: 'tudron.net', roll: 'desarrollador web autónomo', time:'1 Jul, 2020 - 30 En, 2021 • 7 meses', team: '', 
              achievements:[
                {desc: 'Desarrollo completo de página web con Wordpress, programando en php y utilizando plugins como: Elementor, Yoast SEO...'},
                {desc: 'Administración de hosting, dominio y correos electrónicos corporativos.'},
                {desc: 'Mantenimiento y actualización de contenido.'},
                {desc: 'Uso de herramientas de Google para negocios, indexación y SEO, posicionándola en la primera página de resultados.'},

              ]
            },
            {company: 'ACSE Correduría', icon:'/images/resume/acse.svg', url:'https://acseteruel.com', web:'acseteruel.com', roll: 'autónomo', time:'5 Feb, 2018 - 31 En, 2019 • 12 meses', team: '', 
              achievements:[
                {desc: 'Pendiente'}
              ]
            },

          ]
        },
        education: {
          title: 'Educación',
          meta: [
            {college: 'Ceedcv • Centro de educación específica, Valencia', formation: 'Formación profesional • Desarrollo de aplicaciones web', time: '1 Oct, 2019 - Presente', mode: 'Distancia', url:'https://www.boe.es/eli/es/rd/2010/05/20/686',
              signatures: [
                // {title:'', description: ''},
              ],
              icon: '/images/resume/ceed-dark.svg',
            },
            {college: 'Las Viñas • Colegio, Teruel', formation: 'Bachiller de ciencas • Primer curso', time: '25 Sep, 2013 - 30 Jun, 2014', mode: 'Presencial', 
              signatures: [],
              icon: '/images/resume/vines.png'
            }
          ]
        },
        licenses: {
          title: 'Licencias & Certificaciones',
          meta: [
            {title: 'license title', college: 'Academy Name • Information Technology', date: 'dd mm, aaaa - dd mm, aaaa', expiration:'Expiration date', credential: '', icon: ''},
            // {title: 'license title', college: 'Udemy Academy • Information Technology', date: '27 July, 2017 - 30 June, 2021', expiration:'No expiration date', credential: '', icon: ''}
          ],
          btn: 'ver credenciales'
        },
        skills: {

        }
      }
    }
  }
}
