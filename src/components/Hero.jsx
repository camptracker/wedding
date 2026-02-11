import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.burgundyDeep} 0%,
    ${({ theme }) => theme.colors.burgundy} 40%,
    ${({ theme }) => theme.colors.burgundyLight} 100%
  );
  color: ${({ theme }) => theme.colors.cream};
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(201,169,110,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(transparent, ${({ theme }) => theme.colors.cream});
    pointer-events: none;
  }
`;

const Prelude = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.goldLight};
  margin-bottom: 1.5rem;
`;

const Names = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 2px 40px rgba(201,169,110,0.3);
`;

const Ampersand = styled.span`
  display: block;
  font-size: 0.5em;
  margin: 0.2em 0;
  opacity: 0.7;
`;

const DateText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.blush};
  margin-top: 1rem;
`;

const Tagline = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.goldLight};
  margin-top: 2rem;
  font-style: italic;
  opacity: 0.8;
  letter-spacing: 2px;
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 140px;
  width: 24px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.goldLight};
  border-radius: 12px;
  opacity: 0.5;

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: ${({ theme }) => theme.colors.goldLight};
    border-radius: 2px;
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    50% { opacity: 0.3; transform: translateX(-50%) translateY(12px); }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Prelude
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Together with their families
      </Prelude>
      <Names
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Jonathan<Ampersand>&</Ampersand>Zany
      </Names>
      <DateText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        October 24, 2026
      </DateText>
      <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        A celebration of forever
      </Tagline>
      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
      />
    </HeroSection>
  );
}
