"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Alice's Adventure in Wonderland",
          author: "Lewiss Caroll",
          publication: "November 1865",
          pages: 136,
          ISBN: "9780517223628",
          aboutBook:
            "Alice's Adventures in Wonderland (commonly shortened to Alice in Wonderland ) is an 1865 novel by English author Lewis Carroll (the pseudonym of Charles Dodgson). It tells of a young girl named Alice , who falls through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures. It is considered to be one of the best examples of the literary nonsense genre. The tale plays with logic , giving the story lasting popularity with adults as well as with children.",
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/alice_oovjz0.epub",
          thumbnail: "Library_Project/thumbnails/Alice_kf4obo.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Little Prince",
          author: "Antoine de Saint-Exupéry",
          publication: "April 1943",
          pages: 96,
          ISBN: "9780156012195",
          aboutBook:
            "The Little Prince is a classic fable about human self, adult human to be exact. This small but thin book with very profound meaning tells the story of a pilot whose plane crashes in the middle of the Sahara Desert. In the threat of isolation and lack of drinking water, he must struggle to repair his plane if he wants to return to civilization and not disappear in the middle of an unknown wilderness. Strangely, when he was seriously thinking about a way out, suddenly appeared a little prince with golden hair who asked him to draw a sheep for him. It's a very absurb thing. Imagine yourself being threatened by the heat of the wilderness and a child asks you to draw a sheep for him, instead of asking for water or protection.",
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/the_little_prince_rwh1az.epub",
          thumbnail: "Library_Project/thumbnails/Little_Prince.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The epic of Gilgamesh",
          author: "Sin-Leqi-Unninni",
          publication: "December 1960",
          pages: 128,
          ISBN: "9780140441000",
          aboutBook:
            "THE EPIC OF GILGAMESH is the Ur epic--the hero's journey, quest, and education--inscribed onto damp clay tablets several millennia before Odysseus or the priest of Ecclesiastes found their voices. Sumerian versions of the epic date back almost 5000 years. It is a Bildungsroman of a bad king learning to become a proper human being and therefore a wise king, and to do so, besides defeating lions and monsters and surviving great physical and emotional suffering, he must face, and answer, the first (and last) great question: mortality.",
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/gilgames_oua8ym.epub",
          thumbnail: "Library_Project/thumbnails/gilgamesh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beginning CSS Preprocessors",
          author: "Anirudh Prabhu",
          publication: "December 2015",
          pages: 153,
          ISBN: "9781484213476",
          aboutBook: `CSS preprocessor came into buzz a couple of years ago. The concept intrigued me: Allowing use of preprocessor files that could contain one or several things like variables, functions, mixins, and the like. After development, these special files would then be compiled into regular CSS files that all web browsers could understand. Being a believer of phrase “if it's not broken, don’t fix it,” I avoided using CSS preprocessors. The initial thought that would come to my mind was, “Why add unnecessary processes to my workflow?”. Also, I feared the steep learning curve and the command-line interface provided me another reason to avoid CSS preprocessors. Finally, after watching several podcasts and reading through many articles, I had an “a-ha” moment. It made me realize that, “Wow, I should be incorporating this in my workflow!”. Since then, I've been using Sass and Less in my projects, and it seems to have made my development a lot simpler and more efficient. In this book, you will learn how both of these preprocessors work. You’ll first start by learning about the concept of preprocessors and how they work. You also learn about the popular flavors of preprocessors available on the market. You then look into the GUI-based tools available for people who are not familiar with command-line interfaces. As the chapters progress, you will learn all about these two preprocessors—Sass and Less—and learn about a popular framework based on Sass called Compass. The knowledge shared in this book can help you improve your productivity and write maintainable and scalable CSS code.`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/Beginning_CSS_Preprocessors_x4964r.epub",
          thumbnail:
            "Library_Project/thumbnails/Beginning_CSS_Preprocessors_tqdl3j.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beginning SQL Queries",
          author: "Clare Churche",
          publication: "April 2008",
          pages: 250,
          ISBN: " 9781484219553",
          aboutBook: `The syntax of SQL is quite easy to learn. A few basic ideas and a handful of keywords allow you to tackle a huge range of queries. However, many users often find themselves completely stumped when faced with a particular problem. It isn’t really a great deal of help for someone to say “this is how I would do it.” What you need is a variety of ways to get started on a tricky problem. Once you have made a start on a query, you need to be able to check, amend, and refine your solution until you have what you need. `,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/Beginning_SQL_Queries_jv2z41.epub",
          thumbnail:
            "Library_Project/thumbnails/Beginning_SQL_Queries_lveeg1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Big Data Analytics with R and Hadoop",
          author: "Vignes Prajapati",
          publication: "November 2013",
          pages: 238,
          ISBN: " 9781782163282",
          aboutBook: `The volume of data that enterprises acquire every day is increasing exponentially.
It is now possible to store these vast amounts of information on low cost platforms
such as Hadoop.
The conundrum these organizations now face is what to do with all this data and
how to glean key insights from this data. Thus R comes into picture. R is a very
amazing tool that makes it a snap to run advanced statistical models on data,
translate the derived models into colorful graphs and visualizations, and do a lot
more functions related to data science.
One key drawback of R, though, is that it is not very scalable. The core R engine
can process and work on very limited amount of data. As Hadoop is very popular
for Big Data processing, corresponding R with Hadoop for scalability is the next
logical step.
This book is dedicated to R and Hadoop and the intricacies of how data analytics
operations of R can be made scalable by using a platform as Hadoop.
With this agenda in mind, this book will cater to a wide audience including data
scientists, statisticians, data architects, and engineers who are looking for solutions to
process and analyze vast amounts of information using R and Hadoop.
Using R with Hadoop will provide an elastic data analytics platform that will scale
depending on the size of the dataset to be analyzed. Experienced programmers can
then write Map/Reduce modules in R and run it using Hadoop's parallel processing
Map/Reduce mechanism to identify patterns in the dataset.`,
          status: "Approved",
          uploadBy: 1,
          file:
            "Library_Project/files/Big_Data_Analytics_with_R_and_Hadoop_ynwgvr.epub",
          thumbnail:
            "Library_Project/thumbnails/Big_Data_Analytics_with_R_and_Hadoop_f8a4xb.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "C++ Language Tutorial",
          author: "Juan Soulié",
          publication: "june 2007",
          pages: 144,
          ISBN: "Unknown",
          aboutBook: `This tutorial is for those people who want to learn programming in C++ and do not necessarily have any previous
knowledge of other programming languages. Of course any knowledge of other programming languages or any
general computer skill can be useful to better understand this tutorial, although it is not essential.
It is also suitable for those who need a little update on the new features the language has acquired from the latest
standards.
If you are familiar with the C language, you can take the first 3 parts of this tutorial as a review of concepts, since
they mainly explain the C part of C++. There are slight differences in the C++ syntax for some C features, so I
recommend you its reading anyway. 
`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/cpp_tutorial_xzmcui.epub",
          thumbnail: "Library_Project/thumbnails/c_tutorial_q5gh1y.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "CSS in Depth",
          author: "Keith J. Grant",
          publication: "April 2018",
          pages: 473,
          ISBN: "9781617293450",
          aboutBook: `CSS was proposed in 1994 and first implemented (partially) by Internet Explorer 3 in
1996. It was somewhere around that time I discovered the wonderful View Source button and realized all the secrets of a web page were there for me to decipher in plain
text. I taught myself HTML and CSS by playing in a text editor and seeing what
worked. It was a fun excuse to spend as much time as possible on the internet.
 In the meantime, I needed to find a real career. I went on to earn a degree in Computer Science. Little did I know that the two would come crashing together in the
2000s as the concept of “web developer” emerged.
 I’ve been in tune with CSS since the very beginning. Even when I’m working, it’s
play. I’ve worked on the back end and the front end, yet I’ve always found myself to be
the resident CSS expert on every team I’ve been on. It’s often the most neglected part
of the web stack. But once you’ve been on a project with clean CSS, you never want to
do without it again. After seeing it in action, even seasoned web developers ask, “How
do I learn CSS?”
 There isn’t one concise, straightforward answer to this question. It’s not a matter of
learning one or two quick tips. Rather, you need to understand all the disparate parts of
the language and how they can fit together. Some books make a good beginner-level
introduction to CSS, but many developers already have a basic understanding. Some
books teach a lot of useful tricks but assume the reader has mastery over the language.
 At the same time, the rate of change in CSS in accelerating. Responsive design is
now the de facto standard. Web fonts are commonplace. In 2016, we saw the rise of
flexbox, and 2017 began the rise of something called grid layout. Blend modes, box`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/CSS_in_Depth_yw4zpe.epub",
          thumbnail: "Library_Project/thumbnails/CSS_in_Depth_misdyw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Data Mining Algorithms in C++",
          author: "Timothy Masters",
          publication: "December 2015",
          pages: 296,
          ISBN: " 9781484233153",
          aboutBook: `Discover hidden relationships among the variables in your data, and learn how to exploit these relationships.  This book presents a collection of data-mining algorithms that are effective in a wide variety of prediction and classification applications.  All algorithms include an intuitive explanation of operation, essential equations, references to more rigorous theory, and commented C++ source code. Many of these techniques are recent developments, still not in widespread use.  Others are standard algorithms given a fresh look.  In every case, the focus is on practical applicability, with all code written in such a way that it can easily be included into any program.  The Windows-based DATAMINE program lets you experiment with the techniques before incorporating them into your own work.`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/Data_Mining_Algorithms_in_C_jyd53b.epub",
          thumbnail:
            "Library_Project/thumbnails/Data_Mining_Algorithms_in_C_gujcuv.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Data Science Essentials in Python",
          author: "Dimitry Zinoviev",
          publication: "August 2016",
          pages: 218,
          ISBN: "9781680501841",
          aboutBook: `The book starts by introducing you to setting up your essential data science toolbox. Then it will guide you across all the data munging and preprocessing phases. This will be done in a manner that explains all the core data science activities related to loading data, transforming and fixing it for analysis, as well as exploring and processing it. Finally, it will complete the overview by presenting you with the main machine learning algorithms, the graph analysis technicalities, and all the visualization instruments that can make your life easier in presenting your results.

In this walkthrough, structured as a data science project, you will always be accompanied by clear code and simplified examples to help you understand the underlying mechanics and real-world datasets.`,
          status: "Approved",
          uploadBy: 1,
          file:
            "Library_Project/files/Data_Science_Essentials_in_Python_a4z332.epub",
          thumbnail:
            "Library_Project/thumbnails/Data_Science_Essentials_in_Python_uiwpao.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Deep Learning Cookbook",
          author: "Douwe Osinga",
          publication: "June 2018",
          pages: 253,
          ISBN: "9781491995846",
          aboutBook: `The roots of the current deep learning boom go surprisingly far back, to the 1950s.
While vague ideas of “intelligent machines” can be found further back in fiction and
speculation, the 1950s and ’60s saw the introduction of the first “artificial neural net‐
works,” based on a dramatically simplified model of biological neurons. Amongst
these models, the Perceptron system articulated by Frank Rosenblatt garnered partic‐
ular interest (and hype). Connected to a simple “camera” circuit, it could learn to dis‐
tinguish different types of objects. Although the first version ran as software on an
IBM computer, subsequent versions were done in pure hardware.
Interest in the multilayer perceptron (MLP) model continued through the ’60s. This
changed when, in 1969, Marvin Minksy and Seymour Papert published their book
Perceptrons (MIT Press). The book contained a proof showing that linear perceptrons
could not classify the behavior of a nonlinear function (XOR). Despite the limitations
of the proof (nonlinear perceptron models existed at the time of the book’s publica‐
tion, and are even noted by the authors), its publication heralded the plummeting of
funding for neural network models. Research would not recover until the 1980s, with
the rise of a new generation of researchers.`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/deeplearningcookbook_s4ljmz.epub",
          thumbnail:
            "Library_Project/thumbnails/deeplearningcookbook_utgtyp.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "JavaScript Next",
          author: "Raju Gandhi",
          publication: "December 2015",
          pages: 251,
          ISBN: "9781484253946",
          aboutBook: `JavaScript is everywhere—it runs single-page applications on the client side, is used
on the server side (with technologies like Node.js), helps build desktop applications
with Electron,
 and can be used to work with single-board computers like Raspberry
Pi.
 JavaScript is even used to train machine-learning models in the browser using
technologies like TensorFlow.js.
 All this to say, JavaScript is (arguably) the most
deployed language in the world—every desktop and laptop and every phone with an
embedded browser can run JavaScript. As it stands today, JavaScript exhibits many of the
features that one would expect from a language with this large a footprint.
But that wasn’t always the case.
JavaScript has a long history, spanning 24 years at the time of this writing. In this
time, JavaScript went from being a scripting language used to animate web pages to
one that is being used everywhere, and for everything. JavaScript’s reputation, however,
preceded itself—it was deemed quirky and error-prone, and not all the criticisms
were without merit. And everyone, including the TC39,
 the central committee that is
responsible for evolving JavaScript, took notice.
In 2015, ES6 was announced, which introduced a slew of new features and syntactic
changes to the language. The aim was simple—to usher JavaScript into the modern
Web era—armed with the features that developers were vying for, and provide the basis
for future editions of the language.
The result? A language that aims to improve developer experience, with constructs
that seem familiar to developers coming in from other languages. Alongside, a yearly
cadence for releasing future editions was announced, ensuring that JavaScript continues
to evolve and mature.
Features like default parameters, support for variadic functions, destructuring
syntax, and fat-arrow functions make it easier to lean into JavaScript’s functional nature,
allowing for code that is concise and elegant. Simultaneously, the newly added class
syntax makes it possible to build inheritance hierarchies easily, allowing for library and
framework authors to provide the necessary “trellis” to hook into, and extend.
Asynchronous programming is a natural consequence of JavaScript’s inherent
design, and once again, the new additions to JavaScript make things easier. Promises are
now a native API, opening the door for a whole new level of abstractions, that we, the
developers, can build on. Two such abstractions are async/await, which use promises
and help make writing asynchronous code seem almost imperative.
And there is much more! All put together, JavaScript today feels like a very different
language—one that acts and behaves like other languages that developers might be
used to.
This book aims to introduce you to all of these features, endeavoring to provide a
nuanced view of the “what” and the “why” for every inclusion. However, we cannot learn
without doing—so this book provides a slew of examples, each one catered to highlight
a specific feature. So, let’s put our developer hats on, fire up our editors, and write some
code.
Ready? Set? Go!`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/JavaScript_Next_prwzt4.epub",
          thumbnail: "Library_Project/thumbnails/JavaScript_Next_zgihgm.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Laravel Up & Running",
          author: "Matt Stauffer",
          publication: "March 2016",
          pages: 101,
          ISBN: "9781492041160",
          aboutBook: `This is not the first book about Laravel, and it won’t be the last. I don’t intend for this to be a book that covers every line of code or every implementation pattern. I don’t want this to be the sort of book that goes out of date when a new version of Laravel is released. Instead, its primary purpose is to provide developers with a high-level overview and concrete examples to learn what they need to work in any Laravel codebase with any and every Laravel feature and subsystem. Rather than mirroring the docs, I want to help you understand the foundational concepts behind Laravel.

Laravel is a powerful and flexible PHP framework. It has a thriving community and a wide ecosystem of tools, and as a result it’s growing in appeal and reach. This book is for developers who already know how to make websites and applications and want to learn how to do so well in Laravel.

Laravel’s documentation is thorough and excellent. If you find that I don’t cover any particular topic deeply enough for your liking, I encourage you to visit the online documentation and dig deeper into that particular topic.

I think you will find the book a comfortable balance between high-level introduction and concrete application, and by the end you should feel comfortable writing an entire application in Laravel, from scratch. And, if I did my job well, you’ll be excited to try.`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/laravel_up_and_running_byuvxa.epub",
          thumbnail:
            "Library_Project/thumbnails/laravel_up_and_running_n8wu9u.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MS SQL Server",
          author: "tutorialspoint",
          publication: "Unknown",
          pages: 92,
          ISBN: "Unknown",
          aboutBook: `MS SQL Server is a relational database management system (RDBMS) developed by
Microsoft. This product is built for the basic function of storing retrieving data as required
by other applications. It can be run either on the same computer or on another across a
network.
This tutorial explains some basic and advanced concepts of SQL Server such as how to
create and restore data, create login and backup, assign permissions, etc. Each topic is
explained using examples for easy understanding.`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/ms_sql_server_tutorial_pyov5g.epub",
          thumbnail:
            "Library_Project/thumbnails/ms_sql_server_tutorial_wb0c9g.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Natural Language Annotation for Machine Learning",
          author: "James Pustejovsky & Amber Stubbs",
          publication: "October 2012",
          pages: 341,
          ISBN: "9781449306663",
          aboutBook: `Create your own natural language training corpus for machine learning. Whether you’re working with English, Chinese, or any other natural language, this hands-on book guides you through a proven annotation development cycle—the process of adding metadata to your training corpus to help ML algorithms work more efficiently. You don’t need any programming or linguistics experience to get started.

Using detailed examples at every step, you’ll learn how the MATTER Annotation Development Process helps you Model, Annotate, Train, Test, Evaluate, and Revise your training corpus. You also get a complete walkthrough of a real-world annotation project.`,
          status: "Approved",
          uploadBy: 1,
          file:
            "Library_Project/files/naturallanguageannotationformachinelearning_basjkn.epub",
          thumbnail:
            "Library_Project/thumbnails/naturallanguageannotationformachinelearning_g08obb.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "PostgreSQL Ttrial",
          author: "tutorialspoint",
          publication: "Unknown",
          pages: 221,
          ISBN: "Unknown",
          aboutBook: `PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of
active development and a proven architecture that has earned it a strong reputation for reliability, data
integrity, and correctness.
PostgreSQL runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, Mac
OS X, Solaris, Tru64), and Windows.
This tutorial will give you quick start with PostgreSQL and make you comfortable with PostgreSQL
programming.
`,
          status: "Approved",
          uploadBy: 1,
          file: "Library_Project/files/postgresql_tutorial_z512da.epub",
          thumbnail:
            "Library_Project/thumbnails/postgresql_tutorial_lrw6f5.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "PRACTICAL SQL A Beginner’s Guide to Storytelling with Data",
          author: "Anthiny DeBarus",
          publication: "January 2018",
          pages: 484,
          ISBN: "9781593278274",
          aboutBook: `Practical SQL is an approachable and fast-paced guide to SQL (Structured Query Language), the standard programming language for defining, organizing, and exploring data in relational databases. The book focuses on using SQL to find the story your data tells, with the popular open-source database PostgreSQL and the pgAdmin interface as its primary tools.

You’ll first cover the fundamentals of databases and the SQL language, then build skills by analyzing data from the U.S. Census and other federal and state government agencies. With exercises and real-world examples in each chapter, this book will teach even those who have never programmed before all the tools necessary to build powerful databases and access information quickly and efficiently.`,
          status: "Approved",
          uploadBy: 1,
          file:
            "Library_Project/files/Practical_SQL__A_Beginner_s_Guide_iom4uz.epub",
          thumbnail:
            "Library_Project/thumbnails/Practical_SQL__A_Beginner_s_Guide_qiih2r.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Practical Machine Learning with H2O",
          author: "Darren Cook",
          publication: "December 2016",
          pages: 300,
          ISBN: "9781491964606",
          aboutBook: `Machine learning has finally come of age. With H2O software, you can perform machine learning and data analysis using a simple open source framework that’s easy to use, has a wide range of OS and language support, and scales for big data. This hands-on guide teaches you how to use H20 with only minimal math and theory behind the learning algorithms.

If you’re familiar with R or Python, know a bit of statistics, and have some experience manipulating data, author Darren Cook will take you through H2O basics and help you conduct machine-learning experiments on different sample data sets. You’ll explore several modern machine-learning techniques such as deep learning, random forests, unsupervised learning, and ensemble learning.`,
          status: "Approved",
          uploadBy: 1,
          file:
            "Library_Project/files/practicalmachinelearningwithh2o_ufmo5s.epub",
          thumbnail:
            "Library_Project/thumbnails/practicalmachinelearningwithh2o_izmzv4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Books", null, {});
  },
};
