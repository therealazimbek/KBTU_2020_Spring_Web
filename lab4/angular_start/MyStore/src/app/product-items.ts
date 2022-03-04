export interface ProductItem {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  link: string;
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
  },
  {
    id: 4,
    name: 'Effective Java 3rd Edition',
    price: 24.99,
    description:
      'Since this Jolt-award winning classic was last updated in 2008, the Java programming environment has changed dramatically. Java 7 and Java 8 introduced new features and functions including, forEach() method in Iterable interface, default and static methods in Interfaces, Functional Interfaces and Lambda Expressions, Java Stream API for Bulk Data Operations on Collections, Java Time API, Collection API improvements, Concurrency API improvements, and Java IO improvements.',
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41zLisPNN2L._SX376_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/ref=sr_1_1?crid=2FTO1S7DH9JXR&keywords=java&qid=1646386932&sprefix=ja%2Caps%2C281&sr=8-1',
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
  },
  {
    id: 8,
    name: 'HTML and CSS: Design and Build Websites 1st Edition',
    price: 19.99,
    description:
      'Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.',
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_1?crid=1IXMKCT2HDSJD&keywords=html+css&qid=1646387433&sprefix=html+c%2Caps%2C274&sr=8-1',
  },
  {
    id: 9,
    name: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition',
    price: 21.99,
    description:
      "Python Crash Course is the world's best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.",
    rating: 4.7,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51j89lmxnpL._SX377_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_1?crid=1XIJ4BGGKCPQU&keywords=python&qid=1646388109&sprefix=python%2Caps%2C364&sr=8-1',
  },
  {
    id: 10,
    name: 'Django for Beginners: Build Websites with Python and Django',
    price: 39.99,
    description:
      'Django for Beginners is a project-based introduction to Django, the popular Python-based web framework. Suitable for total beginners who have never built a website before as well as professional programmers looking for a fast-paced guide to modern web development and Django fundamentals.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GRfd8FkJL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/Django-Beginners-Build-Websites-Python/dp/1735467200/ref=sr_1_1?crid=1AWQ0882OQY7I&keywords=django+python&qid=1646388202&s=books&sprefix=django+%2Cstripbooks%2C292&sr=1-1',
  },
  {
    id: 11,
    name: 'C# 10 and .NET 6 – Modern Cross-Platform Development: Build apps, websites, and services with ASP.NET Core 6, Blazor, and EF Core 6 using Visual Studio 2022 and Visual Studio Code, 6th Edition',
    price: 49.99,
    description:
      'You will learn object-oriented programming, writing, testing, and debugging functions, implementing interfaces, and inheriting classes. The book covers the .NET APIs for performing tasks like managing and querying data, monitoring and improving performance, and working with the filesystem, async streams, serialization, and encryption. It provides examples of cross-platform apps you can build and deploy, such as websites and services using ASP.NET Core.',
    rating: 4.5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51kfCsqPBcL._SX404_BO1,204,203,200_.jpg',
    link: 'https://www.amazon.com/10-NET-Cross-Platform-Development-websites/dp/1801077363/ref=sr_1_2?crid=39U8XG0DHS48&keywords=asp.net&qid=1646388329&s=books&sprefix=asp.ne%2Cstripbooks-intl-ship%2C276&sr=1-2',
  },
];
