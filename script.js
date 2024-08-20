const quotes = [
    {
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "source": "Kevin Kruse"
    },
    {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "source": "Napoleon Hill"
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "source": "Albert Einstein"
    },
    {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "source": "Robert Frost"
    },
    {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "source": "Florence Nightingale"
    },
    {
        "quote": "You miss 100% of the shots you don’t take.",
        "source": "Wayne Gretzky"
    },
    {
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "source": "Michael Jordan"
    },
    {
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "source": "Amelia Earhart"
    },
    {
        "quote": "Every strike brings me closer to the next home run.",
        "source": "Babe Ruth"
    },
    {
        "quote": "Definiteness of purpose is the starting point of all achievement.",
        "source": "W. Clement Stone"
    },
    {
        "quote": "We must balance conspicuous consumption with conscious capitalism.",
        "source": "Kevin Kruse"
    },
    {
        "quote": "Life is what happens to you while you’re busy making other plans.",
        "source": "John Lennon"
    },
    {
        "quote": "We become what we think about.",
        "source": "Earl Nightingale"
    },
    {
        "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        "source": "Mark Twain"
    },
    {
        "quote": "Life is 10% what happens to me and 90% of how I react to it.",
        "source": "Charles Swindoll"
    },
    {
        "quote": "The most common way people give up their power is by thinking they don’t have any.",
        "source": "Alice Walker"
    },
    {
        "quote": "The mind is everything. What you think you become.",
        "source": "Buddha"
    },
    {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "source": "Chinese Proverb"
    },
    {
        "quote": "An unexamined life is not worth living.",
        "source": "Socrates"
    },
    {
        "quote": "Eighty percent of success is showing up.",
        "source": "Woody Allen"
    },
    {
        "quote": "Your time is limited, so don’t waste it living someone else’s life.",
        "source": "Steve Jobs"
    },
    {
        "quote": "Winning isn’t everything, but wanting to win is.",
        "source": "Vince Lombardi"
    },
    {
        "quote": "I am not a product of my circumstances. I am a product of my decisions.",
        "source": "Stephen Covey"
    },
    {
        "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
        "source": "Pablo Picasso"
    },
    {
        "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
        "source": "Christopher Columbus"
    },
    {
        "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "source": "Maya Angelou"
    },
    {
        "quote": "Either you run the day, or the day runs you.",
        "source": "Jim Rohn"
    },
    {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "source": "Henry Ford"
    },
    {
        "quote": "The two most important days in your life are the day you are born and the day you find out why.",
        "source": "Mark Twain"
    },
    {
        "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
        "source": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "The best revenge is massive success.",
        "source": "Frank Sinatra"
    },
    {
        "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
        "source": "Zig Ziglar"
    },
    {
        "quote": "Life shrinks or expands in proportion to one’s courage.",
        "source": "Anais Nin"
    },
    {
        "quote": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
        "source": "Vincent Van Gogh"
    },
    {
        "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "source": "Aristotle"
    },
    {
        "quote": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        "source": "Jesus"
    },
    {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "source": "Ralph Waldo Emerson"
    },
    {
        "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.",
        "source": "Henry David Thoreau"
    },
    {
        "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        "source": "Erma Bombeck"
    },
    {
        "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        "source": "Booker T. Washington"
    },
    {
        "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
        "source": " Ancient Indian Proverb"
    },
    {
        "quote": "Believe you can and you’re halfway there.",
        "source": "Theodore Roosevelt"
    },
    {
        "quote": "Everything you’ve ever wanted is on the other side of fear.",
        "source": "George Addair"
    },
    {
        "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "source": "Plato"
    },
    {
        "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
        "source": "Maimonides"
    },
    {
        "quote": "Start where you are. Use what you have.  Do what you can.",
        "source": "Arthur Ashe"
    },
    {
        "quote": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
        "source": "John Lennon"
    },
    {
        "quote": "Fall seven times and stand up eight.",
        "source": "Japanese Proverb"
    },
    {
        "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        "source": "Helen Keller"
    },
    {
        "quote": "Everything has beauty, but not everyone can see.",
        "source": "Confucius"
    },
    {
        "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "source": "Anne Frank"
    },
    {
        "quote": "When I let go of what I am, I become what I might be.",
        "source": "Lao Tzu"
    },
    {
        "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        "source": "Maya Angelou"
    },
    {
        "quote": "Happiness is not something readymade.  It comes from your own actions.",
        "source": "Dalai Lama"
    },
    {
        "quote": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
        "source": "Sheryl Sandberg"
    },
    {
        "quote": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        "source": "Aristotle"
    },
    {
        "quote": "If the wind will not serve, take to the oars.",
        "source": "Latin Proverb"
    },
    {
        "quote": "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
        "source": "Unknown"
    },
    {
        "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        "source": "Marie Curie"
    },
    {
        "quote": "Too many of us are not living our dreams because we are living our fears.",
        "source": "Les Brown"
    },
    {
        "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "source": "Joshua J. Marine"
    },
    {
        "quote": "If you want to lift yourself up, lift up someone else.",
        "source": "Booker T. Washington"
    },
    {
        "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        "source": "Leonardo da Vinci"
    },
    {
        "quote": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
        "source": "Jamie Paolinetti"
    },
    {
        "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        "source": "Erica Jong"
    },
    {
        "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        "source": "Bob Dylan"
    },
    {
        "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.",
        "source": "Benjamin Franklin"
    },
    {
        "quote": "In order to succeed, your desire for success should be greater than your fear of failure.",
        "source": "Bill Cosby"
    },
    {
        "quote": "A person who never made a mistake never tried anything new.",
        "source": " Albert Einstein"
    },
    {
        "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
        "source": "Chinese Proverb"
    },
    {
        "quote": "There are no traffic jams along the extra mile.",
        "source": "Roger Staubach"
    },
    {
        "quote": "It is never too late to be what you might have been.",
        "source": "George Eliot"
    },
    {
        "quote": "You become what you believe.",
        "source": "Oprah Winfrey"
    },
    {
        "quote": "I would rather die of passion than of boredom.",
        "source": "Vincent van Gogh"
    },
    {
        "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
        "source": "Unknown"
    },
    {
        "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        "source": "Ann Landers"
    },
    {
        "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        "source": "Abigail Van Buren"
    },
    {
        "quote": "Build your own dreams, or someone else will hire you to build theirs.",
        "source": "Farrah Gray"
    },
    {
        "quote": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        "source": "Jesse Owens"
    },
    {
        "quote": "Education costs money.  But then so does ignorance.",
        "source": "Sir Claus Moser"
    },
    {
        "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        "source": "Rosa Parks"
    },
    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "source": "Confucius"
    },
    {
        "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        "source": "Oprah Winfrey"
    },
    {
        "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        "source": "Dalai Lama"
    },
    {
        "quote": "You can’t use up creativity.  The more you use, the more you have.",
        "source": "Maya Angelou"
    },
    {
        "quote": "Dream big and dare to fail.",
        "source": "Norman Vaughan"
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "source": "Martin Luther King Jr."
    },
    {
        "quote": "Do what you can, where you are, with what you have.",
        "source": "Teddy Roosevelt"
    },
    {
        "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        "source": "Tony Robbins"
    },
    {
        "quote": "Dreaming, after all, is a form of planning.",
        "source": "Gloria Steinem"
    },
    {
        "quote": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
        "source": "Mae Jemison"
    },
    {
        "quote": "You may be disappointed if you fail, but you are doomed if you don’t try.",
        "source": "Beverly Sills"
    },
    {
        "quote": "Remember no one can make you feel inferior without your consent.",
        "source": "Eleanor Roosevelt"
    },
    {
        "quote": "Life is what we make it, always has been, always will be.",
        "source": "Grandma Moses"
    },
    {
        "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
        "source": "Ayn Rand"
    },
    {
        "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "source": "Henry Ford"
    },
    {
        "quote": "It’s not the years in your life that count. It’s the life in your years.",
        "source": "Abraham Lincoln"
    },
    {
        "quote": "Change your thoughts and you change your world.",
        "source": "Norman Vincent Peale"
    },
    {
        "quote": "Either write something worth reading or do something worth writing.",
        "source": "Benjamin Franklin"
    },
    {
        "quote": "Nothing is impossible, the word itself says, “I’m possible!”",
        "source": "–Audrey Hepburn"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "source": "Steve Jobs"
    },
    {
        "quote": "If you can dream it, you can achieve it.",
        "source": "Zig Ziglar"
    },
    {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "source": "Ralph Waldo Emerson"
    },
    {
        "quote": "We can’t help everyone, but everyone can help someone.",
        "source": "Ronald Reagan"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "source": "Winston Churchill"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "source": "Eleanor Roosevelt"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "source": "Franklin D. Roosevelt"
    },
    {
        "quote": "In the middle of every difficulty lies opportunity.",
        "source": "Albert Einstein"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "source": "Nelson Mandela"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "source": "Albert Schweitzer"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "source": "Steve Jobs"
    },
    {
        "quote": "Believe you can and you're halfway there.",
        "source": "Theodore Roosevelt"
    },
    {
        "quote": "The greatest pleasure in life is doing what people say you cannot do.",
        "source": "Walter Bagehot"
    },
    {
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "source": "Henry David Thoreau"
    },
    
    {
       "quote": "People’s lives don’t end when they die, it ends when they lose faith.",
       "source": "Itachi Uchiha"
    },
    {
       "quote": "If you don’t take risks, you can’t create a future!",
       "source": "Monkey D Luffy"
    },
    {
       "quote": "If you don’t like your destiny, don’t accept it.",
       "source": "Naruto Uzumaki"
    },
    {
       "quote": "When you give up, that’s when the game ends.",
       "source": "Mitsuyoshi Anzai"
    },
    {
       "quote": "All we can do is live until the day we die. Control what we can…and fly free.",
       "source": "Deneil Young"
    },
    {
       "quote": "Forgetting is like a wound. The wound may heal, but it has already left a scar.",
       "source": "Monkey D Luffy"
    },
    {
       "quote": "It’s just pathetic to give up on something before you even give it a shot.”",
       "source": "Reiko Mikami"
    },
    {
       "quote": "If you don’t share someone’s pain, you can never understand them.",
       "source": "Nagato"
    },
    {
       "quote": "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",
       "source": "Himura Kenshin"
    },
    {
       "quote": "We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today!”",
       "source": "Natsu Dragneel"
    },
    {
       "quote": "Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?",
       "source": "Juuzou Suzuya"
    },
    {
       "quote": "People become stronger because they have memories they can’t forget.",
       "source": "Tsunade"
    },
    {
       "quote": "I’ll leave tomorrow’s problems to tomorrow’s me.",
       "source": "Saitama"
    },
    {
       "quote": "If you wanna make people dream, you’ve gotta start by believing in that dream yourself!",
       "source": "Seiya Kanie"
    },
    {
       "quote": "Being lonely is more painful then getting hurt.",
       "source": "Monkey D Luffy"
    },
    {
       "quote": "There’s no shame in falling down! True shame is to not stand up again!",
       "source": "Shintar Midorima"
    },
    {
       "quote": "Simplicity is the easiest path to true beauty.",
       "source": "Seishuu Handa"
    },
    {
       "quote": "If you can’t do something, then don’t. Focus on what you can.",
       "source": "Shiroe"
    },
    {
       "quote": "Giving up kills people. When people reject giving up… they finally win the right to transcend humanity.",
       "source": "Alucard"
    },
    {
       "quote": "You can die anytime, but living takes true courage.”",
       "source": "Kenshin Himura"
    },
    {
       "quote": "Every journey begins with a single step. We just have to have patience.",
       "source": "Milly Thompson"
    },
    {
       "quote": "It doesn’t do any good to pretend you can’t see what’s going on.",
       "source": "Yuuya Mochizuki"
    },
    {
       "quote": "Being weak is nothing to be ashamed of… Staying weak is !!",
       "source": "Fuegoleon Vermillion"
    },
    {
       "quote": "To act is not necessarily compassion. True compassion sometimes comes from inaction.",
       "source": "Hinata Miyake"
    },
    {
       "quote": "A dropout will beat a genius through hard work.",
       "source": "Rock Lee"
    },
    {
       "quote": "Reject common sense to make the impossible possible.",
       "source": "Simon"
    },
    {
       "quote": "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back.",
       "source": "Kenshin Himura"
    },
    {
       "quote": "If you really want to be strong… Stop caring about what your surrounding thinks of you!",
       "source": "Saitama"
    },
    {
       "quote": "Vision is not what your eyes see, but an image that your brain comprehends.",
       "source": "Touko Aozaki"
    },
    {
       "quote": "Sometimes, people are just mean. Don’t fight mean with mean. Hold your head high.",
       "source": "Hinata Miyake"
    },
    {
       "quote": "The ticket to the future is always open.",
       "source": "Vash The Stampede"
    },
    {
       "quote": "Hard work is worthless for those that don’t believe in themselves.",
       "source": "Naruto Uzumaki"
    },
    {
       "quote": "A place where someone still thinks about you is a place you can call home.",
       "source": "Jiraiya"
    },
    {
       "quote": "Life comes at a cost. Wouldn’t it be arrogant to die before you’ve repaid that debt?",
       "source": "Yuuji Kazami"
    },
    {
       "quote": "You can die anytime, but living takes true courage.",
       "source": "Himura Kenshin"
    },
    {
       "quote": "Every journey begins with a single step. We just have to have patience.",
       "source": "Milly Thompson"
    },
    {
       "quote": "If you just submit yourself to fate, then that’s the end of it.”",
       "source": "Keiichi Maebara"
    },
    {
       "quote": "It is at the moment of death that humanity has value.",
       "source": "Archer"
    },
    {
       "quote": "People, who can’t throw something important away, can never hope to change anything.",
       "source": "Armin Arlert"
    },
    {
       "quote": "Whatever you do, enjoy it to the fullest. That is the secret of life.”",
       "source": "Rider"
    },
    {
       "quote": "Power comes in response to a need, not a desire. You have to create that need.",
       "source": "Goku"
    },
    {
       "quote": "There are no regrets. If one can be proud of one’s life, one should not wish for another chance.”",
       "source": "Saber"
    },
    {
       "quote": "You can’t always hold on to the things that are important. By letting them go we gain something else.”",
       "source": "Kunio Yaobi"
    },
    {
       "quote": "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.",
       "source": "Naruto Uzumaki"
    },
    {
       "quote": "Don’t beg for things. Do it yourself, or else you won’t get anything.",
       "source": "Renton Thurston"
    },
    {
       "quote": "I refuse to let my fear control me anymore.”",
       "source": "Maka Albarn"
    },
    {
       "quote": "If you can’t find a reason to fight, then you shouldn’t be fighting.”",
       "source": "Akame"
    },
    {
       "quote": "You should never give up on life, no matter how you feel. No matter how badly you want to give up.”",
       "source": "Canaan"
    },
    {
       "quote": "People who can’t throw something important away, can never hope to change anything.",
       "source": "Armin Arlelt"
    },
    {
       "quote": "We can’t waste time worrying about the what if’s.”",
       "source": "Ichigo Kurosaki"
    },
    {
       "quote": "Fools who don’t respect the past are likely to repeat it.",
       "source": "Nico Robin"
    },
    {
       "quote": "That’s why I can’t make a change. Everything I do is so… Half-assed.”",
       "source": "Hiroshi Kido"
    },
    {
       "quote": "Sometimes it’s necessary to do unnecessary things.",
       "source": "Kanade Jinguuji"
    },
    {
       "quote": "An excellent leader must be passionate because it’s their duty to keep everyone moving forward.",
       "source": "Nico Yazawa"
    },
    {
       "quote": "Protecting someone means giving them a place to belong. Giving them a place where they can be happy.",
       "source": "Princess Lenessia"
    },
    {
       "quote": "Thinking you’re no-good and worthless is the worst thing you can do",
       "source": "Nobito"
    },
    {
       "quote": "Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!”",
       "source": "Izuku Midoriya"
    },
    {
       "quote": "If you can’t do something, then don’t. Focus on what you can do.”",
       "source": "Shiroe"
    },
    {
       "quote": "When you lose sight of your path, listen for the destination in your heart.",
       "source": "Allen Walker"
    },
    {
       "quote": "The moment you think of giving up, think of the reason why you held on so long.”",
       "source": "Natsu Dragneel"
    },
    {
       "quote": "Don’t give up, there’s no shame in falling down! True shame is to not stand up again!",
       "source": "Shintaro Midorima"
    },
    {
       "quote": "No matter how hard or impossible it is, never lose sight of your goal.”",
       "source": "Monkey D Luffy"
    },
    {
       "quote": "Life is not a game of luck. If you wanna win, work hard.",
       "source": "Sora"
    },
    {
       "quote": "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",
       "source": "Roy Mustang"
    },
    {
       "quote": "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
       "source": "Gildarts Clive"
    },
    {
       "quote": "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
       "source": "Matsumoto Rangiku"
    },
    {
       "quote": "Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer.",
       "source": "Miss Kobayashi"
    },
    {
       "quote": "Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
       "source": "Clare"
    },
    {
       "quote": "The world’s not perfect, but it’s there for us trying the best it can. That’s what makes it so damn beautiful.",
       "source": "Roy Mustang"
    },
    {
       "quote": "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.",
       "source": "Hitsugaya Toshiro"
    },
    {
       "quote": "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",
       "source": "Alibaba Saluja"
    },
    {
       "quote": "When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey.",
       "source": "Hinata Miyake"
    },
    {
       "quote": "Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
       "source": "Don Quixote Doflamingo"
    },
    {
       "quote": "A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",
       "source": "Jiraiya"
    },
    {
       "quote": "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
       "source": "Saitama"
    },
    {
       "quote": "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one’s heart.",
       "source": "Mavis Vermillion"
    },
    {
       "quote": "Fear is freedom! Subjugation is liberation! Contradiction is the truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
       "source": "Satsuki Kiryuuin"
    },
    {
       "quote": "Hatred and Sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward.",
       "source": "Sebastian Michaelis"
    },
    {
       "quote": "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",
       "source": "Might Guy"
    },
    {
       "quote": "Life and death are like light and shadow. They’re both always there. But people don’t like thinking about death, so subconsciously, they always look away from it.",
       "source": "Yato"
    },
    {
       "quote": "It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.”",
       "source": "Grimsley"
    },
    {
       "quote": "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am the protector of the innocent. I am the light in the darkness. I am the truth. Ally to good! Nightmare to you!",
       "source": "Son Goku"
    },
    {
       "quote": "If you’re gonna insist on gambling and then complain when you lose, you had better work on your game.”",
       "source": "Hatsu Kominato"
    },
    {
       "quote": "Moving on doesn’t mean you forget about things. It just means you have to accept what’s happened and continue living.",
       "source": "Erza Scarlet"
    },
    {
       "quote": "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas.",
       "source": "Alibaba Saluja"
    },
    {
       "quote": "If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",
       "source": "Haruhi Fujioka"
    },
    {
       "quote": "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start a war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",
       "source": "Paine"
    },
    {
       "quote": "Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that.",
       "source": "Keima Katsuragi"
    },
    {
       "quote": "If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",
       "source": "Erwin Smith"
    },
    {
       "quote": "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about.",
       "source": "Jet Black"
    },
    {
       "quote": "Anything can happen. No one ever thinks it will until it does. What will happen, happens. That’s how the world is. The most important thing is to not let the tragedy defeat you. To believe that you can get through it.",
       "source": "Kyousuke Natsume"
    },
    {
       "quote": "You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper.",
       "source": "Himura Kenshin"
    },
    {
       "quote": "I want you to be happy. I want you to laugh a lot. I don’t know what exactly I’ll be able to do for you, but I’ll always be by your side.",
       "source": "Kagome"
    },
    {
       "quote": "“A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.”",
       "source": "Edward Elric "
    },
    {
       "quote": "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.",
       "source": "Roronoa Zoro"
    },
    {
       "quote": "I too will obtain everything that I desire. Not because someone asked me to do it, but because I know in my heart that I have something worth fighting for.",
       "source": "Julis Alexia Van Riessfeld"
    },
    {
       "quote": "You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way.",
       "source": "Junichirou Kagami"
    },
    {
       "quote": "Do not think about other things, there is only one thing you can do. So master that one thing. Do not forget. What you must imagine is always that you, yourself, are the strongest. You do not need outside enemies. For you, the one you have to fight is none other than your own image.",
       "source": "Archer"
    },
    {
       "quote": "Life is like a tube of toothpaste. When you’ve used all the toothpaste down to the last squeeze, that’s when you’ve really lived. Live with all your might, and struggle as long as you have life.”",
       "source": "Mion Sonozaki"
    },
    {
       "quote": "Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes.",
       "source": "Junichirou Kagami"
    },
    {
       "quote": "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness.",
       "source": "Gilgamesh"
    },
    {
       "quote": "It Doesn t Matter How Strong The Opposition Is It Doesn t Matter How Fearsome The World Is It Doesn t Matter How Cruel The World Is Fight",
       "source": "Eren"
    },
    {
       "quote": "If There Are Humans Who Can Bring About Change They re Those Who Are Capable Of Abandoning Everything People Who When Required To Surpass Even Monsters Are Capable Of Tossing Aside Their Very Humanity",
       "source": "Armin Arlert"
    },
    {
       "quote": "I Don t Like The Terms Good Person or Bad Person It Is Impossible To Be Entirely Good To Everyone To Some You Are A Good Person While To Others You Are A Bad Person",
       "source": "Armin Arlert"
    },
    {
       "quote": "As Long As We Continue To Fight We Are Not Defeated",
       "source": "Miche Zacharius"
    },
    {
       "quote": "If You Win You Live If You Lose You Die If You Don t Fight You Can t Win",
       "source": "Eren"
    },
    {
       "quote": "You Understand Don t You One Day Or Another Everyone You Care About Eventually Dies It s Something We Simply Can t Accept It s A Realization That Could Drive You Insane",
       "source": "Hange Zoë"
    },
    {
       "quote": "You re Gonna Care What Other People Think And Be Someone You re Not Your Whole Life You re Fine As You Are So Talk In Your Own Words",
       "source": "Ymir"
    },
    {
       "quote": "Everyone Had To Be Drunk On Somethin To Keep Pushing On Everyone Was A Slave To Somethin",
       "source": "Kenny Ackerman"
    },
    {
       "quote": "This World Is Cruel And It s Also Very Beautiful",
       "source": "Mikasa"
    },
    {
       "quote": "No One Knows What The Outcome Will Be So Choose Whatever You ll Regret The Least",
       "source": "Levi Ackerman"
    },
    {
       "quote": "Do you need a reason to not want to lose",
       "source": "Shoyo Hinata"
    },
    {
       "quote": "Being the best decoy ever is as cool as being the ace",
       "source": "Tobio Kageyama"
    },
    {
       "quote": "You can fly even higher",
       "source": "Tobio Kageyama"
    },
    {
       "quote": "If they adjust to me I have to adjust in turn Whoever stops adjusting won t be able to continue forward",
       "source": "Tobio Kageyama"
    },
    {
       "quote": "The last ones standing are the victors Only the strongest If you want to be the last one standing become strong",
       "source": "Tobio Kageyama"
    },
    {
       "quote": "Life s a bore if you don t challenge yourself",
       "source": "Yuu Nishinoya"
    },
    {
       "quote": "There are some flowers you only see when you take detours",
       "source": "Tanaka Saeko"
    },
    {
       "quote": "Being weak means that there is room to grow",
       "source": "Ittetsu Takeda"
    },
    {
       "quote": "Today might be the chance to grasp the chance to let your talent bloom",
       "source": "Tooru Oikawa"
    },
    {
       "quote": "If you re gonna hit it hit it until it breaks",
       "source": "Tooru Oikawa"
    }
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)
