export const personalInfo = {
  name: "Shravyaa",
  fullName: "Shravyaa S",
  title: "Full Stack Developer & AI/ML Engineer",
  tagline: "Building modern web applications and exploring intelligent solutions through AI and machine learning.",
  bio: "I am a passionate developer who enjoys building responsive web applications, creating intuitive user interfaces, and exploring emerging technologies. With an interest in full-stack development, Python, and Artificial Intelligence, I combine creativity with problem-solving to develop meaningful digital experiences.",
  careerInterests: [
    "Full-Stack Web Development",
    "Artificial Intelligence & Machine Learning",
    "Responsive UI/UX Development",
    "Software Engineering & Problem-Solving",
  ],
  passionStatement: "Passionate about clean code, thoughtful design, continuous learning, and turning ideas into practical digital solutions.",
  location: "Coimbatore, India",
  status: "Available for full-time roles & high-impact projects",
  avatarUrl: "/images/37.jpeg",
  resumeUrl: "https://canva.link/uv30pk425ug1az1",
  stats: [
    { label: "Years of Coding", value: "3+" },
    { label: "Completed Projects", value: "4+" },
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shravsam14",
    username: "shravsam14",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shravyaa-sampathkumar-b59250215/",
    username: "Shravyaa Sampathkumar",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:shravyaa06@gmail.com",
    username: "shravyaa06@gmail.com",
    icon: "Mail",
  },
];
export const skillCategories = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces",
    icon: "Monitor",
    skills: [
      { name: "HTML", level: 95, icon: "Globe", highlight: false },
      { name: "CSS", level: 92, icon: "Palette", highlight: true },
      { name: "JavaScript", level: 80, icon: "Braces", highlight: true },
      { name: "React", level: 75, icon: "Code2", highlight: true },
      { name: "Tailwind CSS", level: 70, icon: "Layers", highlight: false },
    ],
  },
  {
    category: "Programming",
    description: "Programming languages and problem-solving practice",
    icon: "Code2",
    skills: [
      { name: "Python", level: 95, icon: "Terminal", highlight: true },
      { name: "C++", level: 92, icon: "Code2", highlight: false },
      { name: "Java", level: 85, icon: "Coffee", highlight: false },
    ],
  },
  {
    category: "Database & CS Fundamentals",
    description: "Understanding core computing and software concepts",
    icon: "Database",
    skills: [
      { name: "SQL", level: 98, icon: "Database", highlight: true },
      { name: "DBMS", level: 95, icon: "Server", highlight: false },
      { name: "Data Structures & Algorithms", level: 85, icon: "Workflow", highlight: true },
      { name: "OOP", level: 80, icon: "Braces", highlight: false },
      { name: "Operating Systems", level: 92, icon: "Cpu", highlight: false },
      { name: "Computer Networks", level: 90, icon: "Network", highlight: false },
    ],
  },
  {
    category: "AI/ML & Data Science",
    description: "Exploring machine learning and intelligent applications",
    icon: "Brain",
    skills: [
      { name: "Artificial Intelligence", level: 85, icon: "Brain", highlight: true },
      { name: "Machine Learning", level: 80, icon: "Workflow", highlight: true },
      { name: "Data Science", level: 95, icon: "Database", highlight: true },
      { name: "Deep Learning Fundamentals", level: 75, icon: "Cpu", highlight: false },
      { name: "Generative AI Fundamentals", level: 70, icon: "Sparkles", highlight: false },
    ],
  },
  {
    category: "Tools & Technologies",
    description: "Tools used for development and project workflows",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 90, icon: "GitBranch", highlight: true },
      { name: "GitHub", level: 80, icon: "Github", highlight: true },
      { name: "VS Code", level: 92, icon: "Code2", highlight: true },
    ],
  },
];


export const projects = [
  {
    id: "online-quiz-management-system",
    title: "Online Quiz Management System",
    tagline: "A web-based platform for creating, managing, and attempting quizzes.",
    description:
      "Developed an Online Quiz Management System that allows administrators and educators to manage quizzes and students to participate in online assessments. Built with a React frontend, Spring Boot backend, and MySQL database.",
    category: "Full Stack",
    featured: true,
    image: "/images/quiz-line-computer.webp",
    tags: ["React", "Spring Boot", "Java", "MySQL", "JWT"],
    githubUrl: "https://github.com/shravsam14/OnlineQuizPlatform.git",
    liveUrl: "",
    highlights: [
      "Developed a React-based frontend for the quiz management platform",
      "Integrated Spring Boot APIs with a MySQL database",
      "Implemented role-based access for different user types",
      "Worked on quiz creation, management, and student assessment features",
    ],
  },
  {
    id: "shuttle-club-subscription-system",
    title: "Shuttle Club Subscription Tracking System",
    tagline: "A backend system for managing shuttle club members, subscriptions, and payments.",
    description:
      "Developed a Shuttle Club Subscription Tracking System to simplify the management of club members, membership plans, attendance, and payments. The system provides REST APIs for managing member records and membership types, tracking subscription details, and retrieving membership information through filtering and pagination.",
    category: "Backend",
    featured: true,
    image: "/images/sc.jpg",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
    githubUrl: "https://github.com/shravsam14/ShuttleClubSubscriptionTracking.git",
    liveUrl: "",
    highlights: [
      "Implemented CRUD APIs for member and membership type management",
      "Created models and repositories for members, memberships, attendance, and payments",
      "Developed pagination and filtering APIs using JPQL queries",
      "Implemented service and controller layers for structured backend development",
      "Set up global exception handling, configuration, and AOP logging structure",
    ],
  }
];

export const timelineExperiences = [

  {
    period: "26 Oct 2026 to 14 Nov 2026",
    role: "Data Science & Machine Learning Intern",
    company: "Techvolt Software Pvt. Ltd.",
    type: "Experience",
    description:
      "Explored the potential of data and intelligent systems through Data Science and Machine Learning. Developed a deeper interest in extracting insights from data and understanding how machine learning can solve real-world problems.",
    achievements: [],
  },
  {
    period: "30 Apr 2026 to 29 May 2026",
    role: "Full Stack Development Intern",
    company: "Thiranex",
    type: "Experience",
    description:
      "Explored the development of web applications from the user interface to the application logic. This experience strengthened my understanding of how different parts of a software application come together.",
    achievements: [],
  },
  {
    period: "05 Jan 2026 to 20 Jan 2026",
    role: "DevOps Intern",
    company: "LYFnGO Technologies Pvt. Ltd.",
    type: "Experience",
    description:
      "An opportunity to step beyond academic learning and explore how software moves from development to deployment. Gained industry exposure to DevOps practices and the workflows behind software delivery.",
    achievements: [],
  },
  {
    period: "2024 - 2028",
    role: "B.E. Computer Science and Engineering",
    company: "Sri Krishna College of Engineering and Technology",
    type: "Education",
    description:
      "Currently exploring the world of computing through programming, software engineering, and emerging technologies. Focused on turning classroom concepts into practical skills and building solutions through continuous learning.",
    achievements: [],
  },
  {
    period: "2024",
    role: "12th Grade",
    company: "Sagar International Sr. Sec School",
    type: "Education",
    description:
      "An important starting point in my academic journey, where I developed the foundation to explore technology, challenge myself, and pursue Computer Science.",
    achievements: [],
  },
];
export const resumeDetails = {
  summary: "Results-driven Software Engineer with strong background in React, modern JavaScript/TypeScript, Node.js, and Machine Learning (Python, TensorFlow, OpenCV). Proven ability to engineer minimalist, resilient, and responsive applications.",
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: " Sri Krishna College of Engineering And Technology",
    period: "2024 - 2028",
    gpa: "8.27 / 10.0",
    honors: "Dean's Honor Roll • Academic Excellence Award",
  },
  certifications: [
    "Database and SQL – Infosys",
    "SQL Table – Infosys",
    "Crash Course in Python – Google Coursera",
    "Python Basics Course – Infosys",
    "Python by Example – Infosys",
    "Data Structures and Algorithms – Infosys",
    "MongoDB Fundamentals",
    "Design Patterns in Software – Infosys",
    "Java for Beginners – Infosys",
    "The Modern C++ Challenger – Infosys",
    "Multi-Paradigm Programming with Modern C++ – Infosys",
    "JavaScript by Example – Infosys",
    "Advanced HTML Concepts – Infosys",
    "Soft Skill Development – NPTEL",
    "Applied Accelerated Artificial Intelligence - NPTEL",
    "Advanced Distributed Systems - NPTEL"
  ],
  coreCompetencies: [
    "Full-Stack Web Development",
    "Computer Vision & Deep Learning",
    "Responsive Design Systems & Theming",
    "RESTful API Architecture",
    "Performance Optimization & SEO",
    "Agile Collaboration & Version Control",
  ],
};
