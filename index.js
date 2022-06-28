var app = new Vue({
    el: '#app',
    data() {
        return {
            seconds: '',
            miuntes: '',
            hours: '',
            secondsAngle: '',
            miuntesAngle: '',
            hoursAngle: ''
        }
    },
    created() {
        const timer = () => {
            let today = new Date();
            this.seconds = parseInt(today.getSeconds())
            this.miuntes = parseInt(today.getMinutes())
            this.hours = parseInt(today.getHours())
            this.hours = (this.hours + 11) % 12 + 1;
            this.secondsAngle = this.seconds * 6 + 180
            this.miuntesAngle = this.miuntes * 6 + 180
            this.hoursAngle = this.hours * 30 + 270   
        }
        timer()

        setInterval(() => {
            timer()
        }, 1000)

    }
})