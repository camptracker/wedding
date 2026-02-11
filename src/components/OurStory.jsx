import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.cream};
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.burgundy};
  margin-bottom: 1rem;
`;

const Ornament = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  &::before, &::after {
    content: '';
    width: 60px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }

  span {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.2rem;
  }
`;

const Timeline = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Moment = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  text-align: left;
  border-left: 2px solid ${({ theme }) => theme.colors.goldLight};

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0.5rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

const MomentYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const MomentTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.burgundy};
  margin: 0.5rem 0;
`;

const MomentText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 1.8;
  font-size: 1.05rem;
`;

const moments = [
  {
    year: 'The Beginning',
    title: 'Two paths converged',
    text: 'Sometimes the universe conspires to bring two souls together. What started as a chance encounter became the first chapter of an extraordinary story.',
  },
  {
    year: 'The Journey',
    title: 'Adventures & laughter',
    text: 'From late-night conversations to spontaneous road trips, every moment together felt like coming home. We built a world of inside jokes, shared dreams, and unwavering support.',
  },
  {
    year: 'The Question',
    title: 'A promise made',
    text: 'With a heart full of certainty and a ring full of meaning, the question was asked — and the answer was everything. Forever never sounded so perfect.',
  },
  {
    year: 'October 2026',
    title: 'The celebration',
    text: 'And now we invite you to witness the beginning of our forever. Join us as we say "I do" surrounded by the people who matter most.',
  },
];

export default function OurStory() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <Section>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Story
      </SectionTitle>
      <Ornament
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span>♥</span>
      </Ornament>
      <Timeline
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {moments.map((m, i) => (
          <Moment key={i} variants={fadeInUp}>
            <MomentYear>{m.year}</MomentYear>
            <MomentTitle>{m.title}</MomentTitle>
            <MomentText>{m.text}</MomentText>
          </Moment>
        ))}
      </Timeline>
    </Section>
  );
}
