import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

// TypeScript interfaces
export interface CurrentFocusItem {
  title: string;
  description: string;
  icon: string; // Icon name or path
  technologies: string[];
  category: 'workflows' | 'ai-agents' | 'ml-architectures' | 'devops-pipelines' | 'open-source';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  type: 'current' | 'completed';
}

// AI/ML Skills - Priority 1
export const AI_ML_SKILLS = [
  {
    skill_name: "Python",
    image: "Python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "keras.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "PyTorch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-Learn",
    image: "scikit-learn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    image: "OpenCV.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "Pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NumPy",
    image: "NumPy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jupyter",
    image: "Jupyter.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "R Studio",
    image: "RStudio.png",
    width: 80,
    height: 80,
  },
] as const;

// DevOps Skills - Priority 2
export const DEVOPS_SKILLS = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "Kubernetes.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Linux",
    image: "Linux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Arch Linux",
    image: "Arch Linux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    image: "Git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "GitHub.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "AWS.png",
    width: 80,
    height: 80,
  },
] as const;

// Programming Languages - Priority 3
export const PROGRAMMING_LANGUAGES = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "Java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "C++ (CPlusPlus).png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "C.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 80,
    height: 80,
  },
] as const;

// Web Development Skills - Priority 4 (Minimized)
export const WEB_DEV_SKILLS = [
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "Flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "FastAPI.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

// Database Skills
export const DATABASE_SKILLS = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgresSQL",
    image: "PostgresSQL.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Oracle",
    image: "Oracle.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 80,
    height: 80,
  },
] as const;

// Design & UI Tools
export const DESIGN_SKILLS = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

// Other Tools & Services
export const OTHER_TOOLS = [
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Swagger",
    image: "Swagger.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 80,
    height: 80,
  },
] as const;

// Combined skills data for backward compatibility
export const SKILL_DATA = [
  ...AI_ML_SKILLS,
  ...DEVOPS_SKILLS,
  ...PROGRAMMING_LANGUAGES,
  ...WEB_DEV_SKILLS,
  ...DATABASE_SKILLS,
  ...DESIGN_SKILLS,
  ...OTHER_TOOLS,
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/KoushikScripts",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/suryakoushik",
  },
] as const;

// Skill categories with metadata
export const SKILL_CATEGORIES = [
  {
    title: "Tech Stack",
    skills: [
      ...AI_ML_SKILLS,
      ...DEVOPS_SKILLS,
      ...PROGRAMMING_LANGUAGES,
      ...WEB_DEV_SKILLS,
      ...DATABASE_SKILLS,
      ...DESIGN_SKILLS,
      ...OTHER_TOOLS,
    ],
    priority: 1,
    emphasis: "unified",
  },
] as const;

// Legacy arrays for backward compatibility (deprecated)
export const FRONTEND_SKILL = WEB_DEV_SKILLS;
export const BACKEND_SKILL = [] as const;
export const AI_ML_SKILL = AI_ML_SKILLS;
export const OTHER_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "Dance Move Insight - Real-time Dance Pose Analysis API",
    description: "Developed REST API for real-time dance pose detection using MediaPipe and OpenCV, processing videos up to 100MB across multiple formats. Engineered pose classification system detecting 7 distinct dance moves through landmark coordinate analysis and geometric angle calculations. Deployed containerized Flask application on AWS ECS with Docker.",
    image: "/projects/project-1.webp",
    link: "https://github.com/KoushikScripts",
    technologies: ["Python", "Flask", "MediaPipe", "OpenCV", "Docker", "AWS"],
    date: "September 2025",
    category: "ai-ml" as const,
  },
  {
    title: "ARISE - AI-based Resume Intelligence and Scoring Engine",
    description: "Built an intelligent resume evaluation system matching candidates to job descriptions using NLP, semantic similarity analysis, and machine learning classification algorithms. Achieved 96% accuracy on validation data. Integrated LanguageTool API for automated grammar validation and readability analysis.",
    image: "/projects/project-2.webp",
    link: "https://github.com/KoushikScripts",
    technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "spaCy", "Pandas", "Flask"],
    date: "April 2025",
    category: "ai-ml" as const,
  },
  {
    title: "Deep Facial Verification using Siamese Neural Network",
    description: "Engineered a Siamese Neural Network for deep facial verification, achieving 99.6% accuracy. Trained the model for 1050 epochs using a contrastive loss function to optimize embeddings. Evaluated performance using Euclidean distance, ROC AUC (0.998), and precision-recall metrics.",
    image: "/projects/project-3.webp",
    link: "https://github.com/KoushikScripts",
    technologies: ["TensorFlow", "Keras", "CUDA"],
    date: "March 2023",
    category: "ai-ml" as const,
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Professional",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/KoushikScripts",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/suryakoushik",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: MdEmail,
        link: "mailto:red@nskr.me",
      },
      {
        name: "Phone",
        icon: MdPhone,
        link: "tel:+91 9573784888",
      },
    ],
  },
] as const;

// Current Focus data
export const CURRENT_FOCUS: CurrentFocusItem[] = [
  {
    title: "N8N Workflows",
    description: "Building automated workflows for data processing and AI model deployment, streamlining complex business processes through intelligent automation.",
    icon: "🔄",
    technologies: ["N8N", "API Integration", "Automation", "Webhooks"],
    category: "workflows",
  },
  {
    title: "AI Agents Development",
    description: "Creating intelligent agents for various automation tasks, focusing on conversational AI and task-specific automation solutions.",
    icon: "🤖",
    technologies: ["LangChain", "OpenAI API", "Python", "RAG"],
    category: "ai-agents",
  },
  {
    title: "ML Architectures",
    description: "Exploring advanced machine learning architectures including transformer models, neural networks, and deep learning frameworks.",
    icon: "🧠",
    technologies: ["TensorFlow", "PyTorch", "Transformers", "CUDA"],
    category: "ml-architectures",
  },
  {
    title: "DevOps Pipelines",
    description: "Designing and implementing CI/CD pipelines, containerization strategies, and infrastructure automation for scalable deployments.",
    icon: "⚙️",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
    category: "devops-pipelines",
  },
  {
    title: "Open-Source Contributions",
    description: "Contributing to open-source projects in AI/ML and DevOps domains, sharing knowledge and collaborating with the developer community.",
    icon: "🌟",
    technologies: ["Git", "GitHub", "Python", "Documentation"],
    category: "open-source",
  },
] as const;

// Certifications data
export const CERTIFICATIONS: Certification[] = [
  {
    title: "Data Science Capstone - Edx (HarvardX)",
    issuer: "Harvard University",
    date: "July 2025",
  },
  {
    title: "Data Analysis using Python | Cognitiveclass IBM",
    issuer: "IBM",
    date: "March 2025",
  },
  {
    title: "Career Essentials in System Administration | Microsoft",
    issuer: "Microsoft",
    date: "January 2023",
  },
] as const;

// Experience data
export const EXPERIENCE: Experience[] = [
  {
    title: "AI Agent Innovations Intern",
    company: "Skin Seoul, Singapore",
    duration: "July 2025 - September 2025",
    achievements: [
      "Automated 20+ API integrations and optimized AI agent workflows on n8n platform, reducing manual tasks by 40%",
      "Collaborated with cross-functional teams to deliver automated solutions, saving teams 15+ hours per week",
      "Analyzed and improved agent performance using real data, increasing workflow success rate to 98%"
    ],
    technologies: ["n8n", "API Integration", "Python", "Automation"]
  }
] as const;

// Education data
export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "August 2024 - Present",
    type: "current"
  },
  {
    degree: "Data Science using Python Programming",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    duration: "September 2022 - March 2023",
    type: "completed"
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "Visakha Defence Academy",
    location: "Visakhapatnam, India",
    duration: "June 2019 - April 2023",
    type: "completed"
  },
  {
    degree: "Intermediate (12th grade)",
    institution: "Visakha Defence Academy",
    location: "Visakhapatnam, India",
    duration: "June 2017 - May 2019",
    type: "completed"
  }
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Current Focus",
    link: "#current-focus",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


