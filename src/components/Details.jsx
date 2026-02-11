import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.cream};
  text-align: center;
`;

const Title = styled(motion.h2)`
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
  span { color: ${({ theme }) => theme.colors.gold}; font-size: 1.2rem; }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
`;

const DetailCard = styled(motion.div)`
  padding: 2.5rem 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(114,47,55,0.06);
  border-top: 3px solid ${({ theme }) => theme.colors.gold};
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const DetailTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.burgundy};
  margin-bottom: 0.75rem;
`;

const DetailText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 1.7;
  font-size: 0.95rem;
`;

const details = [
  { icon: '⛪', title: 'Ceremony', text: 'Saturday, October 24, 2026\n4:00 PM\n\nVenue Name\n123 Beautiful Lane\nCity, State' },
  { icon: '🥂', title: 'Reception', text: 'Immediately following\nthe ceremony\n\nDinner, drinks & dancing\nuntil the stars come out' },
  { icon: '👔', title: 'Dress Code', text: 'Formal / Black Tie Optional\n\nWe want you comfortable\nand looking your best' },
];

export default function Details() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        The Details
      </Title>
      <Ornament
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span>✦</span>
      </Ornament>
      <Grid
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {details.map((d, i) => (
          <DetailCard key={i} variants={fadeInUp}>
            <Icon>{d.icon}</Icon>
            <DetailTitle>{d.title}</DetailTitle>
            <DetailText style={{ whiteSpace: 'pre-line' }}>{d.text}</DetailText>
          </DetailCard>
        ))}
      </Grid>
    </Section>
  );
}
