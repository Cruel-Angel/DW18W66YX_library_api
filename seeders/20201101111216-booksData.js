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
          title: "Harry Potter and the Gobblet of FIre",
          author: "J.K Rowling",
          publication: "July 2000",
          pages: 882,
          ISBN: "9780439139601",
          aboutBook:
            "In this novel, it is told that Hogwarts is the host of the 'Triwizard Tournament, which is a festival held to strengthen the brotherhood between magic schools. The tournament was attended by 3 schools, namely the Hogwarts School of Witchcraft and Wizardry led by Albus Dumbledore, the Beauxbatons Academy of Magic led by Madame Maxime and the Durmstrang Institute led by Igor Karkaroff. Students aged seventeen and over are allowed to enter their name into the Goblet of Fire, and one winner will be selected from each school representing their respective schools. The Goblet of Fire has issued a paper containing the names of 3 champions from 3 schools, namely Fleur Delacour from Beauxbatons, Viktor Krum from Durmstrang, and Cedric Diggory from Hogwarts. But it wasn't over yet, the Goblet of Fire issued one more name: Harry Potter.Harry is trapped in the fact that he was chosen to be one of the champions, even though he was still a minor. He was accused of cheating that tricked the Goblet of Fire. However, Mad-Eye Moody, Hogwarts Defense Against the Dark Arts guru, refutes this claim by arguing that it takes very strong magic to trick the Goblet of Fire, which a 14-year-old student could possibly do. Although the other two schools protested, in the end Harry was declared one of the champions.",
          status: "Approved",
          uploadBy: 1,
          file: "file-1604236668953.epub",
          thumbnail: "thumbnail-1604236668978.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tess on the Road",
          author: "Rachel Hartman",
          publication: "April 2000",
          pages: 436,
          ISBN: "9781789807554",
          aboutBook:
            "In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.",
          status: "Approved",
          uploadBy: 1,
          file: "file-1604236929327.epub",
          thumbnail: "thumbnail-1604236929428.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
          file: "file-1604237361591.epub",
          thumbnail: "thumbnail-1604237361603.jpg",
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
          file: "file-1604237702579.epub",
          thumbnail: "thumbnail-1604237702590.png",
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
          file: "file-1604238718814.epub",
          thumbnail: "thumbnail-1604238718821.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What if? Absurd Question",
          author: "Randall Munroe",
          publication: "September 2004",
          pages: 320,
          ISBN: "9780544456860",
          aboutBook:
            "From the creator of the wildly popular webcomic xkcd, hilarious and informative answers to important questions you probably never thought to ask Millions of people visit xkcd.com each week to read Randall Munroe’s iconic webcomic. His stick-figure drawings about science, technology, language, and love have an enormous, dedicated following, as do his deeply researched answers to his fans’ strangest questions. The queries he receives range from merely odd to downright diabolical: • What if I took a swim in a spent-nuclear-fuel pool? • Could you build a jetpack using downward-firing machine guns? • What if a Richter 15 earthquake hit New York City? • Are fire tornadoes possible? His responses are masterpieces of clarity and wit, gleefully and accurately explaining everything from the relativistic effects of a baseball pitched at near the speed of light to the many horrible ways you could die while building a periodic table out of all the actual elements. The book features new and never-before-answered questions, along with the most popular answers from the xkcd website. What If? is an informative feast for xkcd fans and anyone who loves to ponder the hypothetical.",
          status: "Approved",
          uploadBy: 1,
          file: "file-1604238971455.epub",
          thumbnail: "thumbnail-1604238971575.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "",
          author: "",
          publication: "",
          pages: 882,
          ISBN: "9780439139601",
          aboutBook: "",
          status: "Approved",
          uploadBy: 1,
          file: "",
          thumbnail: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fix You : My Heart Want You",
          author: "Nouraicha Afta, ACI",
          publication: "May 2015",
          pages: 234,
          ISBN: "9786022201571",
          aboutBook: `The strong wind in the afternoon made the fallen leaves fly. There was a roar of thunder behind the clouds. People hurried, avoiding the coming rain.However, they remained calmly looking at each other. Aliando's feelings sank, as if hypnotized and drifted in the depths of those brown eyes. As for Prilly, couldn't understand what was rumbling in her chest. Her cheeks then flushed red as Ali clasped her fingers."Now I am holding your hand, will you hold mine too? My eyes only see you, will you only see me? My heart is yours, can I have your heart?" Hearing that, the girl bowed her head. Ali ran his thumb across Prilly's cheek.Ali ..., if only there was a sentence that could be spoken from this heart, of course he would have said, I love you.`,
          status: "Approved",
          uploadBy: 1,
          file: "file-1604239261206.epub",
          thumbnail: "thumbnail-1604239261208.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Glyph",
          author: "Mungkin Dia",
          publication: "January 2018",
          pages: 234,
          ISBN: "1234564212323",
          aboutBook:
            "In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.",
          status: "Approved",
          uploadBy: 1,
          file: "file-1604239545741.epub",
          thumbnail: "thumbnail-1604239545742.png",
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
