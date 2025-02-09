const quotes = [
  {
    quote:
      "The best way to predict the future is to create it, not just sit idly by waiting for things to happen. Every step you take towards building something meaningful shapes the course of what lies ahead, bringing into existence the very future you envisioned.",
    author: "Peter Drucker",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving, no matter how rough the terrain might get or how hard the wind blows against you. The key is perseverance and adaptability, finding that rhythm and making progress.",
    author: "Albert Einstein",
  },
  {
    quote:
      "In the middle of every difficulty lies opportunity, waiting to be discovered by those who are courageous and creative enough to look beyond the surface of the problem and see the hidden potential for growth and innovation.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Do not follow where the path may lead. Go instead where there is no path and leave a trail, inspiring others to forge their own journeys, embrace their individuality, and make their mark on the world in ways that only they can.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful, because passion and joy in your work will drive you to go the extra mile and inspire others to join you on your journey.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "The journey of a thousand miles begins with one step, and each small step forward is a step closer to your dreams and aspirations. Even the smallest actions can create momentum that will eventually lead to great transformations.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. The ability to rise from setbacks and learn from every experience is what truly defines the strength and resilience of an individual.",
    author: "Winston Churchill",
  },
  {
    quote:
      "In every walk with nature, one receives far more than he seeks. It’s in the wilderness, the quiet moments among the trees, and the vast open spaces that we discover our true selves and reconnect with something much greater than ourselves.",
    author: "John Muir",
  },
  {
    quote:
      "It always seems impossible until it’s done. What may appear to be insurmountable challenges are often just opportunities in disguise, waiting for someone with the determination and vision to make the impossible possible.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today. If we can overcome those doubts and dare to dream, there is no telling what we can achieve, both as individuals and as a society.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. It’s the dreamers who shape the world, the ones who refuse to settle for what is and instead imagine what could be, bringing their visions to life one step at a time.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know it when you find it, and it will make all the difference in the world.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Believe you can and you’re halfway there. Confidence and belief in yourself are the foundation of any achievement. With a strong belief in your abilities, even the most daunting challenges become opportunities to grow and excel.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Act as if what you do makes a difference. It does. Even the smallest actions can have far-reaching consequences, inspiring others and creating a ripple effect that leads to meaningful change in the world.",
    author: "William James",
  },
  {
    quote:
      "Dream big and dare to fail. The greatest accomplishments in history were achieved by those who were willing to take risks, embrace uncertainty, and keep pushing forward despite the odds.",
    author: "Norman Vaughan",
  },
  {
    quote:
      "The purpose of our lives is to be happy, and that happiness is found not in the things we accumulate or the positions we attain, but in the relationships we build and the joy we share with those around us.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Everything you’ve ever wanted is on the other side of fear. Fear is the barrier that separates us from our dreams, and it’s only by facing it head-on that we can truly achieve the greatness we’re capable of.",
    author: "George Addair",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it. Focus on your work, stay consistent, and success will eventually find its way to you when you least expect it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Opportunities don't happen. You create them. By taking initiative, stepping out of your comfort zone, and seeking out possibilities, you open doors that others may never even notice.",
    author: "Chris Grosser",
  },
  {
    quote:
      "You miss 100% of the shots you don’t take. Failure is guaranteed if you don’t even try, but every shot you take gives you a chance to succeed and move closer to your goal.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The only impossible journey is the one you never begin. Take the first step, no matter how small it seems, because every great adventure starts with a single moment of courage.",
    author: "Tony Robbins",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny. Life’s challenges may seem overwhelming at times, but they often pave the way for the most incredible transformations.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "Success is how high you bounce when you hit bottom. Resilience is the true measure of strength, and it’s our ability to rise from adversity that defines who we are.",
    author: "George S. Patton",
  },
  {
    quote:
      "The harder the conflict, the greater the triumph. True success isn’t handed to us. It’s earned through hard work, sacrifice, and determination in the face of obstacles.",
    author: "George Washington",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals. The process of growth and self-discovery is far more valuable than the final destination.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "Success is not measured by the position one has reached in life, but by the obstacles one has overcome while trying to succeed.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "The secret of change is to focus all of your energy, not on fighting the old, but on building the new. Progress is made when we dare to create something better and move beyond the past.",
    author: "Socrates",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. Failure is not the opposite of success, but a crucial part of the journey toward it.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Have the courage to follow your heart and intuition, and don’t let the noise of others’ opinions drown out your inner voice.",
    author: "Steve Jobs",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btns = document.getElementById("btn");

btns.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[random];
  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.author;
});
