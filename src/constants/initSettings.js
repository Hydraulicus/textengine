const HQSize = {
    width: 3600,
    height: 3600
};

const LQSize = {
    width: 720,
    height: 720
};


const initialProps = {
  texts: [
    {
      id: 'topText',
      label: 'top text',
      fontFamily: 'AtomicAge',
      fontSize: 1000,
      text: 'TOP STRING',
      width: 3200,
      offsetTop: 50,
      lineWidth: 26,
      fillStyle: '#c35',
      strokeStyle : '#226',
      distortion: 500,
    },
    {
      id: 'bottomText',
      label: 'bottom text',
      fontFamily: 'AtomicAge',
      fontSize: 900,
      text: 'BOTTOM STRING',
      width: 3200,
      offsetTop: 2300,
      lineWidth: 26,
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