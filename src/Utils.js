export const setTime = (time) => {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - (minutes * 60))

  minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`
  seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`
  return `${minutes}:${seconds}`
}

