const HQSize = {
    width: 3600,
    height: 3600
};

const LQSize = {
    width: 720,
    height: 720
};


const initialProps = {
  fontFamily: 'AtomicAge',
  texts: [
    {
      id: 'topText',
      label: 'top text',
      text: 'TOP STRING',
      fontSize: 1200,
      width: 0.85 *  LQSize.width,
      offsetTop: 100,
      lineWidth: 6,
      fillStyle: '#226',
      distortion: 500,
    },
    {
      id: 'bottomText',
      label: 'bottom text',
      text: 'BOTTOM STRING',
      fontSize: 1000,
      width: 0.85 *  LQSize.width,
      offsetTop: 2300,
      lineWidth: 6,
      fillStyle: '#226',
      distortion: -500,
    },
  ],
  saveHQ: false,
  saveLQ: false,
  canva: {
    ...LQSize,
  }
};

export {HQSize, LQSize, initialProps};