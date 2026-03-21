export const profileData = {
  name: "Sreya Datta Gupta",
  title: "AI/ML Engineer & Full-Stack Developer",
  roles: [
    "AI/ML Engineer",
    "System Diagnostics Developer",
    "Research Scientist",
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Cloud Architect",
  ],
  summary:
    "An ardently passionate and relentlessly curious technologist specializing in AI/ML with a deep-rooted fascination for how intelligent systems can transform the world. Every line of code I write is driven by an insatiable enthusiasm to push boundaries — from genomic research to full-stack systems. I don't just build software; I build solutions that matter.",
  email: "dsreya799@gmail.com",
  phone: "+917005040213",
  github: "https://github.com/sreyadattagupta",
  linkedin: "https://www.linkedin.com/in/Sreya-Datta-Gupta",
  location: "West Bengal, India",

  education: [
    {
      degree: "B.Tech CSE — AI/ML Specialization",
      institution: "Adamas University",
      period: "2023 – 2027",
      score: "7.89 CPI",
    },
    {
      degree: "Class 12th CBSE",
      institution: "CBSE Board",
      period: "2023",
      score: "70%",
    },
    {
      degree: "Class 10th ICSE",
      institution: "ICSE Board",
      period: "2021",
      score: "84%",
    },
  ],

  experience: [
    {
      role: "System Monitoring & Diagnostics Intern",
      company: "Electronic Test & Development Centre (ETDC)",
      product: "System Scanner — Production-oriented system monitoring tool",
      period: "June 2025 – July 2025",
      points: [
        "Developed a cross-platform system diagnostics tool supporting Windows, Linux, and macOS to analyze CPU, BIOS, TPM, storage, and I/O peripherals integrating hardware and OS-level data pipelines using Python.",
        "Integrated low-level system calls and subprocess orchestration, enabling deep hardware introspection beyond standard APIs.",
        "Designed automated report generation system (PDF, Excel, HTML) using pandas and FPDF, reducing manual documentation effort by 80%.",
        "Implemented real-time system introspection using psutil, WMI, dmidecode, PowerShell, sysctl for CPU/memory/disk/GPU/network/BIOS.",
        "Achieved <5% CPU usage and <150MB memory footprint on low-spec systems.",
      ],
    },
  ],

  skills: {
    languages: ["Python", "JavaScript", "SQL", "Bash", "Java", "JSON", "YAML", "Markdown"],
    cloud: ["Google Cloud", "AWS", "Azure", "Cloud Deployment", "CI/CD", "IAM", "Automation"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "TensorFlow", "Keras", "LangChain"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Vercel", "Pandas", "FPDF", "psutil", "WMI"],
  },

  achievements: [
    {
      icon: "🏆",
      title: "Conference Paper — HUMAN-2026",
      desc: "Authored a research paper on identifying Parkinson's Disease using genomic data. Accepted for oral presentation at the 4th Doctoral Symposium on Human Centered Computing.",
    },
    {
      icon: "☁️",
      title: "Google Cloud Foundations Badges",
      desc: "Earned badges for Google Cloud Computing Foundations: Data, ML and AI in Google Cloud and Networking and Security in Google Cloud.",
    },
    {
      icon: "💻",
      title: "200+ DSA Solutions",
      desc: "Solved 200+ Data Structures & Algorithms questions on LeetCode, GeeksForGeeks, and other competitive coding platforms.",
    },
    {
      icon: "🔬",
      title: "Parkinson's Research — 95.54% Accuracy",
      desc: "Developed a hybrid LASSO–ANN pipeline for Parkinson's disease classification achieving >95% validation accuracy with high recall across 5 multi-cohort GEO transcriptomic datasets.",
    },
    {
      icon: "🚀",
      title: "CI/CD Deployment — Attendify",
      desc: "Engineered a full Continuous Deployment pipeline integrating GitHub with Vercel, automating the build process for zero-downtime production releases.",
    },
    {
      icon: "🤖",
      title: "AI Impact Summit — Delhi 2026",
      desc: "Participated in the AI Impact Summit Industrial Visit & Training in Delhi, deepening expertise in cutting-edge AI/ML industry applications.",
    },
  ],
};

export const featuredProjects = [
  // ──── FEATURED / FLAGSHIP ────
  {
    name: "Parkinson's Disease Classification — LASSO + Deep Neural Network",
    description:
      "Published research project: Hybrid LASSO–ANN pipeline for Parkinson's classification using 5 multi-cohort GEO transcriptomic datasets (~20,000+ genes → 32 biomarkers). Achieved >95% validation accuracy (GSE99039: 95.54%, high recall ≈1.0) using TensorFlow/Keras with GPU acceleration. Modular EDA → preprocessing → training → evaluation pipeline.",
    language: "Jupyter Notebook",
    tags: ["TensorFlow", "LASSO", "Bioinformatics", "Python", "Genomics", "Research"],
    url: "https://github.com/sreyadattagupta/Reasearch_Genomic",
    stars: 0,
    forks: 2,
    featured: true,
    badge: "📜 Research Paper",
  },
  {
    name: "Attendify — Smart QR-Based Attendance System",
    description:
      "Production full-stack Attendance Management System with Node.js backend + Vanilla HTML/JS frontend. Features Role-Based Access Control (RBAC), JWT Authentication, node-cron automation for daily absences, and dynamic time-limited QR code generation. Deployed live with Vercel CI/CD pipeline.",
    language: "HTML",
    tags: ["Node.js", "JWT", "QR Code", "CI/CD", "Vercel", "RBAC"],
    url: "https://github.com/sreyadattagupta/attendance2",
    homepage: "https://attendance2-seven.vercel.app/",
    stars: 0,
    forks: 0,
    featured: true,
    badge: "🚀 Live",
  },
  {
    name: "System Scanner — Cross-Platform Hardware Diagnostics Tool",
    description:
      "ETDC internship production tool: cross-platform system monitoring (Windows/Linux/macOS) using Python. Integrates hardware-level data pipelines via psutil, WMI, dmidecode, PowerShell, sysctl. Automated report generation in PDF/Excel/HTML (pandas + FPDF). <5% CPU usage, <150MB footprint even on low-spec systems.",
    language: "Python",
    tags: ["Python", "psutil", "WMI", "Cross-Platform", "ETDC", "Hardware"],
    url: "https://github.com/sreyadattagupta/system-scanner",
    stars: 0,
    forks: 0,
    featured: true,
    badge: "🏢 Internship",
  },

  // ──── AI / ML ────
  {
    name: "Disease Prediction via Gene Expression Data",
    description:
      "End-to-end ML pipeline for multi-disease prediction from high-dimensional gene expression data. Applies PCA/UMAP for dimensionality reduction, ensemble classifiers (Random Forest, XGBoost, ANN), and SHAP-based interpretability. Focused on reproducible, clinically actionable bioinformatics workflows.",
    language: "Jupyter Notebook",
    tags: ["ML", "Genomics", "XGBoost", "SHAP", "Neural Networks", "Python"],
    url: "https://github.com/sreyadattagupta/Disease-Prediction-Using-Gene-Expression-Data",
    stars: 0,
    forks: 1,
    featured: false,
  },
  {
    name: "LLM Chatbot — LangChain Powered Conversational AI",
    description:
      "Production-ready conversational chatbot built on LangChain + Google/OpenAI LLMs. Features context-aware multi-turn conversations, memory management, custom prompt engineering, and cloud API integration. Demonstrates RAG (Retrieval-Augmented Generation) architecture for grounded responses.",
    language: "Python",
    tags: ["LangChain", "LLM", "RAG", "Python", "AI", "NLP"],
    url: "https://github.com/sreyadattagupta/LLM-Chatbot",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "Gender Detection — Facial CNN with Real-Time Inference",
    description:
      "Deep learning model for real-time facial gender detection using Convolutional Neural Networks. Built with TensorFlow/Keras, trained on diverse datasets with data augmentation. Includes OpenCV integration for webcam inference, achieving >93% test accuracy with efficient model compression.",
    language: "Jupyter Notebook",
    tags: ["CNN", "TensorFlow", "OpenCV", "Computer Vision", "Python"],
    url: "https://github.com/sreyadattagupta/GenderDetection",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "Kidney Disease Prediction — Clinical ML Diagnostics",
    description:
      "Early-stage chronic kidney disease (CKD) prediction using ensemble ML. Implements feature selection with correlation analysis, handles class imbalance via SMOTE, and benchmarks Random Forest, SVM, and Gradient Boosting. Focuses on high recall for medical-grade sensitivity in diagnostic systems.",
    language: "Jupyter Notebook",
    tags: ["ML", "Healthcare", "SMOTE", "Random Forest", "SVM", "Python"],
    url: "https://github.com/sreyadattagupta/KidneyDiseasePrediction",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "AgroAI — Precision Agriculture Intelligence Platform",
    description:
      "AI-powered smart farming system combining crop disease detection via CNN (PlantVillage dataset), soil parameter analysis, and weather-aware crop recommendations. Includes a RESTful API backend and intuitive dashboard. Addresses food security challenges using computer vision and data science.",
    language: "Jupyter Notebook",
    tags: ["Computer Vision", "CNN", "Agriculture", "Python", "REST API"],
    url: "https://github.com/sreyadattagupta/AgroAI",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "AI Video Editor — Intelligent Clip Processing Pipeline",
    description:
      "Automated AI-driven video editing pipeline built with Python and Jupyter. Uses scene detection, frame analysis, and ML-based content scoring to auto-trim and sequence clips. Designed for content creators needing rapid, intelligent video post-processing without manual editing.",
    language: "Jupyter Notebook",
    tags: ["Python", "Computer Vision", "Video Processing", "AI", "Automation"],
    url: "https://github.com/sreyadattagupta/ai-video-editor",
    stars: 0,
    forks: 0,
    featured: false,
  },

  // ──── FULL-STACK / WEB ────
  {
    name: "Future-Forward Health — Smart Hospital Portal",
    description:
      "Healthcare appointment booking web platform with seamless scheduling UI, personalized WhatsApp reminder notifications before appointments, doctor profile listings, and a responsive mobile-first design. Built with HTML/CSS/JS — a complete patient management frontend solution.",
    language: "HTML",
    tags: ["HTML", "CSS", "JavaScript", "Healthcare", "WhatsApp API"],
    url: "https://github.com/sreyadattagupta/Future-forward-Health",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "Todo App — Productivity Task Manager",
    description:
      "Clean, minimalist task management application deployed live on Vercel. Features real-time add/edit/delete/complete task actions, local storage persistence, smooth CSS transitions, and an intuitive mobile-responsive UI. A solid showcase of vanilla JS DOM manipulation and clean UX principles.",
    language: "HTML",
    tags: ["HTML", "CSS", "JavaScript", "Productivity", "Vercel"],
    url: "https://github.com/sreyadattagupta/todo",
    homepage: "https://todo-tau-nine-96.vercel.app",
    stars: 0,
    forks: 0,
    featured: false,
  },

  // ──── ANIME / CREATIVE ────
  {
    name: "Doraemon Adventure — Browser-Based Anime Game",
    description:
      "Fully playable browser-based adventure game inspired by the Doraemon anime, deployed live on Vercel. Features sprite animations, keyboard controls, collision detection, animated scene transitions, and original game logic — all built from scratch with vanilla JS and HTML5 Canvas.",
    language: "HTML",
    tags: ["HTML5 Canvas", "JavaScript", "Game Dev", "Anime", "Vercel"],
    url: "https://github.com/sreyadattagupta/DOREMON-ADVENTOURE",
    homepage: "https://doremon-adventoure.vercel.app",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "Shinchan Comic Book Landing Page",
    description:
      "Animated, immersive comic-book style landing page for Shinchan, deployed live on Vercel. Features scroll-triggered animations, vibrant manga-inspired color palette, parallax effects, and interactive hover states — blending anime aesthetics with modern CSS animation techniques.",
    language: "HTML",
    tags: ["HTML", "CSS", "Animation", "Anime", "Vercel"],
    url: "https://github.com/sreyadattagupta/shinchan-comic-book-landing-page",
    homepage: "https://shinchan-comic-book-landing-page.vercel.app",
    stars: 0,
    forks: 0,
    featured: false,
  },

  // ──── DSA / ALGORITHMS ────
  {
    name: "DSA Practice Repository — Basic to Advanced",
    description:
      "Comprehensive 200+ problem DSA preparation repo in Java, covering Arrays, LinkedLists, Trees, Graphs, Dynamic Programming, Sliding Window, Backtracking, and Heaps. Each solution includes time/space complexity analysis and reflects consistent competitive coding practice across LeetCode and GFG.",
    language: "Java",
    tags: ["Java", "DSA", "Algorithms", "LeetCode", "Competitive Coding"],
    url: "https://github.com/sreyadattagupta/DSA-PRACTICE-",
    stars: 0,
    forks: 0,
    featured: false,
  },

  // ──── OPEN SOURCE / CONTRIB ────
  {
    name: "Hive — Agent Development Framework (Fork + Contribution)",
    description:
      "Contributed to Hive, an outcome-driven autonomous agent development framework (Apache 2.0). Explored multi-agent orchestration patterns, studied agent memory and tool-binding architectures. Demonstrates active engagement with cutting-edge LLM-based agentic systems research.",
    language: "Python",
    tags: ["Open Source", "Agents", "LLM", "Framework", "AI"],
    url: "https://github.com/sreyadattagupta/hive",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    name: "AI Impact Summit — Delhi 2026 Documentation",
    description:
      "Technical documentation and hands-on tasks from the AI Impact Summit Industrial Visit & Training, Delhi 2026. Includes exposure to enterprise AI/ML deployments, cloud infrastructure, and industry-grade LLM pipelines across major tech organizations.",
    language: "Markdown",
    tags: ["AI", "Industry", "Cloud", "Documentation", "Research"],
    url: "https://github.com/sreyadattagupta/AI-impact-summit---Industrial-visit---Training--Delhi--26",
    stars: 0,
    forks: 0,
    featured: false,
  },
];
