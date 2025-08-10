interface Phases {
  question: string;
  answer: string;
}

interface HormonalCycleItem {
  title: string;
  days: string;
  img: string;
  color: string;
  shadow: string;
  description: Phases[];
}

const HORMONAL_CYCLE_DETAILS: HormonalCycleItem[] = [
  {
    title: 'Menstrual Phase',
    days: '(Days 1-5)',
    img: '/MoodHub/Icon/subpage/hormonal1.svg',
    color: 'bg-[#D96D99]',
    shadow: 'before:bg-[#D96D99]',
    description: [
      {
        question: 'What\'s happening',
        answer: 'This is when a woman has her period, and the body sheds the lining of the uterus.',
      },
      {
        question: 'Hormones',
        answer: 'Estrogen and progesterone levels are low.',
      },
      {
        question: 'Mood effects',
        answer:
          'Many women may feel tired, sluggish, or moody. It\'s normal to feel low energy during this phase due to blood loss and low hormone levels.',
      },
    ],
  },
  {
    title: 'Follicular Phase',
    days: '(Days 6-14)',
    img: '/MoodHub/Icon/subpage/hormonal2.svg',
    color: 'bg-[#00C0C5]',
    shadow: 'before:bg-[#00C0C5]',
    description: [
      {
        question: 'What\'s happening',
        answer:
          'After your period ends, the body starts preparing for a potential pregnancy. The brain signals the ovaries to release a hormone called follicle-stimulating hormone (FSH), which helps eggs in the ovaries grow.',
      },
      {
        question: 'Hormones',
        answer: 'Estrogen starts to rise, which boosts mood and energy.',
      },
      {
        question: 'Mood effects',
        answer:
          'As estrogen rises, many women feel more energetic, positive, and motivated. This is often considered a "feel-good" phase of the cycle.',
      },
    ],
  },
  {
    title: 'Ovulation Phase',
    days: '(Day 14, approximately)',
    img: '/MoodHub/Icon/subpage/hormonal3.svg',
    color: 'bg-[#F07E59]',
    shadow: 'before:bg-[#F07E59]',
    description: [
      {
        question: 'What\'s happening',
        answer:
          'One mature egg is released from the ovary into the fallopian tube. This is the time when a woman is most fertile.',
      },
      {
        question: 'Hormones',
        answer:
          'Estrogen is at its highest, and a hormone called luteinizing hormone (LH) spikes to trigger ovulation.',
      },
      {
        question: 'Mood effects',
        answer:
          'High estrogen levels during ovulation can make women feel confident, energetic, and even more social. Some women experience a boost in libido as well.',
      },
    ],
  },
  {
    title: 'Luteal Phase',
    days: '(Days 15-28)',
    img: '/MoodHub/Icon/subpage/hormonal4.svg',
    color: 'bg-[#9AC17E]',
    shadow: 'before:bg-[#9AC17E]',
    description: [
      {
        question: 'What\'s happening',
        answer:
          'After ovulation, the body prepares for a possible pregnancy. The hormone progesterone starts to rise to maintain the uterine lining.',
      },
      {
        question: 'Hormones',
        answer:
          'Progesterone rises while estrogen drops slightly. If pregnancy doesn\'t occur, both hormones fall toward the end of this phase.',
      },
      {
        question: 'Mood effects',
        answer:
          'As progesterone rises, some women may feel calmer, but for others, it can cause irritability or sadness. The drop in estrogen and progesterone before the next period can lead to PMS (Premenstrual Syndrome), which may include mood swings, irritability, anxiety, or feeling down.',
      },
    ],
  },
];

// Export data and types
export { HORMONAL_CYCLE_DETAILS };
export type { HormonalCycleItem };
