import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  padding: 6rem 2rem 3rem;
  background: ${({ theme }) => theme.colors.burgundyDeep};
  text-align: center;
  color: ${({ theme }) => theme.colors.blush};
`;

const Script = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1.5rem;
`;

const Message = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 500px;
  margin: 0 auto 2rem;
  opacity: 0.85;
`;

const Hashtag = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.goldLight};
  margin-bottom: 3rem;
`;

const Copy = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  opacity: 0.4;
  letter-spacing: 1px;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Script
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Jonathan & Zany
      </Script>
      <Message
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        We can't wait to celebrate this beautiful day with you.
        Your presence is the greatest gift of all.
      </Message>
      <Hashtag
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        #TogetherForever
      </Hashtag>
      <Copy>Made with ♥</Copy>
    </FooterSection>
  );
}
