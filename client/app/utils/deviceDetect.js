

function device() {
  function isMobile() {
    const userAgent = navigator.userAgent;
    return (userAgent.match(/Android/) || userAgent.match(/iPhone|iPad|iPod/) || userAgent.match(/BlackBerry/));
  }
  return {
    isMobile: isMobile
  }
}

export default device;
