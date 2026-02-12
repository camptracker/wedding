import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Invitation from './components/Invitation';
import Details from './components/Details';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Fireworks from './components/Fireworks';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Fireworks />
      <Hero />
      <OurStory />
      <Invitation />
      <Details />
      <Footer />
      <MusicPlayer />
    </ThemeProvider>
  );
}
