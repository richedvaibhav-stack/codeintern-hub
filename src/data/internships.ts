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
    id: "cpp-development",
    title: "C++ Development Internship",
    duration: "1 Month",
    description: "Dive deep into C++ programming and object-oriented concepts. Master data structures and problem-solving skills essential for software development.",
    skills: ["C++", "OOP", "Data Structures", "Algorithm Design"],
    tasks: [
      "Implement fundamental data structures (Stack, Queue, Linked List)",
      "Solve 5 algorithmic problem-solving challenges",
      "Build a command-line mini project using OOP principles"
    ],
    learnings: [
      "Advanced C++ programming concepts",
      "Object-oriented programming patterns",
      "Data structure implementation and usage",
      "Algorithm optimization techniques",
      "Memory management and pointers"
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
  }
];
