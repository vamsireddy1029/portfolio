'use client';

import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const CONTAINER = containerRef.current;
    const CARD = cardRef.current;

    if (!CONTAINER || !CARD) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      const CARD_BOUNDS = CARD.getBoundingClientRect();

      const withinProximity =
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity;

      CARD.style.setProperty('--active', withinProximity ? 1 : CONFIG.opacity);

      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width / 2,
        CARD_BOUNDS.top + CARD_BOUNDS.height / 2,
      ];

      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;

      if (ANGLE < 0) ANGLE += 360;

      CARD.style.setProperty('--start', ANGLE + 90);
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    document.body.addEventListener('pointermove', UPDATE);
    RESTYLE();
    UPDATE();

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div
      ref={containerRef}
      className={`glow-container glow-container-${identifier}`}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
