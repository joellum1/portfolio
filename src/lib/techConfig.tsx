import React from 'react';

import CodeIcon from '@mui/icons-material/Code';


export interface Tech {
  name: string;
  icon: React.ReactNode;
  colour?: string; // Background colour for the card
}

export const techConfig: Record<string, Tech> = {
  // Languages
  'C': {
    name: 'C',
    icon: <CodeIcon />,
    colour: 'bg-blue-600'
  },
  'HTML': {
    name: 'HTML',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />,
  },
  'CSS': {
    name: 'CSS',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />,
  },
  'Java': {
    name: 'Java',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />,
  },
  'JavaScript': {
    name: 'JavaScript',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
  },
  'TypeScript': {
    name: 'TypeScript',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
  },
  'Markdown': {
    name: 'Markdown',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" />,
  },
  'Python': {
    name: 'Python',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
  },
  'Rust': {
    name: 'Rust',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" />,
  },
  'Shell Scripting': {
    name: 'Shell Scripting',
    icon: <CodeIcon />,
    colour: 'bg-blue-600'
  },
  'SQL': {
    name: 'SQL',
    icon: 'devicon-azuresqldatabase-plain',
    colour: 'bg-blue-600'
  },
  
  // Developer Tools
  'AWS': {
    name: 'AWS',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />,
  },
  'Docker': {
    name: 'Docker',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />,
  },
  'Figma': {
    name: 'Figma',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />,
  },
  'Git': {
    name: 'Git',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />,
  },
  'GitHub': {
    name: 'GitHub',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />,
  },
  'GitHub Actions': {
    name: 'GitHub Actions',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />,
  },
  'Jupyter': {
    name: 'Jupyter',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" />,
  },
  'LaTeX': {
    name: 'LaTeX',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" />,
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />,
  },
  'Postman': {
    name: 'Postman',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />,
  },
  'Prisma': {
    name: 'Prisma',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />,
  },
  'Supabase': {
    name: 'Supabase',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />,
  },
  'Swagger': {
    name: 'Swagger',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" />,
  },
  'Terraform': {
    name: 'Terraform',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />,
  },
  'Vercel': {
    name: 'Vercel',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />,
  },
  'ViteJS': {
    name: 'ViteJS',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />,
  },
  'VS Code': {
    name: 'VS Code',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />,
  },
  
  // Collaboration Tools
  'Confluence': {
    name: 'Confluence',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" />,
  },
  'Jira': {
    name: 'Jira',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />,
  },
  'Loom': {
    name: 'Loom',
    icon: <CodeIcon />,
    colour: 'bg-blue-600'
  },
  'Microsoft Suite': {
    name: 'Microsoft Suite',
    icon: <CodeIcon />,
    colour: 'bg-blue-600'
  },
  'Slack': {
    name: 'Slack',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />,
  },

  // Libraries
  'Matplotlib': {
    name: 'Matplotlib',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-plain.svg" />,
  },
  'NumPy': {
    name: 'NumPy',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />,
  },
  'OpenCV': {
    name: 'OpenCV',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" />,
  },
  'Pandas': {
    name: 'Pandas',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />,
  },
  'Scikit-learn': {
    name: 'Scikit-learn',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />,
  },
  
  // Frameworks
  'Next.js': {
    name: 'Next.js',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />,
  },
  'React': {
    name: 'React',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />,
  },
  'TensorFlow': {
    name: 'TensorFlow',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />,
  },
  
  // Add more technologies as needed
};

// Helper function to get a tech by name
export const getTech = (name: string): Tech | undefined => {
  return techConfig[name];
};

// Helper function to get multiple techs
export const getTechs = (names: string[]): Tech[] => {
  return names.map(name => techConfig[name]).filter(Boolean);
};
