// Импорт React не используется, нужно убрать
import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Уточнение типа

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (err) {
        console.log("Автовоспроизведение заблокировано браузером:", err);
      }
    };

    playAudio();
  }, []);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src="/audio/JojiTickTock.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудиоэлементы.
      </audio>
    </div>
  );
};
// Выбери один стиль экспорта компонентов, где то export, где то export default
export default AudioPlayer;