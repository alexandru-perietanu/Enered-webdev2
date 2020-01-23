class Clock {
    constructor({ template }) {
        let timer;
        let template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    };

    start() {
        timer = setInterval(this.render, 1000);
    };
}

let time = new Clock({template: 'h:m:s'});
time.start()