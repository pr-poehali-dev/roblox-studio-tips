import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playClick = useCallback(() => {
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGmm98OScTgwOUKrk79trIA==');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch (error) {
      console.log('Audio play failed');
    }
  }, []);

  const playHover = useCallback(() => {
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBgoN/cGxucY+TkYh4c3h/hYaEgn9+f4GDhIWFhYSEg4GBgH+AgICAgH9/fn5+fn5+fn5+fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX0=');
      audio.volume = 0.15;
      audio.play().catch(() => {});
    } catch (error) {
      console.log('Audio play failed');
    }
  }, []);

  return { playClick, playHover };
};
