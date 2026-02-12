import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const seasonCycle = keyframes`
  0%, 100% {
    /* Spring — cherry blossom pink & fresh green */
    background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 25%, #e8f5e9 50%, #fff9c4 100%);
  }
  25% {
    /* Summer — warm gold & ocean blue */
    background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 25%, #b3e5fc 50%, #e1f5fe 100%);
  }
  50% {
    /* Autumn — burgundy, amber & burnt orange */
    background: linear-gradient(135deg, #fbe9e7 0%, #ffccbc 25%, #ffe0b2 50%, #f3e5f5 100%);
  }
  75% {
    /* Winter — icy blue, silver & soft white */
    background: linear-gradient(135deg, #e8eaf6 0%, #e1f5fe 25%, #f3e5f5 50%, #fafafa 100%);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${seasonCycle} 20s ease-in-out infinite;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.burgundy};
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const Ornament = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  &::before, &::after {
    content: '';
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.gold});
  }
  &::after {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.gold}, transparent);
  }
  span {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.4rem;
  }
`;

const PhotoContainer = styled(motion.div)`
  max-width: 480px;
  margin: 0 auto 4rem;
  padding: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
  border-radius: 8px;
  box-shadow:
    0 25px 80px rgba(114,47,55,0.15),
    0 8px 32px rgba(201,169,110,0.2);

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }
`;

const PoemContainer = styled(motion.div)`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const PoemLine = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 2.4;
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 2px rgba(255,255,255,0.5);
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.burgundy};
  font-weight: 600;
  font-style: normal;
`;

export default function OurStory() {
  const couplePhotoUrl = import.meta.env.BASE_URL + 'couple.jpg';

  return (
    <Section id="our-story">
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
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={couplePhotoUrl} alt="Jonathan & Zany" />
      </PhotoContainer>

      <PoemContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <PoemLine>She danced like salsa — fire in every spin; he surfed the tide — steady, patient, deep within.</PoemLine>
        <PoemLine>Two sparks adrift through space, unnamed and far — until <Highlight>Zany</Highlight> met <Highlight>Jonathan</Highlight> beneath the same star.</PoemLine>
        <PoemLine>He hummed the verse, she sang the harmony — two opposites who chose to let the other be.</PoemLine>
        <PoemLine>Not because they matched, but because they made room — and in that room, a universe in bloom.</PoemLine>
      </PoemContainer>
    </Section>
  );
}
