import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blushLight} 0%,
    ${({ theme }) => theme.colors.blush} 100%
  );
  text-align: center;
`;

const Card = styled(motion.div)`
  max-width: 650px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.goldLight};
  border-radius: 4px;
  padding: 4rem 3rem;
  box-shadow: 0 20px 60px rgba(114,47,55,0.08);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid ${({ theme }) => theme.colors.goldLight};
    border-radius: 2px;
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    padding: 3rem 1.5rem;
  }
`;

const InviteScript = styled.p`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.burgundy};
  margin-bottom: 1.5rem;
`;

const InviteBody = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 1.9;
  margin-bottom: 2.5rem;
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CountUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.burgundy};
  line-height: 1;
`;

const CountLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.gold};
  margin-top: 0.5rem;
`;

const RSVPButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.colors.burgundy};
  color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.burgundyDeep};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(114,47,55,0.25);
  }
`;

function useCountdown(target) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target) - new Date());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

export default function Invitation() {
  const { days, hours, minutes, seconds } = useCountdown('2026-10-24T16:00:00');

  return (
    <Section>
      <Card
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <InviteScript>You're Invited</InviteScript>
        <InviteBody>
          Together with their families, Jonathan &amp; Zany invite you to
          celebrate their union. Join us for an evening of love, laughter,
          and the beginning of forever.
        </InviteBody>
        <Countdown>
          <CountUnit><CountNum>{days}</CountNum><CountLabel>Days</CountLabel></CountUnit>
          <CountUnit><CountNum>{hours}</CountNum><CountLabel>Hours</CountLabel></CountUnit>
          <CountUnit><CountNum>{minutes}</CountNum><CountLabel>Minutes</CountLabel></CountUnit>
          <CountUnit><CountNum>{seconds}</CountNum><CountLabel>Seconds</CountLabel></CountUnit>
        </Countdown>
        <RSVPButton
          href="https://partiful.com/e/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          RSVP Now
        </RSVPButton>
      </Card>
    </Section>
  );
}
