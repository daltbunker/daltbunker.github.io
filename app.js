
//CONTACT
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  function openEmail(contactForm) {
    const emailAddress = 'webdevdalt@gmail.com' 
    const subject = contactForm.get('subject').trim();
    const message = contactForm.get('message').trimEnd();
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${message}`);
  }
  
  e.preventDefault();
  openEmail(new FormData(contactForm));
});

//PROJECTS
const PROJECTS = [
  {
    name: 'soul climbers',
    github: 'https://github.com/daltbunker/climbing_log_service',
    website: 'https://soulcimbers.com',
    description: `Soul Climbers is a tool and hub for "pure" rock climbers. Users can explore news articles,
    search for climbs, and log their ascents without the hastle of gym bros and jaded trad dads. Other
    popular sites tend to only distract from the beauty and truths or rock climbing. As a recent converted
    soul climber, this is my way of giving back.
    `,
    skills: [
      {
        title: 'java',
        image: 'java.png'
      },
      {
        title: 'angular',
        image: 'angular.png'
      },
      {
        title: 'mySQL',
        image: 'mysql.png'
      }
    ]
  },
  {
    name: 'portfolio',
    github: 'https://github.com/daltbunker/daltbunker.github.io',
    description: `A simple app built with vanilla javascript. In a modern world where
    languages and libraries are coming out faster than I can say hello world, I thought it would be fun
    to go back to the basics. I like to understand how my tools work and have always had a natural
    curiousity for seeing what's under the hood.
    `,
    skills: [
      {
        title: 'javascript',
        image: 'js.png'
      }
    ]
  }
];
let projectIndex = 0;
const projectDiv = document.querySelector('.project');
const leftProjectBtn = document.querySelector('.project-left-scroll');
const rightProjectBtn = document.querySelector('.project-right-scroll');

function setProject(project) {
  while (projectDiv.firstChild) {
    projectDiv.removeChild(projectDiv.firstChild);
  }
  const children = [];

  // title
  {  
    function createLink(url, src) {
      const link = document.createElement('a');
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      const img = document.createElement('img');
      img.src = src;
      img.style.height = '30px';
      link.appendChild(img);
      return link;
    }
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('row', 'center');
    titleContainer.style.marginTop = '40px';
    titleContainer.style.columnGap= '10px';
    const title = document.createElement('h3');
    title.textContent = project.name;
    titleContainer.appendChild(title);
    if (project.github) {
      titleContainer.appendChild(createLink(project.github, './assets/github.png'));
    }
    if (project.website) {
      titleContainer.appendChild(createLink(project.website, './assets/link.webp'));
    }
    children.push(titleContainer);
  }

  // count
  {
    const projectCount = document.createElement('div');
    projectCount.classList.add('project-count');
    projectCount.textContent = `${projectIndex + 1} / ${PROJECTS.length}`; 
    children.push(projectCount);
  }

  // description
  {
    const description = document.createElement('p');
    description.textContent = project.description;
    children.push(description);    
  }

  // skills
  {
    const skills = document.createElement('ul');
    skills.classList.add('row');
    skills.style.columnGap = '50px';
    {
      for (let i = 0; i < project.skills.length; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('column', 'center');
    
        const image = document.createElement('img');
        image.src = './assets/' + project.skills[i].image; 
    
        const skillTitle = document.createElement('div');
        skillTitle.textContent = project.skills[i].title;
    
        listItem.appendChild(image); 
        listItem.appendChild(skillTitle); 
        skills.appendChild(listItem);
      }
    }
    children.push(skills);
  }

  children.forEach(child => {
    projectDiv.appendChild(child);
  });

  projectDiv.classList.add('fade-in');
  setTimeout(() => {
    projectDiv.classList.remove('fade-in');
  }, 300)
}

// initialize projects
setProject(PROJECTS[0]);

leftProjectBtn.addEventListener('click', () => {
  if (projectIndex > 0) {
    setProject(PROJECTS[--projectIndex]);
    rightProjectBtn.style.visibility = 'visible';
  }
  if (projectIndex === 0) {
    leftProjectBtn.style.visibility = 'hidden';
    leftProjectBtn.classList.add('fade-out');
    setTimeout(() => {
      leftProjectBtn.classList.remove('fade-out');
    }, 300);
  }
});

rightProjectBtn.addEventListener('click', () => {
  if (projectIndex < PROJECTS.length - 1) {
    setProject(PROJECTS[++projectIndex]);
    leftProjectBtn.style.visibility = 'visible';
  }
  if (projectIndex === PROJECTS.length - 1) {
    rightProjectBtn.style.visibility = 'hidden';
    rightProjectBtn.classList.add('fade-out');
    setTimeout(() => {
      rightProjectBtn.classList.remove('fade-out');
    }, 300);
  }
});