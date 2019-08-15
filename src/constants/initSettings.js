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
      fontSize: 1000,
      width: 3200,
      offsetTop: 100,
      lineWidth: 6,
      fillStyle: '#c35',
      strokeStyle : '#226',
      distortion: 500,
    },
    {
      id: 'bottomText',
      label: 'bottom text',
      text: 'BOTTOM STRING',
      fontSize: 900,
      width: 3200,
      offsetTop: 2200,
      lineWidth: 6,
      fillStyle: '#eeaa59',
      strokeStyle: '#226',
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