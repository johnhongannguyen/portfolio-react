// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "John Nguyen",
  title: "Hi all, I'm John Nguyen",
  subTitle: emoji(
    "I'm a Junior Front End Web Developer proficient in Javascript, React, Node, HTML/CSS, and SQL.Experienced Marketing Coordinator with a demonstrated history of working in the electrical and electronic manufacturing industry 🚀. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PmhH-O4fQ7PkoRVv_7VDKGFZm2Vkzf-J/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/johnhongannguyen",
  gmail: "johhaneshongan@gmail.com",
  instagram: 'https://www.instagram.com/johhanesdetaufer/',
  linkedin: 'https://www.linkedin.com/in/johnnguyen1210/',
 
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I WOULD BECOME A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase and AWS "
    )
  ],

  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Langara College",
      logo: require("./assets/images/langara.png"),
      subHeader: "Web and Mobile App Design and Development ",
      duration: "January 2019 - December 2020",
      desc: "Dean Honour's Roll.",
      descBullets: [
        "Coursework: HTML/CSS, Object-Oriented Program, Vector Graphic, Raster Graphic, SQL, Swift, Java, Node.js,Express.js, Security and Cloud and Server Administration."
      ]
    },
    {
      schoolName: "Open University",
      logo: require("./assets/images/HCMCOU-Logo.png"),
      subHeader: "Bachelor of Arts in Marketing Management",
      duration: "January 2012 - August 2016",
      desc:
        "",
     
    }
  ]
};

// top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior IT Support",
      company: "Dan-D Pak",
      companylogo: require("./assets/images/dan-d.png"),
      date: " May 2021 – Present",
      desc:
        "A good step to be a Web Developer. ",
      descBullets: [
        "Maintain hardware and software on desktop PCs and electric devices",
        "Provide technical Support",
        "Debug error from the systems"
      ]
    },
    {
      role: "Ecommmerce Coordinator",
      company: "Urban Fare",
      companylogo: require("./assets/images/urban.png"),
      date: "July 2019 – September 2020",
      desc:
        "I had a good experience at Urban Fare where I can enhance my abilities in managing different tasks and bringing a core value from the company to customers.",
      descBullets:[
        "Utilize POS and Ecommerce system to deal with delivery issues.",
        "Collaborate with internal departments to ensure customer satisfaction rate.",
        "Assist departments for ordering merchandises by keeping track of items."
      ]
    },
    {
      role: "Marketing Executive",
      company: "Schneider Electric",
      companylogo: require("./assets/images/schneider-logo.png"),
      date: "January 2016 – December 2016",
      desc:
        "My very first job in Vietnam after graduating defined myself to turn into developer. That is creating a friendly UX/UI for the products ",
      descBullets:[
        "Support in variety of marketing documents,",
        "Design posters, standees, and leaflets by using Photoshop and Illustrator",
        "Analyzing customer database to figure out customer behavior in the industry."
      ]
    }
  ]
};



const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "johnhongannguyen", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
      
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "With Love for Developing cool stuff, I love to write what I have learnt.",

  blogs: [
    {
      url:
        "https://johhanes-nguyen.com/prunus/",
      title: "Prunus",
      description:
        "Do want to have a great spot during cherry blossom without seeking ?"
    },
    {
      url: "https://johhanes-nguyen.com/knack/",
      title: "Knack - Fine Artworks of the World ",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://johhanes-nguyen.com/outreach/",
      title: "Outreach - Heal the World",
      description:
        "Outreach is a post-disaster management app for the effective use and management of unaffiliated volunteers."
    },
    {
      url: "https://johhanes-nguyen.com/rebuild-tesla-homepage/",
      title: "Rebuild Tesla Landing Page",
      description:
        "It's built by React js."
    },
    {
      url: "https://zen-booth-cf8ab5.netlify.app/",
      title: "Tic Tac Toe",
      description:
        "Tech stack: HTML/CSS and JS."
    },
    {
      url: "https://60e3472417dd340d322fd6dc--zen-ramanujan-0482cf.netlify.app/",
      title: "Creating Simple Movie API",
      description:
        "Building a simple movie API and implementing to an web app for checking Movie with different genres."
    },
    {
      url: "https://johhanes-nguyen.com/react-movie-app/",
      title: "React Movie App",
      description:
        "A movie app for checking TV shows and trending Movies by fetching API from https://www.themoviedb.org/ with different frameworks."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(236) 888 9063",
  email_address: "johhaneshongan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "johhaneshongan", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
