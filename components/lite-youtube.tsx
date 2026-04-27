'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  videoId: string;
  title?: string;
  className?: string;
};

/**
 * Renders a YouTube thumbnail with a play button. On click, swaps for the
 * actual iframe with autoplay. Saves ~750KB per non-clicked video on initial
 * page load vs. always rendering iframes.
 */
export function LiteYouTube({ videoId, title = 'Vídeo do YouTube', className = '' }: Props) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    );
  }

  // sddefault: 640x480, smaller than maxres but always exists. hqdefault is 480x360.
  // Using sddefault as it scales well and is reliably available for all videos.
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className={`relative w-full h-full group cursor-pointer overflow-hidden ${className}`}
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <Image
        src={thumbUrl}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cedro-red flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-cedro-red-hover">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 md:w-8 md:h-8 ml-1"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
