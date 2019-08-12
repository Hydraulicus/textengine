const HQSize = {
  canva: {
    width: 3600,
    height: 3600
  }
};

const LQSize = {
  canva: {
    width: 720,
    height: 720
  }
};


const initialProps = {
  fontFamily: 'AtomicAge',
  saveHQ: false,
  saveLQ: false,
  ...LQSize,
};

export {HQSize, LQSize, initialProps};