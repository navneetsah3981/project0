function f1(c){
    const ulElements=document.getElementsByTagName('ul');
    const olElements=document.getElementsByTagName('ol');

    for (let i = 0; i < olElements.length; i++) {
        // Apply styles from the 'c' object
        Object.assign(olElements[i].style, c);
    }
    for (let i = 0; i < olElements.length; i++) {
        // Apply styles from the 'c' object
        Object.assign(ulElements[i].style, c);
    }
}