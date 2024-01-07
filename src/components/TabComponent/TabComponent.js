import React, { useState } from 'react';
import './TabComponent.scss'; // Import the CSS file for styling
// import { FaHtml5, FaJs, FaMobileAlt, FaSass, FaCodeBranch, FaChrome, FaGitAlt, FaRocket } from 'react-icons/fa';
import { FaHtml5, FaJs, FaMobileAlt, FaSass, FaCodeBranch, FaChrome, FaGitAlt, FaRocket,FaPython,FaPhp,FaCloud, FaServer, FaAws, FaNetworkWired,FaReact } from 'react-icons/fa';


const tabData = [
  {
    id: 3,
    title: 'About me',
    content: [
      {
        id: 1,
        title: 'Python Proficiency in Test Automation',
        description: "I use Python and frameworks like Behave alongside Selenium to create robust test automation suites, ensuring software quality and reliability.",
        icon: <FaPython size={50} color='#FFD43B' />,
      },
      {
        id: 2,
        title: 'PHP Utilization in CMS Platforms',
        description: "I've utilized PHP within CMS platforms like WordPress for template creation and customization, enabling the development of dynamic website components.",
        icon: <FaPhp size={50} color='#4F5D95' />,
      },
      {
        id: 3,
        title: 'JavaScript Implementation in WordPress Templates',
        description: "I implement JavaScript within WordPress templates to enhance user interactions and create dynamic content.",
        icon: <FaReact size={50} color='#61DAFB' />,
      },
      {
        id: 4,
        title: 'Azure and Azure Pipelines Usage',
        description: "I have experience working with Azure services and setting up CI/CD pipelines using Azure Pipelines for efficient software delivery.",
        icon: <FaCloud size={50} color='#0078D4' />,
      },
      {
        id: 5,
        title: 'Database Management with MongoDB',
        description: "Proficient in using MongoDB for database management and data manipulation, ensuring efficient backend operations.",
        icon: <FaServer size={50} color='#004080' />,
      },
      {
        id: 6,
        title: 'GraphQL Implementation in Projects',
        description: "Familiarity with implementing GraphQL APIs for flexible data querying and interaction in web applications.",
        icon: <FaNetworkWired size={50} color='#E10098' />,
      },
      {
        id: 7,
        title: 'Limited Knowledge on AWS',
        description: "Basic understanding and limited usage of AWS services in some project aspects.",
        icon: <FaAws size={50} color='#FF9900' />,
      },
      {
        id: 8,
        title: 'ReactJS Usage for UI Development',
        description: "Experience in using ReactJS for building user interfaces and components in web applications.",
        icon: <FaReact size={50} color='#61DAFB' />,
      }
  
    ]
  },
  {
    id: 1,
    title: 'UI/UX Development Skills',
    content: [
      {
        id: 1,
        title: 'Making Web Pages Look Good',
        description: "I know how to make websites that look nice and organized using HTML5 and CSS3.",
        icon: <FaHtml5 size={50} color='#E34F26'/>,
      },
      {
        id: 2,
        title: 'Playing with JavaScript',
        description: "I'm good at using JavaScript and its cool tools like React, Vue.js, or Angular to make websites more fun and interactive.",
        icon: <FaJs size={50} color='#F7DF1E' />,
      },
      {
        id: 3,
        title: 'Fitting on Any Screen',
        description: "I can create websites that work well on phones, tablets, or computers without looking weird or broken.",
        icon: <FaMobileAlt size={50} color='#ffffff' />,
      },
      {
        id: 4,
        title: 'Neat and Clean Stylesheets',
        description: "I know tricks to write better and easy-to-understand stylesheets using tools like Sass or Less.",
        icon: <FaSass size={50} color='#CC6699' />,
      },
      {
        id: 5,
        title: 'Setting Up Projects Efficiently',
        description: "I'm familiar with tools like Webpack, Gulp, or Parcel that make starting new website projects easier.",
        icon: <FaCodeBranch size={50} color='#008000'/>,
      },
      {
        id: 6,
        title: 'Getting Along with All Browsers',
        description: "I can make websites that work properly on different web browsers like Chrome, Firefox, or Safari.",
        icon: <FaChrome size={50} color='#4285F4'/>,
      },
      {
        id: 7,
        title: 'Keeping Track of Changes',
        description: "I'm good at using Git, which helps me keep track of all the changes I make to the website and collaborate with others.",
        icon: <FaGitAlt size={50} color='#F05032' />,
      },
      {
        id: 8,
        title: 'Making Websites Faster',
        description: "I know some tricks to make websites load faster and work better for people who visit them.",
        icon: <FaRocket size={50} color='#0074D9'/>,
      },
    ],
    bulbContent: [
      {
        id: 1,
        title: 'Making Web Pages Look Good',
        description: "I know how to make websites that look nice and organized using HTML5 and CSS3.",
        icon: <FaJs size={100} color='#F7DF1E'  />,
      },
      {
        id: 2,
        title: 'Playing with JavaScript',
        description: "I'm good at using JavaScript and its cool tools like React, Vue.js, or Angular to make websites more fun and interactive.",
        icon: <FaSass size={100} color='#CC6699' />,
      }
    ],
  },
  {
    id: 2,
    title: 'Backend Development Skills',
    content: [
      {
        id: 1,
        title: 'Python Proficiency in Test Automation',
        description: "I use Python and frameworks like Behave alongside Selenium to create robust test automation suites, ensuring software quality and reliability.",
        icon: <FaPython size={50} color='#FFD43B' />,
      },
      {
        id: 2,
        title: 'PHP Utilization in CMS Platforms',
        description: "I've utilized PHP within CMS platforms like WordPress for template creation and customization, enabling the development of dynamic website components.",
        icon: <FaPhp size={50} color='#4F5D95' />,
      },
      {
        id: 3,
        title: 'JavaScript Implementation in WordPress Templates',
        description: "I implement JavaScript within WordPress templates to enhance user interactions and create dynamic content.",
        icon: <FaReact size={50} color='#61DAFB' />,
      },
      {
        id: 4,
        title: 'Azure and Azure Pipelines Usage',
        description: "I have experience working with Azure services and setting up CI/CD pipelines using Azure Pipelines for efficient software delivery.",
        icon: <FaCloud size={50} color='#0078D4' />,
      },
      {
        id: 5,
        title: 'Database Management with MongoDB',
        description: "Proficient in using MongoDB for database management and data manipulation, ensuring efficient backend operations.",
        icon: <FaServer size={50} color='#004080' />,
      },
      {
        id: 6,
        title: 'GraphQL Implementation in Projects',
        description: "Familiarity with implementing GraphQL APIs for flexible data querying and interaction in web applications.",
        icon: <FaNetworkWired size={50} color='#E10098' />,
      },
      {
        id: 7,
        title: 'Limited Knowledge on AWS',
        description: "Basic understanding and limited usage of AWS services in some project aspects.",
        icon: <FaAws size={50} color='#FF9900' />,
      },
      {
        id: 8,
        title: 'ReactJS Usage for UI Development',
        description: "Experience in using ReactJS for building user interfaces and components in web applications.",
        icon: <FaReact size={50} color='#61DAFB' />,
      }
  
    ]
  },
  {
    id: 2,
    title: 'Projects',
    content: [
      {
        id: 1,
        title: 'Python Proficiency in Test Automation',
        description: "I use Python and frameworks like Behave alongside Selenium to create robust test automation suites, ensuring software quality and reliability.",
        icon: <FaPython size={50} color='#FFD43B' />,
      },
      {
        id: 2,
        title: 'PHP Utilization in CMS Platforms',
        description: "I've utilized PHP within CMS platforms like WordPress for template creation and customization, enabling the development of dynamic website components.",
        icon: <FaPhp size={50} color='#4F5D95' />,
      },
      {
        id: 3,
        title: 'JavaScript Implementation in WordPress Templates',
        description: "I implement JavaScript within WordPress templates to enhance user interactions and create dynamic content.",
        icon: <FaReact size={50} color='#61DAFB' />,
      },
      {
        id: 4,
        title: 'Azure and Azure Pipelines Usage',
        description: "I have experience working with Azure services and setting up CI/CD pipelines using Azure Pipelines for efficient software delivery.",
        icon: <FaCloud size={50} color='#0078D4' />,
      },
      {
        id: 5,
        title: 'Database Management with MongoDB',
        description: "Proficient in using MongoDB for database management and data manipulation, ensuring efficient backend operations.",
        icon: <FaServer size={50} color='#004080' />,
      },
      {
        id: 6,
        title: 'GraphQL Implementation in Projects',
        description: "Familiarity with implementing GraphQL APIs for flexible data querying and interaction in web applications.",
        icon: <FaNetworkWired size={50} color='#E10098' />,
      },
      {
        id: 7,
        title: 'Limited Knowledge on AWS',
        description: "Basic understanding and limited usage of AWS services in some project aspects.",
        icon: <FaAws size={50} color='#FF9900' />,
      },
      {
        id: 8,
        title: 'ReactJS Usage for UI Development',
        description: "Experience in using ReactJS for building user interfaces and components in web applications.",
        icon: <FaReact size={50} color='#61DAFB' />,
      }
  
    ]
  },

  // Add more tab data as needed...
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="Explore">
      <div className="tabs">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={tab.id === activeTab ? 'tab active-tab' : 'tab'}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={tab.id === activeTab ? 'content active-content' : 'content'}
          >
            <div className="skills-section">
              <div className="skills-container">
                <div className="skill">
                  <ul className='ul-box'>
                    {tab.content.map((skill) => (
                      <li key={skill.id}>
                        <div className="each-skill">
                          <div className="each-icon">{skill.icon}</div>
                          <div className="each-content">
                            <p><strong>{skill.title}:</strong> {skill.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>


  
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
