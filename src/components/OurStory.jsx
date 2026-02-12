import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Section = styled.section`
  padding: 10rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.cream} 0%,
    ${({ theme }) => theme.colors.blushLight} 50%,
    ${({ theme }) => theme.colors.cream} 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.goldLight}, transparent);
  }
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
  position: relative;
  padding: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
  border-radius: 8px;
  box-shadow:
    0 25px 80px rgba(114,47,55,0.15),
    0 8px 32px rgba(201,169,110,0.2),
    inset 0 1px 0 rgba(255,255,255,0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 6px;
    border: 1px solid rgba(201,169,110,0.4);
    border-radius: 6px;
    pointer-events: none;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
    position: relative;
    z-index: 0;
  }
`;

const PoemContainer = styled(motion.div)`
  max-width: 640px;
  margin: 0 auto 5rem;
  text-align: center;
`;

const Stanza = styled(motion.div)`
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PoemLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 2.2;
  font-size: 1.15rem;
  font-style: italic;
  margin: 0;
  letter-spacing: 0.3px;
`;

const StanzaDivider = styled.div`
  width: 40px;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldLight};
  margin: 2.5rem auto;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.burgundy};
  font-weight: 600;
  font-style: normal;
`;

const Timeline = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const Moment = styled(motion.div)`
  position: relative;
  padding-left: 2.5rem;
  text-align: left;
  border-left: 2px solid ${({ theme }) => theme.colors.goldLight};

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 12px rgba(201,169,110,0.4);
  }
`;

const MomentYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const MomentTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.burgundy};
  margin: 0.5rem 0;
`;

const MomentText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 2;
  font-size: 1.05rem;
  font-style: italic;
`;

const moments = [
  {
    year: 'The Spark',
    title: 'Collision of Worlds',
    text: 'Two constellations drifting in different skies — he, a quiet orbit of steadiness; she, a comet trailing light. The universe conspired, and gravity did the rest.',
  },
  {
    year: 'The Dance',
    title: 'Learning the Rhythm',
    text: 'He wanted the map; she wanted the music. Salsa taught them to trust the beat — his careful steps, her fearless spins. They stumbled, laughed, and found the tempo was always there between them.',
  },
  {
    year: 'The Tide',
    title: 'Riding the Same Wave',
    text: 'He learned to let the ocean carry him. She learned the shore would always be there. Together they paddle out — not to conquer the wave, but to ride it side by side.',
  },
  {
    year: 'October 2026',
    title: 'The Harmony',
    text: 'Two voices that once sang in different keys now make a melody neither could have written alone. Join us as we turn this song into a vow — imperfect, honest, and forever.',
  },
];

export default function OurStory() {
  const { ref, isInView } = useScrollAnimation();
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
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img src={couplePhotoUrl} alt="Jonathan & Zany" />
      </PhotoContainer>

      <PoemContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Stanza>
          <PoemLine>Before the beginning, there were two sparks</PoemLine>
          <PoemLine>drifting through the dark like unnamed stars —</PoemLine>
          <PoemLine><Highlight>Jonathan</Highlight>, steady as the pull of gravity,</PoemLine>
          <PoemLine><Highlight>Zany</Highlight>, blazing trails across the sky.</PoemLine>
        </Stanza>
        <StanzaDivider />
        <Stanza>
          <PoemLine>She moved like salsa — hips and fire,</PoemLine>
          <PoemLine>every step a dare, every spin desire.</PoemLine>
          <PoemLine>He moved like the tide — patient, deep, and sure,</PoemLine>
          <PoemLine>the kind of wave that finds the shore.</PoemLine>
        </Stanza>
        <StanzaDivider />
        <Stanza>
          <PoemLine>They surfed the chaos, paddled through the foam,</PoemLine>
          <PoemLine>learned that love is less a place and more a home.</PoemLine>
          <PoemLine>He hummed the verse; she sang the harmony —</PoemLine>
          <PoemLine>two melodies that made a single key.</PoemLine>
        </Stanza>
        <StanzaDivider />
        <Stanza>
          <PoemLine>Not because they matched, but because they chose</PoemLine>
          <PoemLine>to hold the space where something tender grows.</PoemLine>
          <PoemLine>Two opposites who learned to make room —</PoemLine>
          <PoemLine>and in that room, a universe in bloom.</PoemLine>
        </Stanza>
      </PoemContainer>

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
