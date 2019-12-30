export function handleEvenet(contextName, params, handle) {
    const element = params.element;
    handle = handle.bind(element, params);

    if (!element[contextName]) {
        element[contextName] = {
            removeHandle: handle
        };
    } else {
        element[contextName].removeHandle = handle;
    }

    return handle;
}
