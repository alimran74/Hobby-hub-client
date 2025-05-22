import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
    <Player
      autoplay
      loop
      src="./lottie.json"
      speed={0.1}
      style={{ height: '150px', width: '150px' }}
    />
  </div>
    );
};

export default Loader;