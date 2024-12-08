import {
    mobile,
    divyam,
    // backend,
    // creator,
    fullstack,
    aws,
    apacheairflow,
    nextjs,
    artbox,
    // web,
    // javascript,
    vizdoom,
    pytorch,
    cpp,
    typescript,
    mysql,
    reactjs,
    flutter,
    nodejs,
    mongodb,
    // git,
    // docker,
    python,
    azure,
    tensorflow,
    hackhound,
    smartypants,
    fitflex,
    GDSC,
    ai,
    systems,
    carnn,
    irkan,
    anurag,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "OverView",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact/Profiles",
    },
  ];
  
  const services = [
    {
      title: "AI/ML Developer",
      icon: ai,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Systems & Logic Building",
      icon: systems,
    },
    {
      title: "Full-Stack Developer",
      icon: fullstack,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "Aws",
      icon: aws,
    },
    {
      name: "apacheairflow",
      icon: apacheairflow,
    },
    {
      name: "typescript",
      icon: typescript,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "react",
      icon: reactjs,
    },
    {
      name: "nodejs",
      icon: nodejs,
    },
    {
      name: "Next",
      icon: nextjs,
    },
    {
      name: "mongo",
      icon: mongodb,
    },
    
  ];
  
  const experiences = [
    {
      title: "Artificial Intelligence / Machine Learning Lead",
      company_name: "HackHound",
      icon: hackhound,
      iconBg: "#383E56",
      date: "June 2024 - July 2025",
      points: [
        "Trained a Vision Transformer and educated peers on Deep Learning concepts.",
        "Developed a full-stack web application using Next.js, React.js, MongoDB, and TensorFlow.",
        "Organized major college events, including SpectrumSync, HackHound 2.0.", 
        "Collaborated with team members to ensure smooth execution of AI/ML projects and activities.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "GDSC Core Member, SRM IST Delhi NCR",
      icon: GDSC,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2024",
      points: [
        "Collaborated on data science and analytics projects with the GDSC lead.",
        "Achieved Top 5 at a Research Summit with a project on UAV Drones.",
        "Contributed to coding excellence, ranking among the Top 50 coders of all time on campus according to GeeksForGeeks statistics.",
        "Provided expertise in AI/ML to support innovative projects and team activities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He excels in web development, with strong proficiency in front-end and back-end technologies. His expertise in building robust, scalable, and user-friendly applications showcases a deep understanding of modern frameworks and tools. His practical experience makes him a valuable asset in the field.",
      name: "Divyam Agarwal",
      designation: "Core Member at AICTE",
      company: "Placement Cell SRM IST DELHI NCR",
      image: divyam,
    },
    {
      testimonial:
        "You are pretty competent and skillful. You work pretty hard and don't stop until the problem is solved or you get the desired result. You are willing to learn and keep an open mind to solve problems",
      name: "Irkan A. Saifi",
      designation: "President at Gamer's Creed",
      company: "Gamers Creed SRM IST DELHI NCR",
      image: irkan,
    },
    {
      testimonial:
        "Arya is a skilled developer known for his expertise, creativity, and commitment to excellence. His deep understanding of programming concepts and proficiency in various tools enable him to deliver high-quality, innovative solutions. With strong collaboration skills and a passion for staying updated on new technologies, he is an invaluable asset to any team.",
      name: "Anurag Parashar",
      designation: "Relations Lead",
      company: "GFG SRM IST DELHI NCR",
      image: anurag,
    },
  ];
  
  const projects = [
    {
      name: "Smarty Pants",
      description:
        "Building a web app with AI and blockchain, specializing in building scalable, user-centric solutions like a centralized learning platform for Smart India Hackathon 2024 using React, Next.js, TypeScript, Pytorch, Generative AI and machine learning frameworks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "yellow-text-gradient",
        },
        {
          name: "tensorflow",
          color: "orange-text-gradient",
        },
        {
          name: "gemini",
          color: "purple-text-gradient",
        },
        
      ],
      image: smartypants,
      source_code_link: "https://github.com/Movazed/SmartyPants",
    },
    {
      name: "Art Box",
      description:
        "AI Tattoo Generation: Leverage machine learning to create unique tattoo designs. Customizable Designs: Modify and adjust AI-generated tattoos to fit personal preferences. User-Friendly Interface: Intuitive UI for ease of use",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "dart",
          color: "pink-text-gradient",
        },
        {
          name: "imagine_api",
          color: "yellow-text-gradient",
        },
      ],
      image: artbox,
      source_code_link: "https://github.com/Movazed/Art-Box/tree/master",
    },
    {
      name: "Fit Flex",
      description:
        "FitFlex is your ultimate fitness companion, built with Flutter and Express.js for seamless performance. Track workouts, set goals, and monitor progress effortlessly. Customize routines, nutrition plans, and fitness levels for a personalized experience.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
        {
          name: "sql",
          color: "orange-text-gradient",
        },
        {
          name: "figma",
          color: "purple-text-gradient",
        },
      ],
      image: fitflex,
      source_code_link: "https://github.com/Movazed/FitFlex-with-backend-web/tree/master",
    },
    {
      name: "Reinforcement Learning using VizDoom",
      description:
        "ViZDoom is an AI research platform enabling bots to play Doom using only visual input, ideal for visual learning and deep reinforcement learning. Built on ZDoom, it supports Python and C++ APIs, Gymnasium/Gym wrappers, and custom scenarios with scripting.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "pink-text-gradient",
        },
        {
          name: "neural_network",
          color: "yellow-text-gradient",
        },

      ],
      image: vizdoom,
      source_code_link: "https://github.com/Movazed/Reinforcement-Learning-using-Doom-3D-version",
    },
    {
      name: "Tokyo Olympics Data Engineering using Azure",
      description:
        "The Tokyo 2020 Olympics (held in 2021) generated massive volumes of data, from live event results to audience engagement and social media analytics. This project focuses on using Microsoft Azure as a platform for data engineering to manage, process, and analyze this data to provide insights into performance, audience behavior, and event operations.",
      tags: [
        {
          name: "azure",
          color: "blue-text-gradient",
        },
        {
          name: "databricks",
          color: "green-text-gradient",
        },
        {
          name: "crawlers",
          color: "pink-text-gradient",
        },
      ],
      image: azure,
      source_code_link: "https://github.com/Movazed/Tokyo-Olympics-Data-Engineering-using-Azure",
    },
    {
      name: "Building a Self Driving Car Neural Network in JS",
      description:
        "Convolutional Neural Networks (CNNs) are used for object detection and semantic segmentation, while reinforcement learning enables decision-making and path planning. The system aims to enhance vehicle autonomy by allowing it to safely navigate complex environments without human intervention",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CNN",
          color: "green-text-gradient",
        },
        {
          name: "logics and neural networks",
          color: "pink-text-gradient",
        },
      ],
      image: carnn,
      source_code_link: "https://github.com/Movazed/Self_Driving_Cars_Using_JavaScript_and_Neural-_Netorking_and_Machine_Learning",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };