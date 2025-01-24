function f1(color) {
    const ulElements = document.getElementsByTagName('ul');
    const olElements = document.getElementsByTagName('ol');

    // Apply the color to all <ol> elements
    for (let i = 0; i < olElements.length; i++) {
        olElements[i].style.color = color;
    }

    // Apply the color to all <ul> elements
    for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].style.color = color;
    }
}
