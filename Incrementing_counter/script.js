const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const step = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + step);
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }
    updateCounter();
})