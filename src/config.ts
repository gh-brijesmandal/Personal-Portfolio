export const siteConfig = {
  name: "Brijes Mandal",
  title: "Aspiring Computer Engineer",
  description: "Portfolio website - Brijes Mandal",
  accentColor: "#1d4ed8",
  social: {
    email: "brijes.mandal01@gmail.com",
    linkedin: "https://www.linkedin.com/in/brijes-mandal-5648a632a/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/gh-brijesmandal/",
  },
  aboutMe:
    "Hi, I’m Brijes Mandal, a Computer Engineering student at Mississippi State University who loves exploring the world of technology. I’m especially interested in data networks, hardware design, software development, and robotics, and I enjoy learning how these areas connect to solve real problems. I like working on projects that challenge me to grow and push my skills further, and I’m always excited to dive into something new.!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "MongoDB", "Git/Github", "Pandas", "Scikit-Learn", "KiCAD", "Digital Devices Design", "C++"],
  projects: [
    {
      name: "Full Stack Registration Portal",
      description:
        "Built a full stack registration portal for a non-profit club that allows people to register for the club, and has an integrated admin panel which allows admins to approve or reject applicants, as well as see their uploaded documents and information.",
      link: "https://registration-portal-1rfh.onrender.com/",
      skills: ["Express", "Node.js", "MongoDB"],
    },
    {
      name: "Pyvisa Automation",
      description:
        "Wrote a python script for a chemistry research lab to automate the V, I, L.I, and other several data collection process from Keithley Machine using PyVISA and created graphs of the each results and correlations using seaborn. Stored the resulting data in properly formatted excel files using Pandas.",
      link: "https://github.com/gh-brijesmandal",
      skills: ["Pandas", "NumPY", "Matplotlib.pyplot", "Seaborn", "PyVISA"],
    },
    {
      name: "Chat App",
      description:
        "Developed a Desktop chat app where you can chat using python sockets module and Tkinter.",
      link: "https://github.com/gh-brijesmandal",
      skills: ["Python", "Sockets Programming ", "Tkinter"],
    },
  ],
  experience: [
    {
      company: "Gangishetty Lab - Department of Chemistry",
      title: "Undergraduate Student Researcher",
      dateRange: "May 2025 - Present",
      bullets: [
        "Planned and developed a PCB for solar powered drones.",
        "Assited with making PCB's for testing Lab made LED components.",
        "Wrote various python pyvisa scripts for automating working with Keithley.",
      ],
    },
    {
      company: "Department of Electrical Engineering at Msstate",
      title: "Undergraduate Student Volunteer",
      dateRange: "Jan 2024 - Apr 2024",
      bullets: [
        "Wrote several Typescript modules to improve markdown functionality.",
        "Wrote test cases in Rust for the CodeChat Editor extension.",
      ],
    },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "Mississippi State University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "3.9 GPA",
        // "Dean's List all semesters",
        "President's List",
        "Classes: Data Structures and Algorithms, Digital Devices and Logic Design, Data Wrangling, Intermediate Computer Programming, Calculus"
      ],
    },
    {
      school: "Udemy",
      degree: "Full Stack Development Certificate by Angela Yu",
      dateRange: "2024-2025",
      achievements: [
        "Completed 60+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
