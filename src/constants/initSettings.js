const HQSize = {
  width: 3600,
  height: 3600
};

const LQSize = {
  width: 720,
  height: 720
};


const initialProps = {
  template: { id: 'builtin'},
  outline: {
    show: true,
    color: '#ec2',
    lineWidth: 60
  },
  texts: [
    {
      id: 'topText',
      label: 'top text',
      fontFamily: 'Arvo-Bold',
      fontSize: 1000,
      text: 'ST.JOHNS',
      width: 3200,
      offsetTop: 50,
      lineWidth: 26,
      fillStyle: '#c35',
      strokeStyle : '#226',
      distortion: 600,
      visible: true
    },
    {
      id: 'bottomText',
      label: 'bottom text',
      fontFamily: 'Arvo-Bold',
      fontSize: 400,
      text: 'UNIVERSITY',
      width: 3200,
      offsetTop: 2800,
      lineWidth: 1,
      fillStyle: '#eeaa59',
      strokeStyle: '#226',
      distortion: 0,
      visible: true
    },
  ],
  mascots: {
    offsetTop: 650,
    width: 2500,
    height: 2500,
    id: 'elephant'
  },
  saveHQ: false,
  saveLQ: false,
  canva: {
    ...LQSize,
  },
  HQSize,
  LQSize,
  designedSize: {...HQSize},
  // redrawCanvas: true
};

export {HQSize, LQSize, initialProps};