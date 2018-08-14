const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    return undefined
  }
}

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.log(error.message)
  }
}

const clearState = (key) => {
  try {
    if (key) {
      localStorage.removeItem(key)
    } else {
      localStorage.clear()
    }
  } catch (error) {
    console.log(error.message)
  }
}

export {
  loadState,
  saveState,
  clearState
}
