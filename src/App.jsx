import { ThemeProvider } from 'styled-components';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import theme from './styles/theme';
import MusicPlayer from './components/MusicPlayer';
import Fireworks from './components/Fireworks';

const seasonCycle = keyframes`
  0%, 100% {
    background: linear-gradient(135deg, #3d1c22 0%, #5c2a30 30%, #8b4a52 60%, #c97a7a 100%);
  }
  25% {
    background: linear-gradient(135deg, #2c1810 0%, #5c3a1e 30%, #b8860b 60%, #daa520 100%);
  }
  50% {
    background: linear-gradient(135deg, #1a2a1a 0%, #2d5a3d 30%, #5a9a6a 60%, #90c49a 100%);
  }
  75% {
    background: linear-gradient(135deg, #1a2030 0%, #2a4060 30%, #4a7aaa 60%, #7ab0d0 100%);
  }
`;

const GlobalOverride = createGlobalStyle`
  html, body, #root {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const Page = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  animation: ${seasonCycle} 24s ease-in-out infinite;
  gap: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Names = styled(motion.h1)`
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.2rem, 8vw, 5rem);
  font-weight: 400;
  color: #c9a96e;
  line-height: 1.1;
  margin: 0;
  text-shadow: 0 2px 30px rgba(201,169,110,0.4);
`;

const Ampersand = styled.span`
  display: block;
  font-size: 0.45em;
  margin: 0.1em 0;
  opacity: 0.7;
`;

const DateText = styled(motion.p)`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(0.75rem, 2.5vw, 1.1rem);
  letter-spacing: 4px;
  color: #f5e6e0;
  margin: 0.8rem 0;
`;

const Photo = styled(motion.div)`
  width: clamp(140px, 30vw, 220px);
  height: clamp(140px, 30vw, 220px);
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(201,169,110,0.6);
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  margin: 0.8rem 0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
`;

const Poem = styled(motion.div)`
  max-width: 600px;
  margin: 0.8rem 0;
`;

const PoemLine = styled.p`
  font-family: 'Lato', sans-serif;
  color: rgba(255,255,255,0.9);
  line-height: 1.9;
  font-size: clamp(0.7rem, 1.8vw, 0.95rem);
  font-style: italic;
  margin: 0;
  text-shadow: 0 1px 8px rgba(0,0,0,0.4);
`;

const RsvpButton = styled(motion.a)`
  display: inline-block;
  padding: 0.6rem 2rem;
  background: rgba(201,169,110,0.2);
  border: 1px solid rgba(201,169,110,0.6);
  color: #c9a96e;
  font-family: 'Playfair Display', serif;
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    background: rgba(201,169,110,0.35);
    box-shadow: 0 0 20px rgba(201,169,110,0.3);
  }
`;

const Hashtag = styled(motion.p)`
  font-family: 'Lato', sans-serif;
  font-size: clamp(0.6rem, 1.2vw, 0.75rem);
  color: rgba(255,255,255,0.4);
  letter-spacing: 2px;
  margin-top: 0.5rem;
`;

export default function App() {
  const couplePhotoUrl = import.meta.env.BASE_URL + 'couple.jpg';

  return (
    <ThemeProvider theme={theme}>
      <GlobalOverride />
      <Fireworks />
      <Page>
        <Names
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Jonathan<Ampersand>&</Ampersand>Zany
        </Names>

        <DateText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          October 24, 2026
        </DateText>

        <Photo
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <img src={couplePhotoUrl} alt="Jonathan & Zany" />
        </Photo>

        <Poem
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <PoemLine>She danced like salsa — fire in every spin; he surfed the tide — steady, patient, deep within.</PoemLine>
          <PoemLine>Two sparks adrift through space, unnamed and far — until Zany met Jonathan beneath the same star.</PoemLine>
          <PoemLine>He hummed the verse, she sang the harmony — two opposites who chose to let the other be.</PoemLine>
          <PoemLine>Not because they matched, but because they made room — and in that room, a universe in bloom.</PoemLine>
        </Poem>

        <RsvpButton
          href="https://partiful.com/e/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          RSVP
        </RsvpButton>

        <Hashtag
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          #TogetherForever
        </Hashtag>
      </Page>
      <MusicPlayer />
    </ThemeProvider>
  );
}
