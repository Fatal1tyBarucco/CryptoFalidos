// Existing content of nouislider.js with the updates applied
function updateConnect(index, h, l) {
    var oppositeStyleKey;
    // Other code...
    scope_Connects[index].style[options.style] = toPct(l);
    scope_Connects[index].style[oppositeStyleKey] = toPct(100 - h);
    // Other code...
}
