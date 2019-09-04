const HQSize = {
  width: 3600,
  height: 3600
};

const LQSize = {
  width: 720,
  height: 720
};


const initialProps = {
  outline: {
    show: true,
    color: '#ec2',
    lineWidth: 60
  },
  texts: [
    {
      id: 'topText',
      label: 'top text',
      fontFamily: 'Arvo',
      fontSize: 1000,
      text: 'ST.JOHNS',
      width: 3200,
      offsetTop: 50,
      lineWidth: 26,
      fillStyle: '#c35',
      strokeStyle : '#226',
      distortion: 100,
      visible: true
    },
    {
      id: 'bottomText',
      label: 'bottom text',
      fontFamily: 'Arvo',
      fontSize: 400,
      text: 'UNIVERSITY',
      width: 3200,
      offsetTop: 2800,
      lineWidth: 26,
      fillStyle: '#eeaa59',
      strokeStyle: '#226',
      distortion: 0,
      visible: true
    },
  ],
  mascots: {
    offsetTop: 2800,
    width: 2000,
    height: 2000
  },
  saveHQ: false,
  saveLQ: false,
  canva: {
    ...LQSize,
  },
  HQSize,
  LQSize,
};

export {HQSize, LQSize, initialProps};