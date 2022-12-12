const logger = (store) => (next) => (action) => {
    console.log("INSIDE THE LOGGER")
    
    console.group(action.type);
    console.log("The action: ", store.action);
    const returnValue= next(action);
    console.log("Then new state: ", store.getState());
    console.groupEnd();
    return returnValue;
}

export default logger;