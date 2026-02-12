import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MUSIC_URL = 'https://cdn.pixabay.com/audio/2024/11/29/audio_e4f23b9be2.mp3';

const Button = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  background: ${({ $playing, theme }) =>
    $playing
      ? `linear-gradient(135deg, ${theme.colors.burgundy}, ${theme.colors.burgundyDeep})`
      : `linear-gradient(135deg, ${theme.colors.cream}, ${theme.colors.blushLight})`};
  color: ${({ $playing, theme }) => ($playing ? theme.colors.gold : theme.colors.burgundy)};
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(114,47,55,0.2), 0 0 0 ${({ $playing }) => $playing ? '4px' : '0px'} rgba(201,169,110,0.2);
  transition: box-shadow 0.3s ease, background 0.3s ease;
  line-height: 1;

  &:hover {
    box-shadow: 0 6px 28px rgba(114,47,55,0.3), 0 0 0 4px rgba(201,169,110,0.15);
  }
`;

const Label = styled(motion.span)`
  position: fixed;
  bottom: 2.4rem;
  right: 4.5rem;
  z-index: 9998;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.warmGray};
  letter-spacing: 1px;
  white-space: nowrap;
  pointer-events: none;
`;

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const audioRef = useRef(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_URL);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      setShowLabel(false);
    }
    setPlaying(!playing);
  };

  return (
    <>
      <AnimatePresence>
        {showLabel && (
          <Label
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            Play Music
          </Label>
        )}
      </AnimatePresence>
      <Button
        $playing={playing}
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? '⏸' : '🎵'}
      </Button>
    </>
  );
}
