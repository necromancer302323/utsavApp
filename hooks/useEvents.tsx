import { debounce } from "lodash";
export interface FullPageEvents {
  url: string;
  name: string;
  details: string;
}
export interface Event extends FullPageEvents {
  category:  "Ai"
  | "DataScience"
  | "MultiMedia"
  |"coding";
}

interface ai extends FullPageEvents{
  catogery:" Machine Learning Engineer"|" Data Scientist"|
  "AI Research Scientist"|"NLP Engineer"|"Computer Vision Engineer"
}

export function useSkillDepartment():FullPageEvents[]{
  return [{
      url: "https://www.brownwinick.com/hubfs/aigenerated.jpg",
      name: "Ai",
      details: "Artificial Intelligence (AI) is revolutionizing the way we live, work, and interact with the world around us. Its benefits are vast and span across virtually every industry, providing us with new tools, opportunities, and solutions to complex problems.",
  },{
    url: "https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg",
    name: "data science",
    details: ` DATA SCIENCE has become an essential tool in many industries, transforming how we understand and interact with the world. It involves the collection, analysis, and interpretation of large sets of data to make informed decisions and solve complex problems. `,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "coding",
    details: "Coding is writing instructions for computers using programming languages like Python, Java, and C++. It’s essential for developing software, websites, apps, and automating tasks across industries.",
  },{
    url: "https://t4.ftcdn.net/jpg/01/98/71/15/360_F_198711504_1HWwag92jQXIRKgyGk2kmOAEP6HWdbmU.jpg",
    name: "multi media",
    details:
      "Multimedia refers to the use of multiple forms of content—such as text, audio, images, video, animation, and interactive elements—to create rich, engaging experiences. It integrates different media types to communicate information or entertain in a more dynamic and immersive way.",
  },

]
}
export function useSkillSubjects(): Event[] {
  return [
    {
      url: "https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg",
      name: "Chatgpt",
      details: "ChatGPT is a conversational AI model developed by OpenAI, designed to engage in human-like dialogue and assist users in a wide variety of tasks, ranging from answering questions to providing writing support, creative content generation, and problem-solving.",
      category: "Ai",
    },
    {
      url: "https://i.insider.com/5ebaeedee3c3fb22cf13fd47?width=1200&format=jpeg",
      name: "Amazon",
      details: "Amazon.com, Inc. is one of the largest and most influential technology and e-commerce companies in the world. Founded by Jeff Bezos in 1994, Amazon has expanded far beyond its roots in online retail to become a global leader in cloud computing, artificial intelligence (AI), digital streaming, logistics, and more.",
      category: "DataScience",
    },
    {
      url: "https://hbkonline.in/pub/media/catalog/product/a/p/apple_fruit_powder3.jpg",
      name: "Apple",
      details: "Apple Inc. is one of the most influential technology companies in the world. It is known for its innovative products, sleek designs, and its impact on various sectors including computing, entertainment, and digital services",
      category: "DataScience",
    },
    {
      url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/5a7fbf15-9b3c-4ec9-a1f1-172ab715d4c5/apple-may-carry-wwdc-hey-siri-upgrade-plan-exposure.jpg?t=1720726375",
      name: "Siri",
      details: " Siri is Apple's voice-activated assistant, integrated into devices like iPhones, iPads, Macs, and HomePods. It uses AI and machine learning to help users perform tasks, retrieve information, and control devices through natural language voice commands",
      category: "Ai",
    },
    {
      url: "https://yt3.googleusercontent.com/IaWgQsxHvV8wWjfGh-h-udUSyjFIT6p_yv3kS6a-QCDI84_6pJIskHsjFMkqnBmIqbuElhZI=s900-c-k-c0x00ffffff-no-rj",
      name: "Nvidia",
      details: "NVIDIA Corporation is a leading American tech company known for its graphics processing units (GPUs) and innovations in artificial intelligence (AI), deep learning, high-performance computing (HPC), and autonomous vehicles. NVIDIA has significantly impacted industries through its advanced hardware and software solutions.",
      category: "Ai",
    },
    {
      url: "https://bymarketers.co/wp-content/uploads/2023/05/notion-for-marketers.jpg",
      name: "Notion",
      details: `With the U.K. in the middle of a general election, speakers at the AI Summit London urged the country's next leaders to maintain the current administration's commitment to AI. `,
      category: "DataScience",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHkuUuKbzWmMaYrdAcaKguAmz7kkby7o8RQ&s",
      name: "Execl",
      details: "Microsoft Excel is one of the most widely used software applications in the world, primarily designed for data organization, analysis, and visualization. As part of the Microsoft Office suite (now part of Microsoft 365), Excel is a powerful tool for handling everything from simple calculations to complex financial modeling, data analysis, and reporting. ",
      category: "DataScience",
    },
    {
      url: "https://www.scdn.co/i/_global/open-graph-default.png",
      name: "spotify",
      details: "Spotify is a leading music streaming service that provides access to a vast library of music, podcasts, and other audio content. Founded in 2006 by Daniel Ek and Martin Lorentzon in Sweden, Spotify revolutionized how people listen to music by offering streaming rather than purchasing tracks or albums. It operates on a freemium model, offering both free and premium subscription tiers. ",
      category: "Ai",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfFpYE1BSrHmF6BqDMdM1nfCdWQWOf5nE9g&s",
      name: "Youtube",
      details: " YouTube, founded in 2005 by Steve Chen, Chad Hurley, and Jawed Karim, is a leading video-sharing platform where users can upload, view, share, and comment on videos. Acquired by Google in 2006, it has become the world’s largest video platform, offering a wide range of content from music and entertainment to educational material.",
      category: "Ai",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4G5pR2wb7Y7vpk4m3ngf82Wmgf1F3sqpcClkfp522R7V8IuQaM19E5Dz6smpxuRRVUs&usqp=CAU",
      name: "X",
      details:
        "hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      category: "MultiMedia",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZ8G156RlnXN0CC_4jMcMgxY8qkyvR0LGJQ&s",
      name: "Insta",
      details: "hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      category: "MultiMedia",
    },
    {
      url: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
      name: "Whatsapp",
      details: "hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      category: "MultiMedia",
    },
    {
      url: "https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg",
      name: "SnapChat",
      details: "hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      category: "MultiMedia",
    },
  ];
}

export function useSkillSubjectsJobs():Event[]{
  return [
    {
      url: "https://media.wired.com/photos/65e83cc9b8ffa5f8fa84c893/1:1/w_2000,h_2000,c_limit/wired-uk-google-watching.jpg",
      name: "Google",
      details: `Data Science Specialist: Analyzes data for business insights using statistical models and machine learning. Skills: SQL, Python.
Business Data Analyst: Transforms data into business strategies. Skills: Tableau, SQL.
Machine Learning Developer: Builds models for product improvement. Skills: Python, TensorFlow.
AI Research Scientist: Advances AI technologies with deep learning. Skills: Statistical modeling`,
      category: "Ai",
    },
    {
      url: "https://www.india.com/wp-content/uploads/2020/07/Amazon.jpg",
      name: "Amazon",
      details: `Data Science Specialist: Analyzes data for strategic decisions. Skills: Python, SQL.
Applied Scientist in Data Innovation: Drives innovation in data science. Skills: Statistical models, algorithms.
Machine Learning Developer: Implements machine learning for automation. Skills: Python, TensorFlow.
Data Infrastructure Engineer: Manages large-scale data systems. Skills: Cloud platforms, databases.`,
      category: "Ai",
    },
    {
      url: "https://i.pinimg.com/564x/da/8c/68/da8c6866ef2e8e4b2acca1e36322564c.jpg",
      name: "Facebook",
      details: `
Data Science Specialist: Provides insights from complex data sets. Skills: R, Python.
AI Research Scientist: Explores new AI capabilities. Skills: Machine learning frameworks.
Machine Learning Developer: Develops algorithms to improve products. Skills: Python, PyTorch.`,
      category: "Ai",
    },
    {
      url: "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1050x591.v1582751026.png",
      name: "Netflix",
      details: `
Data Insights Analyst: Analyzes data to inform content and strategy. Skills: SQL, data visualization.
Business Data Analyst: Uses data to enhance user experience. Skills: Tableau, SQL.
AI Research Scientist: Focuses on machine learning for content recommendations. Skills: Deep learning.`,
      category: "Ai",
    },
    {
      url: "https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a564b6606e4e19dcf8_20230501T1259-f0aff0ab-6aef-4f8a-b039-fad01f658205.jpeg",
      name: "Microsoft",
      details: `
Data Science Specialist: Drives insights for product and business improvements. Skills: SQL, R.
Data Infrastructure Engineer: Designs scalable data systems. Skills: Cloud, databases.
Applied Scientist in AI: Innovates using AI technologies. Skills: Machine learning, research.
Business Intelligence Analyst: Creates data-driven reports for strategy. Skills: Power BI, data warehousing.`,
      category: "Ai",
    },
    {
      url: "https://yt3.googleusercontent.com/1hYhj5kV0dxuJqD8uDNBfuQFap7m-2Lp_2OBeOnsZFF45WzIYfD53IkmzbmsZyElkzNbPXKaqQ=s900-c-k-c0x00ffffff-no-rj",
      name: "Uber",
      details: `
Software Engineer: Develops scalable software solutions, working across teams to enhance Uber’s tech stack.
Backend Engineer: Builds and maintains server-side logic, focusing on efficiency and handling large volumes of user data.
Full-Stack Developer: Works on both front-end and back-end development to create seamless user experiences.
Mobile Developer: Specializes in mobile applications, developing features for Uber’s iOS and Android apps.`,
      category:"DataScience",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBafVe2DtTAOYmVw0RfJBqmHVrPbRQQFDh3Q&s",
      name: "Airbnb",
      details: `
Software Engineer: Focuses on building core functionalities to improve Airbnb’s platform.
Backend Developer: Develops server-side components to manage data and support Airbnb’s applications.
Front-End Developer: Works on user interface and experience for Airbnb’s web applications.
Full-Stack Developer: Engages in both front-end and back-end work to deliver cohesive product features.
Data Engineer: Constructs data pipelines and infrastructure for analytics and machine learning.`,
      category:"DataScience",
    },
    {
      url: "https://i0.wp.com/blog.lulu.com/wp-content/uploads/2019/05/Shopify-Apps-Blog-Graphic-Header.jpg?fit=1200%2C675&ssl=1",
      name: "Shopify",
      details: `
Software Engineer: Focuses on building core functionalities to improve Airbnb’s platform.
Backend Developer: Develops server-side components to manage data and support Airbnb’s applications.
Front-End Developer: Works on user interface and experience for Airbnb’s web applications.
Full-Stack Developer: Engages in both front-end and back-end work to deliver cohesive product features.
Data Engineer: Constructs data pipelines and infrastructure for analytics and machine learning.`,
      category:"DataScience",
    },
  ]}


export function useContentCatogery(DataOF: "Ai"
  | "DataScience"
  | "MultiMedia"
  |"coding"
  |"MultiMedia"

) {
  const events = useSkillSubjects();
  return events.filter((events) => {
    if(events.category==DataOF){
      console.log(events.name)
      return events.category
    }else{
      
    }
  });
}

export function useJobsCatogery(DataOF: "Ai"
  | "DataScience"
  | "MultiMedia"
  |"coding"
  |"MultiMedia"

) {
  const events = useSkillSubjectsJobs();
  return events.filter((events) => {
    if(events.category==DataOF){
      console.log(events.name)
      return events.category
    }else{
      
    }
  });
}


