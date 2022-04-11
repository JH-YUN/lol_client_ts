// target을 electron-renderer로 변경
module.exports = {
  webpack: {
    configure: {
      target: 'electron-renderer'
    }
  }
};