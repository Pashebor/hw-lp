//No easing
export const constant = (duration, range, current) => duration / range;

//Linear easing
export const linear = (duration, range, current) => ((duration * 2) / Math.pow(range, 2)) * current;

//Quadratic easing
export const quadratic = (duration, range, current) => ((duration * 3) / Math.pow(range, 3)) * Math.pow(current, 2);

export const animateValue = (id, start, duration, easing) => {
    let end = parseInt(document.getElementById(id).textContent, 10);
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let obj = document.getElementById(id);

    let step = function() {
        current += increment;
        obj.innerHTML = current;

        if (current != end) {
            setTimeout(step, easing(duration, range, current));
        }
    };

    setTimeout(step, easing(duration, range, start));
};

export const throttle = (funcs, wait) => {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            funcs.forEach(func => func());
            time = Date.now();
        }
    }
}

export const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}