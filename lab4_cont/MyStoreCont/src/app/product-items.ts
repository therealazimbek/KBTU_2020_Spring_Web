export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  link: string;
  category: string;
  likes: number;
}

export const newProducts = [
  {
    id: 1,
    name: "Learning Angular: A no-nonsense beginner's guide to building web applications with Angular 10 and TypeScript, 3rd Edition",
    price: 36.99,
    description:
      'Angular, loved by millions of web developers around the world, continues to be one of the top JavaScript frameworks thanks to its regular updates and new features that enable fast, cross-platform, and secure frontend web development. With Angular, you can achieve high performance using the latest web techniques and extensive integration with web tools and integrated development environments (IDEs).',
    rating: 4.1,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41tbeEEyfUL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Learning-Angular-no-nonsense-applications-TypeScript/dp/1839210664/ref=sr_1_4?crid=32HDEF4G659U4&keywords=angular&qid=1646386084&sprefix=angular+%2Caps%2C273&sr=8-4',
    category: 'Frameworks',
    likes: 0,
  },
  {
    id: 2,
    name: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
    price: 35.99,
    description:
      'This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.',
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/ref=sr_1_1?keywords=javascript&qid=1646386634&sprefix=javas%2Caps%2C329&sr=8-1',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 3,
    name: "The C# Player's Guide (5th Edition)",
    price: 29.99,
    description:
      'The book in your hands is a different kind of programming book. Like an entertaining video game, programming is an often challenging but always rewarding experience. This book shakes off the dusty, dull, dryness of the typical programming book, replacing it with something more exciting and flavorful: a bit of humor, a casual tone, and examples involving dragons and asteroids instead of bank accounts and employees.',
    rating: 5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41Lp+lYrCfL._SX398_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/C-Players-Guide-5th/dp/0985580151/ref=sr_1_3?crid=BHK8906AT2AN&keywords=c%23&qid=1646386834&sprefix=c%2Caps%2C280&sr=8-3',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 4,
    name: 'Effective Java 3rd Edition',
    price: 24.99,
    description:
      'Since this Jolt-award winning classic was last updated in 2008, the Java programming environment has changed dramatically. Java 7 and Java 8 introduced new features and functions including, forEach() method in Iterable interface, default and static methods in Interfaces, Functional Interfaces and Lambda Expressions, Java Stream API for Bulk Data Operations on Collections, Java Time API, Collection API improvements, Concurrency API improvements, and Java IO improvements.',
    rating: 4.7,
    image:
      'https://www.pearsonhighered.com/assets/bigcovers/0/1/3/4/0134685997.jpg',
    link: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/ref=sr_1_1?crid=2FTO1S7DH9JXR&keywords=java&qid=1646386932&sprefix=ja%2Caps%2C281&sr=8-1',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 5,
    name: 'Effective TypeScript: 62 Specific Ways to Improve Your TypeScript 1st Edition',
    price: 29.99,
    description:
      'TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41nCjLf7YiL._SX379_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Effective-TypeScript-Specific-Ways-Improve/dp/1492053740/ref=sr_1_1?keywords=typescript&qid=1646387134&sprefix=typesc%2Caps%2C547&sr=8-1',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 6,
    name: 'Node.js Design Patterns: Design and implement production-grade Node.js applications using proven patterns and techniques, 3rd Edition',
    price: 49.99,
    description:
      'In this book, we will show you how to implement a series of best practices and design patterns to help you create efficient and robust Node.js applications with ease.',
    rating: 4.6,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/515wgVc7S9L._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Node-js-Design-Patterns-production-grade-applications/dp/1839214112/ref=sr_1_1?keywords=node.js&qid=1646387230&sprefix=node%2Caps%2C277&sr=8-1',
    category: 'Frameworks',
    likes: 0,
  },
  {
    id: 7,
    name: 'The Road to React: Your journey to master plain yet pragmatic React.js',
    price: 29.99,
    description:
      "In 'The Road to React' you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature. However, there is more than only the fundamentals: The book dives into related topics (e.g. React with TypeScript, Testing, Performance Optimizations) and advanced feature implementations like client- and server-side searching. At the end of the book, you will have a fully working deployed React application.",
    rating: 4.4,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41JAb-hRu7L._SX384_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/ref=sr_1_1?crid=3TE6IAG1CIN0O&keywords=react&qid=1646387325&sprefix=reac%2Caps%2C274&sr=8-1',
    category: 'Frameworks',
    likes: 0,
  },
  {
    id: 8,
    name: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition',
    price: 21.99,
    description:
      "Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.",
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51j89lmxnpL._SX377_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_1?crid=1XIJ4BGGKCPQU&keywords=python&qid=1646388109&sprefix=python%2Caps%2C364&sr=8-1',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 9,
    name: 'Django for Beginners: Build Websites with Python and Django',
    price: 39.99,
    description:
      'Django for Beginners is a project-based introduction to Django, the popular Python-based web framework. Suitable for total beginners who have never built a website before as well as professional programmers looking for a fast-paced guide to modern web development and Django fundamentals.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GRfd8FkJL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Django-Beginners-Build-Websites-Python/dp/1735467200/ref=sr_1_1?crid=1AWQ0882OQY7I&keywords=django+python&qid=1646388202&s=books&sprefix=django+%2Cstripbooks%2C292&sr=1-1',
    category: 'Frameworks',
    likes: 0,
  },
  {
    id: 10,
    name: 'C# 10 and .NET 6 – Modern Cross-Platform Development: Build apps, websites, and services with ASP.NET Core 6, Blazor, and EF Core 6 using Visual Studio 2022 and Visual Studio Code, 6th Edition',
    price: 49.99,
    description:
      'You will learn object-oriented programming, writing, testing, and debugging functions, implementing interfaces, and inheriting classes. The book covers the .NET APIs for performing tasks like managing and querying data, monitoring and improving performance, and working with the filesystem, async streams, serialization, and encryption. It provides examples of cross-platform apps you can build and deploy, such as websites and services using ASP.NET Core.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51kfCsqPBcL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/10-NET-Cross-Platform-Development-websites/dp/1801077363/ref=sr_1_2?crid=39U8XG0DHS48&keywords=asp.net&qid=1646388329&s=books&sprefix=asp.ne%2Cstripbooks-intl-ship%2C276&sr=1-2',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 11,
    name: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
    price: 35.99,
    description:
      'This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.',
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/ref=sr_1_1?keywords=javascript&qid=1646386634&sprefix=javas%2Caps%2C329&sr=8-1',
    category: 'Programming Languages',
    likes: 0,
  },
  {
    id: 13,
    name: 'Spring in Action 5th Edition',
    price: 39.99,
    description:
      "Spring in Action, 5th Edition is the fully updated revision of Manning's bestselling Spring in Action. This new edition includes all Spring 5.0 updates, along with new examples on reactive programming, Spring WebFlux, and microservices. You'll also find the latest Spring best practices, including Spring Boot for application setup and configuration.",
    rating: 3.8,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51xkEqwHOxL._SX397_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Spring-Action-Craig-Walls/dp/1617294942/ref=sr_1_1?crid=JP8BKJVWRU74&keywords=spring+java&qid=1646740697&sprefix=spring+jav%2Caps%2C224&sr=8-1',
    category: 'Frameworks',
    likes: 0,
  },
  {
    id: 14,
    name: 'Cybersecurity Career Master Plan: Proven techniques and effective tips to help you advance in your cybersecurity career',
    price: 29.99,
    description:
      "This book is designed by leading industry experts to help you enter the world of cybersecurity with confidence, covering everything from gaining the right certification to tips and tools for finding your first job. The book starts by helping you gain a foundational understanding of cybersecurity, covering cyber law, cyber policy, and frameworks. Next, you'll focus on how to choose the career field best suited to you from options such as security operations, penetration testing, and risk analysis. The book also guides you through the different certification options as well as the pros and cons of a formal college education versus formal certificate courses. Later, you'll discover the importance of defining and understanding your brand. Finally, you'll get up to speed with different career paths and learning opportunities.",
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/414+TPxYr6L._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cybersecurity-Career-Master-Plan-cybersecurity/dp/1801073562/ref=sr_1_1?keywords=cybersecurity&qid=1646740954&s=books&sprefix=cybers%2Cstripbooks%2C226&sr=1-1',
    category: 'Cybersecurity',
    likes: 0,
  },
  {
    id: 15,
    name: 'Cybersecurity For Dummies 1st Edition',
    price: 12.99,
    description:
      "Cybersecurity is the protection against the unauthorized or criminal use of electronic data and the practice of ensuring the integrity, confidentiality, and availability of information. Being 'cyber-secure' means that a person or organization has both protected itself against attacks by cyber criminals and other online scoundrels, and ensured that it has the ability to recover if it is attacked.",
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51lYp5ZHjXL._SX397_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cybersecurity-Dummies-Joseph-Steinberg/dp/1119560322/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646740954&sr=1-2',
    category: 'Cybersecurity',
    likes: 0,
  },
  {
    id: 16,
    name: "Cybersecurity: The Beginner's Guide: A comprehensive guide to getting started in cybersecurity",
    price: 29.99,
    description:
      'This book put together all the possible information with regards to cybersecurity, why you should choose it, the need for cybersecurity and how can you be part of it and fill the cybersecurity talent gap bit by bit. Starting with the essential understanding of security and its needs, we will move to the security domain changes and how artificial intelligence and machine learning are helping to secure systems. Later, this book will walk you through all the skills and tools that everyone who wants to work as a security personal needs to be aware of. Then, this book will teach readers how to think like an attacker and explore some advanced security methodologies. ',
    rating: 4.6,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51iKy+gRQ-L._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cybersecurity-Beginners-comprehensive-getting-cybersecurity/dp/1789616190/ref=sr_1_3?keywords=cybersecurity&qid=1646740954&s=books&sprefix=cybers%2Cstripbooks%2C226&sr=1-3',
    category: 'Cybersecurity',
    likes: 0,
  },
  {
    id: 17,
    name: 'Cybersecurity Essentials 1st Edition',
    price: 27.99,
    description:
      'Cybersecurity Essentials provides a comprehensive introduction to the field, with expert coverage of essential topics required for entry-level cybersecurity certifications. An effective defense consists of four distinct challenges: securing the infrastructure, securing devices, securing local networks, and securing the perimeter. Overcoming these challenges requires a detailed understanding of the concepts and practices within each realm. This book covers each challenge individually for greater depth of information, with real-world scenarios that show what vulnerabilities look like in everyday computing scenarios. Each part concludes with a summary of key concepts, review questions, and hands-on exercises, allowing you to test your understanding while exercising your new critical skills.',
    rating: 4.6,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41j6R2yooDL._SX397_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cybersecurity-Essentials-Charles-J-Brooks/dp/1119362393/ref=sr_1_4?keywords=cybersecurity&qid=1646740954&s=books&sprefix=cybers%2Cstripbooks%2C226&sr=1-4',
    category: 'Cybersecurity',
    likes: 0,
  },
  {
    id: 18,
    name: 'Cybersecurity and Third-Party Risk: Third Party Threat Hunting 1st Edition',
    price: 21.0,
    description:
      "The secret is out: If you want to attain protected data as a hacker, you do not attack a big company or organization that likely has good security. You go after a third party that more likely does not. Companies have created the equivalent of how to deter car thieves: Ensure that your car looks difficult enough to break into so that thieves move onto the automobile with its doors unlocked and keys in the ignition. When a burglar sees a car with a car alarm, they know that they can look and eventually find a target that isn't so well protected. Exploiting the weakest link is not new. A bank robber could go to the bank to steal money, but a softer target would likely be the courier service as they bring the money into and out of the bank.",
    rating: 4.4,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41b1RGuzVFL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cybersecurity-Third-Party-Risk-Threat-Hunting/dp/111980955X/ref=sr_1_9?keywords=cybersecurity&qid=1646740954&s=books&sprefix=cybers%2Cstripbooks%2C226&sr=1-9',
    category: 'Cybersecurity',
    likes: 0,
  },
  {
    id: 19,
    name: "AWS for Beginners: The Complete Beginner's Guide to Learn and Understand Amazon Web Services and Its Future in Modern World",
    price: 20.99,
    description:
      "Amazon Web Services (AWS) is the world's most comprehensive and widely used cloud platform, with over 200 fully-featured services available from data centers located throughout the world. AWS is used by millions of customers, including the fastest-growing startups, largest enterprises, and leading government agencies, to reduce costs, increase agility, and accelerate innovation.",
    rating: 4.2,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41Vrnkx-mvL._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/AWS-Beginners-Complete-Understand-Services/dp/B09KN7Z1GY/ref=sr_1_4?crid=8GJFKHRYYHMF&keywords=aws&qid=1646741496&s=books&sprefix=a%2Caps%2C223&sr=1-4',
    category: 'Cloud',
    likes: 0,
  },
  {
    id: 20,
    name: 'Cloud Computing For Dummies, 2nd Edition 2nd Edition',
    price: 22.99,
    description:
      'Cloud computing is no longer just a clever new toy in the world of IT infrastructure. Despite the nebulous name, it’s become a real and important part of our information architecture—and tech professionals who ignore it or try to skim their way through risk falling behind rapidly. The new edition of Cloud Computing For Dummies gets you up to speed fast, clarifying your Cloud options, showing you where can save you time and money, giving you ways to frame your decisions, and helping you avoid weeks of research. ',
    rating: 4.3,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/513t0E2ZWiL._SX397_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cloud-Computing-Dummies-Computer-Tech/dp/1119546656/ref=sr_1_1?crid=JZVM488YVI2P&keywords=cloud+books&qid=1646741451&rnid=283155&s=books&sprefix=cloud+technology+books%2Cstripbooks-intl-ship%2C207&sr=1-1',
    category: 'Cloud',
    likes: 0,
  },
  {
    id: 21,
    name: 'The Cloud Revolution: How the Convergence of New Technologies Will Unleash the Next Economic Boom and A Roaring 2020s',
    price: 28.99,
    description:
      'The conventional wisdom on how technology will change the future is wrong. Mark Mills lays out a radically different and optimistic vision for what’s really coming.The mainstream forecasts fall into three camps. One considers today as the “new normal,” where ordering a ride or food on a smartphone or trading in bitcoins is as good as it’s going to get. Another foresees a dystopian era of widespread, digitally driven job- and business-destruction. A third believes that the only technological revolution that matters will be found with renewable energy and electric cars.',
    rating: 4.3,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41LZceW6nyS._SX331_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cloud-Revolution-Convergence-Technologies-Economic/dp/1641772301/ref=sr_1_5?crid=JZVM488YVI2P&keywords=cloud+books&qid=1646741451&rnid=283155&s=books&sprefix=cloud+technology+books%2Cstripbooks-intl-ship%2C207&sr=1-5',
    category: 'Cloud',
    likes: 0,
  },
  {
    id: 22,
    name: 'Cloud Native DevOps with Kubernetes: Building, Deploying, and Scaling Modern Applications in the Cloud 1st Edition',
    price: 45.99,
    description:
      'Kubernetes is the operating system of the cloud native world, providing a reliable and scalable platform for running containerized workloads. In this friendly, pragmatic book, cloud experts John Arundel and Justin Domingus show you what Kubernetes can do—and what you can do with it.You’ll learn all about the Kubernetes ecosystem, and use battle-tested solutions to everyday problems. You’ll build, step by step, an example cloud native application and its supporting infrastructure, along with a development environment and continuous deployment pipeline that you can use for your own applications.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51JGAv4pKvS._SX379_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Cloud-Native-DevOps-Kubernetes-Applications/dp/1492040762/ref=sr_1_14?crid=JZVM488YVI2P&keywords=cloud+books&qid=1646741451&rnid=283155&s=books&sprefix=cloud+technology+books%2Cstripbooks-intl-ship%2C207&sr=1-14',
    category: 'Cloud',
    likes: 0,
  },
  {
    id: 23,
    name: 'Hands-On Azure for Developers: Implement rich Azure PaaS ecosystems using containers, serverless services, and storage solutions',
    price: 44.99,
    description:
      'Hands-On Azure for Developers will take you on a journey through multiple PaaS services available in Azure, including App Services, Functions, and Service Fabric, and explain in detail how to build a complete and reliable system with ease. You will learn about how to maximize your skills when building cloud-based solutions leveraging different SQL/NoSQL databases, serverless and messaging components, and even search engines such as Azure Search. In the concluding chapters, this book covers more advanced scenarios such as scalability best practices, serving static content with Azure CDN, and distributing loads with Azure Traffic Manager.',
    rating: 4.2,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51DBEQehdBL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Hands-Azure-Developers-ecosystems-containers/dp/1789340624/ref=sr_1_15?crid=JZVM488YVI2P&keywords=cloud+books&qid=1646741451&rnid=283155&s=books&sprefix=cloud+technology+books%2Cstripbooks-intl-ship%2C207&sr=1-15',
    category: 'Cloud',
    likes: 0,
  },
];
