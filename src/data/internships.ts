export interface Internship {
  id: string;
  title: string;
  duration: string;
  description: string;
  skills: string[];
  tasks: string[];
  learnings: string[];
  icon: string;
  logo?: string;
}

export const internships: Internship[] = [
  {
    id: "web-development",
    title: "Web Development Internship",
    duration: "1 Month",
    description: "Master modern web development with hands-on projects in HTML, CSS, JavaScript, and React. Build real-world applications and learn industry best practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    tasks: [
      "Build a professional portfolio website showcasing your skills",
      "Create an interactive JavaScript mini application with DOM manipulation",
      "Develop a React-based 2-page application with component architecture"
    ],
    learnings: [
      "Modern HTML5 and CSS3 techniques",
      "JavaScript fundamentals and ES6+ features",
      "React components, hooks, and state management",
      "Responsive web design principles",
      "Version control with Git"
    ],
    icon: "Code",
    logo: undefined // Add web dev logo when available
  },
  {
    id: "mongodb",
    title: "MongoDB Internshi",
    duration: "1 Month",
    description: "Learn document-oriented database design and build real apps using MongoDB. Hands-on tasks include schema design, CRUD operations, indexing, aggregation, and integrating MongoDB with Node.js/Express.",
    skills: ["MongoDB", "NoSQL", "Mongoose", "Aggregation Framework", "Indexing & Performance", "Data Modeling"],
    tasks: [
      "Set up MongoDB locally or using MongoDB Atlas",
    "Create your first database, collections, and documents",
    "Perform basic CRUD operations (Create, Read, Update, Delete)",
    "Design a simple data model for a student or product database",
    ],
    learnings: [
      "Document data modeling vs relational modeling",
    "MongoDB CRUD operations and best practices",
    "Aggregation framework for complex queries",
    "Indexing strategies and performance tuning",
    "Integrating MongoDB with Node.js using Mongoose",
    "Basics of replication and backups"
    ],
    icon: "Code",
    logo: "/src/assets/internship-logos/MongoDB_logo.png"
  },
  {
    id: "cpp",
    title: "C++ Internship",
    duration: "1 Month",
    description: "Dive deep into C++ programming and object-oriented concepts. Master data structures and problem-solving skills essential for software development.",
    skills: ["C++", "OOP", "Data Structures", "Algorithm Design"],
    tasks: [
    "Write a console-based calculator program",
    "Create programs using loops and functions",
    "Build a student marks management system",
    "Implement basic OOP concepts (classes & objects)",
    ],
    learnings: [
    "C++ syntax and basic programming structure",
    "Control statements and functions",
    "Object-oriented programming (OOP) basics",
    "Working with arrays and strings",
    "Basic file handling in C++"
    ],
    icon: "Terminal",
    logo: "/src/assets/internship-logos/cpp-logo.png"
  },
  {
    id: "python-data",
    title: "Python Data Internship",
    duration: "1 Month",
    description: "Explore data analysis and visualization with Python. Learn to work with real datasets using Pandas and create insightful visualizations.",
    skills: ["Python", "Pandas", "Data Visualization", "NumPy", "Matplotlib"],
    tasks: [
      "Perform exploratory data analysis on a real-world dataset",
      "Create an interactive data visualization dashboard",
      "Build and evaluate a simple machine learning model"
    ],
    learnings: [
      "Python programming for data analysis",
      "Data manipulation with Pandas",
      "Statistical analysis techniques",
      "Data visualization with Matplotlib/Seaborn",
      "Introduction to machine learning concepts"
    ],
    icon: "BarChart",
    logo: "/src/assets/internship-logos/python-logo.png"
  },
  {
    id: "uiux-design",
    title: "UI/UX Design Internship",
    duration: "1 Month",
    description: "Learn the fundamentals of user interface and user experience design. Create beautiful, user-friendly designs using industry-standard tools.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    tasks: [
      "Redesign a homepage with modern UI/UX principles",
      "Create a complete mobile app prototype in Figma",
      "Conduct user testing and document findings"
    ],
    learnings: [
      "UI/UX design fundamentals",
      "Figma design tool mastery",
      "User research methodologies",
      "Wireframing and prototyping",
      "Design systems and component libraries"
    ],
    icon: "Palette",
    logo: "/src/assets/internship-logos/uiux-logo.jpg"
  },
  {
    id: "android-development",
    title: "Android Development Internship",
    duration: "1 Month",
    description: "Build native Android applications using Java/Kotlin. Learn mobile app development fundamentals and create functional Android apps.",
    skills: ["Java", "Kotlin", "Android SDK", "UI Design", "Local Storage"],
    tasks: [
      "Develop a basic 2-screen Android application",
      "Implement local data storage using Room/SQLite",
      "Add search functionality and data filtering features"
    ],
    learnings: [
      "Android development fundamentals",
      "Java/Kotlin programming for mobile",
      "Android UI/UX components",
      "Local data persistence",
      "App lifecycle management"
    ],
    icon: "Smartphone",
    logo: undefined // Add android logo when available
  },
  {
    id: "java-development",
    title: "Java Development Internship",
    duration: "1 Month",
    description: "Learn Java fundamentals, OOP, file handling, and build console + mini GUI applications.",
    skills: ["Core Java", "OOP", "File Handling", "Java Swing", "JavaFX"],
    tasks: [
      "Implement OOP concepts with 3 classes + interfaces",
      "Build a small console-based project (like Library or Billing System)",
      "Create a mini Java Swing or JavaFX project with basic UI"
    ],
    learnings: [
      "Core Java programming fundamentals",
      "Object-oriented programming principles",
      "File input/output operations",
      "GUI development with Swing/JavaFX",
      "Exception handling and debugging"
    ],
    icon: "Coffee",
    logo: "/src/assets/internship-logos/java-logo.png"
  },
  {
  id: "cloud-computing",
  title: "Cloud Computing Internship",
  duration: "1 Month",
  description: "Understand cloud basics, deployment models, and get hands-on with AWS or Azure beginner services.",
  skills: ["Cloud Basics", "AWS Basics", "IAM", "S3 Storage"],
  tasks: [
    "Understand IaaS, PaaS, SaaS concepts",
    "Create an AWS account and explore services",
    "Upload files to S3 bucket",
    "Create and manage IAM users"
  ],
  learnings: [
    "What is cloud computing",
    "Cloud service models",
    "Basics of AWS services",
    "Storage & permissions management"
  ],
  icon: "Cloud",
  logo: "/src/assets/internship-logos/CloudComputing_logo.jpg"
},
{
  id: "devops",
  title: "DevOps Internship",
  duration: "1 Month",
  description: "Learn DevOps fundamentals including Git, CI/CD basics, Docker introduction, and automation concepts.",
  skills: ["Git", "GitHub", "CI/CD Basics", "Docker Basics"],
  tasks: [
    "Learn Git commands and push code to GitHub",
    "Create a basic CI workflow using GitHub Actions",
    "Run a simple application using Docker",
    "Understand DevOps lifecycle and tools"
  ],
  learnings: [
    "Version control with Git",
    "How CI/CD pipelines work",
    "Basic Docker commands",
    "Automation fundamentals"
  ],
  icon: "Wrench",
  logo: "/src/assets/internship-logos/DevOps_logo.png"
},
{
  id: "dsa-java",
  title: "DSA in Java Internship",
  duration: "1 Month",
  description: "Master important Data Structures and Algorithms using Java with hands-on problem solving.",
  skills: ["Java Basics", "Arrays", "LinkedList", "Recursion", "Sorting"],
  tasks: [
    "Solve DSA questions on arrays and strings",
    "Implement stacks and queues in Java",
    "Practice recursion-based problems",
    "Solve sorting and searching questions"
  ],
  learnings: [
    "Time complexity basics",
    "Core data structures in Java",
    "Problem-solving approach",
    "Using Java collections"
  ],
  icon: "Layers",
  logo: "/src/assets/internship-logos/DSAinJAVA_logo.png"
},
{
  id: "computer-networks",
  title: "Computer Networks Internship",
  duration: "1 Month",
  description: "Learn the fundamentals of computer networking with hands-on understanding of IP addressing, routing, protocols, and network troubleshooting.",
  skills: ["Networking Basics", "OSI Model", "TCP/IP", "IP Addressing", "Subnetting", "Routing & Switching"],
  tasks: [
    "Create a network diagram using basic topology",
    "Perform IP addressing and subnetting exercises",
    "Simulate routing between networks using Cisco Packet Tracer",
    "Analyze packets using Wireshark",
    "Build a mini LAN setup with static routing"
  ],
  learnings: [
    "Understanding OSI & TCP/IP models",
    "IP addressing, subnetting, and supernetting",
    "Basics of routers, switches, and LAN/WAN",
    "Packet flow and troubleshooting using tools",
    "Hands-on networking simulation"
  ],
  icon: "Network",
  logo: "/src/assets/internship-logos/ComputerNetwork_logo.jpg"
},
{
  id: "linux-fundamentals",
  title: "Linux Fundamentals Internship",
  duration: "1 Month",
  description: "Get hands-on experience with Linux OS, essential commands, file management, permissions, and shell scripting.",
  skills: ["Linux CLI", "File System Navigation", "Permissions", "Shell Scripting", "Package Management"],
  tasks: [
    "Learn and practice 50+ basic Linux commands",
    "Create and manage files, directories, and permissions",
    "Write simple shell scripts for automation",
    "Install and configure software packages",
    "Manage system processes and services"
  ],
  learnings: [
    "Linux terminal navigation",
    "User & group management",
    "File permissions (rwx)",
    "Basic shell scripting",
    "Package installation & system monitoring"
  ],
  icon: "Terminal",
  logo: "/src/assets/internship-logos/linux_logo.jpg"
},
{
  id: "git-github",
  title: "Git & GitHub Internship",
  duration: "1 Month",
  description: "Learn version control using Git and GitHub, including repositories, commits, branches, merging, and collaboration workflows.",
  skills: ["Git Basics", "GitHub", "Branching", "Merging", "Version Control"],
  tasks: [
    "Initialize a Git repository and make first commits",
    "Push a project to GitHub with proper structure",
    "Create and merge branches using Git workflow",
    "Resolve merge conflicts",
    "Create a collaborative repository with pull requests"
  ],
  learnings: [
    "Understanding Git workflow",
    "Using Git commands efficiently",
    "Working with GitHub repositories",
    "Handling conflicts and merging",
    "Collaborating using pull requests"
  ],
  icon: "GitBranch",
  logo: "/src/assets/internship-logos/GitNgithub_logo.jpg"
}
];
