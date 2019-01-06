const getRandomDate = () => {
  const date = new Date(Date.now() - Math.floor(Math.random() * 100) * 24 * 60 * 1000);
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  return `${months[month]} ${day}, ${year}`;
};
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];
const data = [
  {
    title: 'When Congress Stopped Paying Me',
    text: `In 2013, I was a federal contractor. When the government shut down, so did my office. Projects I was responsible for ground to a halt. For three weeks, I went without a job or a paycheck. Even though my job required security clearance, contractors in my office were automatically deemed “nonessential” and indefinitely furloughed. I couldn’t look for other work because I still had to be ready and available to show up the moment the government reopened. Congress didn’t care about my infant son or pregnant wife. When lawmakers finally forged an agreement and my office reopened, contractors like me didn’t get paid for the time it had taken for the rich and powerful to stop squabbling. I had to play catch-up to make up the missed time, while those three weeks of pay were simply gone, siphoned from my income.`,
    excerpt:
      'The government shutdown is leaving people without paychecks—and some of them will never see that money',
    author: 'David MacMillan',
    date: getRandomDate(),
    imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*HC7RlXY_0u0XaOTWur-Brg.jpeg',
    articleLength: `${Math.floor(Math.random() * 10)} min read`,
    star: '<>'
  },
  {
    title: 'When Congress Stopped Paying Me',
    text: `In 2013, I was a federal contractor. When the government shut down, so did my office. Projects I was responsible for ground to a halt. For three weeks, I went without a job or a paycheck. Even though my job required security clearance, contractors in my office were automatically deemed “nonessential” and indefinitely furloughed. I couldn’t look for other work because I still had to be ready and available to show up the moment the government reopened. Congress didn’t care about my infant son or pregnant wife. When lawmakers finally forged an agreement and my office reopened, contractors like me didn’t get paid for the time it had taken for the rich and powerful to stop squabbling. I had to play catch-up to make up the missed time, while those three weeks of pay were simply gone, siphoned from my income.`,
    excerpt: 'Most male voters still have a sexism problem      ',
    author: 'Jessica Valenti',
    date: getRandomDate(),
    imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*ehkyuSFOfcJyBXFPjhwCcA.jpeg',
    articleLength: `${Math.floor(Math.random() * 10)} min read`,
    star: '<>'
  },
  {
    title: 'How Sexual Assault Survivors Are Redefining Pleasurable Sex',
    text: `Reclaiming a sexual identity has led some survivors to a similar place: They’re having better sex than they were before they were assaulted — and often they tie these improvements to the experience of coping with assault. These survivors can become more focused on pleasure, enthusiastic consent, assertive communication, and sexual exploration than they were pre-assault. This kind of post-traumatic growth has led survivors forward to more embodied, communicative, and pleasurable sex — not just for other survivors, but for all of us.
    “I would never say [the assault] was a positive thing, and it still affects me really badly,” says Angela, a rape survivor. Even so, she found that in the wake of her assault her sex life improved — and her perspective on sex fundamentally changed. Angela worked with her partner towards more clear consent and made sure she was actively engaged during sexual encounters.Before she was assaulted, Libby says she had a disembodied relationship with sex. “My first experience of it was somebody taking something from me that wasn’t mine entirely,” she explains. Experiencing sexuality in an intensely negative way causes many survivors to question assumed power dynamics. Savannah says that growing up, she absorbed the idea that “sex was something to give to a man to show him how grateful I was for him.”Savannah, Libby, and many other survivors start to question these notions after their assaults. As Libby got older and articulated that what had happened to her was assault, she began to think: “there’s a lot more here, in terms of having sex, for me to go find and take for myself.”Survivors often focus on pleasure over orgasm. “Many survivors have a hard time orgasming because orgasming requires surrender,” Julie explains. “After assault, you have fear in your nervous system during sex and it can be hard to let go, in that way.” For her, sex is about sharing intimacy — not about climaxing. Rather than asking if she’s close to finishing, she instead focuses on asking “How am I experiencing pleasure? How am I taking pleasure from giving my partner pleasure?” Sex has recentered on foreplay, erogenous zones, and exploration.`,
    excerpt: 'Some survivors are learning to move past their trauma by asserting their needs',
    author: 'Katie Simon',
    date: getRandomDate(),
    imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*TQ-zxj7MJx3_JrOTRKqqaA.jpeg',
    articleLength: `${Math.floor(Math.random() * 10)} min read`,
    star: '<>'
  },
  {
    title: 'Why You’re So Bad at Predicting the Future',
    text: `In 2013, I was a federal contractor. When the government shut down, so did my office. Projects I was responsible for ground to a halt. For three weeks, I went without a job or a paycheck. Even though my job required security clearance, contractors in my office were automatically deemed “nonessential” and indefinitely furloughed. I couldn’t look for other work because I still had to be ready and available to show up the moment the government reopened. Congress didn’t care about my infant son or pregnant wife. When lawmakers finally forged an agreement and my office reopened, contractors like me didn’t get paid for the time it had taken for the rich and powerful to stop squabbling. I had to play catch-up to make up the missed time, while those three weeks of pay were simply gone, siphoned from my income.`,
    excerpt: 'Credit: Westend61/Getty',
    author: 'David MacMillan',
    date: getRandomDate(),
    imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*RfkIvF8kQchCo0QegtxX3A.jpeg',
    articleLength: `${Math.floor(Math.random() * 10)} min read`,
    star: '<>'
  },
  {
    title: 'A Top Roboticist Says A.I. Will Not Conquer Humanity',
    text: `In 2013, I was a federal contractor. When the government shut down, so did my office. Projects I was responsible for ground to a halt. For three weeks, I went without a job or a paycheck. Even though my job required security clearance, contractors in my office were automatically deemed “nonessential” and indefinitely furloughed. I couldn’t look for other work because I still had to be ready and available to show up the moment the government reopened. Congress didn’t care about my infant son or pregnant wife. When lawmakers finally forged an agreement and my office reopened, contractors like me didn’t get paid for the time it had taken for the rich and powerful to stop squabbling. I had to play catch-up to make up the missed time, while those three weeks of pay were simply gone, siphoned from my income.`,
    excerpt: 'Photo by Lane Turner/The Boston Globe/Getty',
    author: 'David MacMillan',
    date: getRandomDate(),
    imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*9xYRc-84NBnYO0v6h1wbLA.jpeg',
    articleLength: `${Math.floor(Math.random() * 10)} min read`,
    star: '<>'
  }
];

export default data;