<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasEl = ref(null);
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

class Animator {
    #canvas;
    #ctx;
    #width;
    #height;
    #lastFrame = 0;
    #lastTimeStamp = 0;
    #interval = 1000 / 60 - 1;
    #timer = 0;
    #spacing;
    #radius;
    // from 20 to 100, to avoid rounding errors
    #maxLengthMultiplier = 20
    #maxLengthChange = 0;
    mouseX = 0;
    mouseY = 0;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#ctx = canvas.getContext("2d");
        this.#updateDimensions();
        window.addEventListener('resize', () => {
            this.#updateDimensions();
        });
        document.addEventListener('pointermove', (e) => {
            this.mouseX = e.x;
            this.mouseY = e.y;
            if (this.#maxLengthChange == 0) {
                this.#maxLengthChange = 5;
            }
        });
        document.addEventListener('touchmove', (e) => {
            if (e.touches[0]) {
                this.mouseX = e.touches[0].clientX;
                this.mouseY = e.touches[0].clientY;
                this.#maxLengthChange = 5;
            }
        });
        document.addEventListener('touchend', (e) => {
            this.#maxLengthChange = -5;
        });
    }

    #drawLine(x1, y1, x2, y2, width = 0.5) {
        this.#ctx.beginPath();
        this.#ctx.moveTo(x1, y1);
        this.#ctx.lineTo(x2, y2);
        this.#ctx.lineWidth = width;
        this.#ctx.stroke();
    }

    #updateDimensions() {
        this.#width = document.documentElement.clientWidth;
        this.#height = document.documentElement.clientHeight;
        this.#canvas.width = this.#width;
        this.#canvas.height = this.#height;

        this.#spacing = 10 + (this.#width + this.#height) / 80;
        this.#radius = (this.#width + this.#height) / 60;

        this.#ctx.strokeStyle = this.#ctx.createLinearGradient(0, this.#height / 2, this.#width, this.#height / 2);
        this.#ctx.strokeStyle.addColorStop(0, "#219163");
        this.#ctx.strokeStyle.addColorStop(0.2, "#186956");
        this.#ctx.strokeStyle.addColorStop(0.8, "#186956");
        this.#ctx.strokeStyle.addColorStop(1, "#219163");
    }

    animate(timestamp) {
        const deltaTime = timestamp - this.#lastTimeStamp;
        this.#lastTimeStamp = timestamp;
        if (this.#timer >= this.#interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            for (let x = this.#spacing / 2; x < this.#width; x += this.#spacing + randomInRange(0, 1)) {
                for (let y = this.#spacing / 2; y < this.#height; y += this.#spacing + randomInRange(0, 1)) {
                    const dx = x - this.mouseX;
                    const dy = y - this.mouseY;
                    // calculating angle for the line to be ponting away from the cursor
                    const angle = Math.atan2(dy, dx);
                    // calculating length of the line based on distance from the cursor
                    const length = Math.min(Math.max(
                        (dx * (dx / this.#radius) + dy * (dy / this.#radius)) / 1000, // value
                        5), // min
                        (10 + (this.#width / 120)) * this.#maxLengthMultiplier / 100); // max
                    this.#drawLine(x, y,
                        (Math.cos(angle) * length) + x, (Math.sin(angle) * length) + y, length / 10);
                }
            }
            this.#timer = 0;
            if (this.#maxLengthMultiplier < 20 && this.#maxLengthChange < 0) {
                this.#maxLengthMultiplier = 20;
                this.#maxLengthChange = 0;
            }
            if (this.#maxLengthMultiplier > 100 && this.#maxLengthChange > 0) {
                this.#maxLengthMultiplier = 100;
                this.#maxLengthChange = 0;
            }
            this.#maxLengthMultiplier += this.#maxLengthChange;
        } else {
            this.#timer += deltaTime;
        }

        this.#lastFrame = requestAnimationFrame(this.animate.bind(this));
    }

    cancelAnimation() {
        cancelAnimationFrame(this.#lastFrame);
    }
}

let animator = null;
onMounted(() => {
    animator = new Animator(canvasEl.value);
    animator.animate(0);
});

onUnmounted(() => {
    animator.cancelAnimation();
});

</script>

<template>
    <canvas ref="canvasEl" id="particles-root"></canvas>
</template>

<style scoped>
#particles-root {
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
}
</style>