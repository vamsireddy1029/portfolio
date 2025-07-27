'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AudioPlayer from './AudioPlayer'; // import the player

const SwalPopup = () => {
  const [showAudio, setShowAudio] = useState(false);

  useEffect(() => {
    Swal.fire({
      title: 'Welcome to my Digital Space 🌟',
      text: "Let's start exploring this website with a musical vibe 🎸🎧🎷",
      confirmButtonText: "Explore 🚀",
      showCancelButton: true,
      cancelButtonText: 'Close ❌',
      background: `
        rgba(0, 0, 3, 0.8)
        url("/popupbg.jpg")
        center center
        no-repeat
      `,
      customClass: {
        popup: 'bg-black text-white',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setShowAudio(true); // only play audio if user clicks "Explore 🚀"
      } else {
        setShowAudio(false); // explicitly ensure audio doesn’t play
      }
    });
  }, []);

  return (
    <>
      {showAudio && <AudioPlayer />}
    </>
  );
};

export default SwalPopup;
