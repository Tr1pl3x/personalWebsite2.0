export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 999,
    title: "Projects and Assignments",
    description:
      "My Coursework from Computer Engineering courses at UNSW",
    image: "/project/unsw.jpg?height=300&width=500&text=git",
    tags: ["C/C++", "Java","Js/Ts", "HTML/CSSS", "VHDL/Verilog", "MIPS", "Machine Learning"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "",
  },
  {
    id: 7,
    title: "My Macros App",
    description:
      "I created a little full stack app to estimate my macros using claude ai api.",
    image: "/project/mymacros.jpg?height=300&width=500&text=git",
    tags: ["NodeJS", "REACT", "HTML/CSSS", "Web Development", "UI/UX", "API"],
    githubUrl: "https://github.com/Tr1pl3x/my-macros",
    liveUrl: "https://my-macros.vercel.app/",
  },
  {
    id: 6,
    title: "Trivia Website",
    description: "A fun little trivia web app to test how well my friends know me while I secretly keep scores in the backend using google api to plot my revenge 😂",
    image: "/project/trivia.jpg?height=300&width=500&text=Portfolio",
    tags: ["React.js", "GoogleAPI", "HTML/CSSS"],
    githubUrl: "https://github.com/Tr1pl3x/trivia-ps",
    liveUrl: "https://trivia-ps.vercel.app/",
  },
  {
    id: 5,
    title: "Movie Diary (frontend)",
    description: "A simple webapp diary to keep track off my latest cinema catches and note down my honest reviews! This is just the frontend of the webapp.",
    image: "/project/movie-diary.jpg?height=300&width=500&text=Task+App",
    tags: ["React", "HTML/CSS", "API"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://movies-diary-pyae.online/",
  },
  {
    id: 4,
    title: "Movie Diary (Backend)",
    description: "This is the source code for backend server of my movie-diary webapp which is powered by monogoDB.",
    image: "/project/git.png?height=300&width=500&text=Task+App",
    tags: ["MongoDB", "Node.js ", "Backend Dev"],
    githubUrl: "https://github.com/Tr1pl3x/backend-my-movie-diary",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This is my portfolio website to showcase about myself, work and skills. Fun Fact: this is my second website to showcase myself :)",
    image: "/project/personal.jpg?height=300&width=500&text=Task+App",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3-demo.com",
  },
  {
    id: 2,
    title: "Bot Alfred",
    description: "Discord bot named Alfred just like the butler of Batman, ready to service your needs!",
    image: "/project/git.png?height=300&width=500&text=Task+App",
    tags: ["Discord API", "JavaScirpt", "Python"],
    githubUrl: "https://github.com/Tr1pl3x/bot-Alfred",
    liveUrl: "",
  },
  {
    id: 1,
    title: "Random Quote Generator ",
    description: "This is a random quote generator with a twist! Every request you make will come with a cat emoji 😹",
    image: "/project/git.png?height=300&width=500&text=Task+App",
    tags: ["Javascript", "HTML/CSS", "API"],
    githubUrl: "https://github.com/Tr1pl3x/Random-Quote-Generator-",
    liveUrl: "",
  },
]
