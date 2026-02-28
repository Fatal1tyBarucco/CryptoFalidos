function updateConnect() {
    var styleKey = 'someValue'; // Example assignment
    var oppositeStyleKey = 'someOppositeValue'; // Example assignment
    // Only keep one declaration of oppositeStyleKey
    styles[oppositeStyleKey] = getOppositeStyle();
    styles[styleKey] = getStyle();
}