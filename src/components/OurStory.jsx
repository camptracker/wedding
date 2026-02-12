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
  margin-bottom: 3rem;

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

const PhotoContainer = styled(motion.div)`
  max-width: 500px;
  margin: 0 auto 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const StoryContainer = styled(motion.div)`
  max-width: 680px;
  margin: 0 auto 4rem;
  text-align: left;
`;

const StoryText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 2;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.burgundy};
  font-weight: 500;
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
    year: 'The Contrast',
    title: 'Opposites in motion',
    text: "He moves carefully, thinking things through. She moves by feeling. Where he seeks balance, she chases intensity. The contrast could've pulled them apart — but instead, it drew them closer.",
  },
  {
    year: 'The Growth',
    title: 'Learning to make room',
    text: "He wanted clarity; she wanted freedom. He wanted progress; she wanted presence. It wasn't easy. But it was honest. He learned to soften without losing himself. She learned to trust without running.",
  },
  {
    year: 'The Balance',
    title: 'Color meets steadiness',
    text: "He carried stability — meals, plans, patience — quietly and willingly. She brought color back into places he didn't know had gone gray. They didn't fix each other. They made room for each other.",
  },
  {
    year: 'October 2026',
    title: 'The celebration',
    text: 'Two imperfect people choosing curiosity over defense, listening over winning, and love as a daily practice — sometimes clumsy, always real. Join us as we make it forever.',
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

      <PhotoContainer
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/couple.jpg" alt="Jonathan & Zany" />
      </PhotoContainer>

      <StoryContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <StoryText>
          You weren't looking for fireworks. You wanted steadiness — someone who could sit in silence without trying to fix it. Then <Highlight>Zany</Highlight> arrived like a gust of wind. Bright, messy, impossible to ignore.
        </StoryText>
      </StoryContainer>

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
