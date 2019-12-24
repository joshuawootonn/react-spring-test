const Blue = {
  color: {
    white: "#fff",
    black: "#000",
    grey: "#F0F0F2",
    light: "#7EBCBB",
    medium: "#47AA9F",
    dark: "#2E8390",
    error: "#E7935A",
    success: "#2E8390"
  },
  sizing: {
    header: {
      height: 53
    },
    footer: {
      height: 64
    },
    container: {
      height: 80 // this should be used as vh
    },
    default: 32,
    small: 24,
    large: 40
  },
  defaults: {
    border:'1px solid hsv(0, 0, 85%)',
    background: '#ffffff',
    marginBottom: '16px !important',
    borderRadius: '4px',
    padding: '8px'
  }
};


module.exports = {
  theme: Blue
};