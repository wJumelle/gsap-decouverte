import '../styles/main.scss';
import { gsap } from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    console.log('%cDécouverte de GSAP ✨', 'background-color: #000; color: #FFF; padding: 1rem 2rem; font-size: 20px; font-weight: bold;');
    console.log('gsap loaded ?', {gsap});

    // Animation 1 - to()
    const tween_1 = gsap.to(".animation--1 .square", { x: 600, paused: true });
    document.getElementById('anim_1_button').addEventListener('click', () => {
        tween_1.restart();
    });

    // Animation 2 - from()
    const tween_2 = gsap.from(".animation--2 .square", { x: 600, paused: true });
    document.getElementById('anim_2_button').addEventListener('click', () => {
        tween_2.restart();
    });

    // Animation 3 - fromTo()
    const tween_3 = gsap.fromTo(".animation--3 .square", { x: 0, paused: true }, { x: 600, paused: true });
    document.getElementById('anim_3_button').addEventListener('click', () => {
        tween_3.restart();
    });

    // Animation 4 - set()
    const tween_4 = gsap.set(".animation--4 .square", { x: 600, paused: true });
    document.getElementById('anim_4_button_play').addEventListener('click', () => {
        tween_4.restart();
    });
    document.getElementById('anim_4_button_reset').addEventListener('click', () => {
        tween_4.reverse();
    });

    // Animation 5 - SVG
    const tween_5 = gsap.to('.animation--5 .svgBox', {
        duration: 2,
        x: 100,
        xPercent: -100,
        paused: true,
        attr: {
            fill: "#5235F4",
            rx: 50
        }
    });
    document.getElementById('anim_5_button').addEventListener('click', () => {
        tween_5.restart();
    });

    // Animation 6 - SVG mouvement ghost
    const tween_6_1 = gsap.to('.animation--6 .svgBox--animated-1', {
        duration: 2,
        y: 35,
        paused: true,
        attr: {
            fill: "#5235F4",
            rx: 50
        }
    });
    const tween_6_2 = gsap.to('.animation--6 .svgBox--animated-2', {
        duration: 2,
        y: "-=35",
        paused: true,
        attr: {
            fill: "#5235F4",
            rx: 50
        }
    });
    document.getElementById('anim_6_button').addEventListener('click', () => {
        tween_6_1.restart();
        tween_6_2.restart();
    });

    // Animation 7 - Canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F43578";

    // On va animer la position d'un carré dans notre canvas
    let position = { x: 0, y: 0 };

    // On déclare la fonction qui va nous ppermettre de réinitialiser le canvas à chaque frame
    // et de redesinner le carré à sa nouvelle position
    function draw() {
        ctx.clearRect(0, 0, 300, 300);
        ctx.fillRect(position.x, position.y, 100, 100);
    }

    // On déclare l'animation
    // Contrairement à un élément du DOM un canvas a besoin d'être redessiné à chaque frame
    // donc on est obligé de déclarer la propriété onUpdate
    // on déplace jusqu'à x: 200 et y: 200 car notre carré fait 100x100
    const tween_7 = gsap.to(position, {
        x: 200,
        y: 200,
        duration: 2,
        paused: true,
        onUpdate: draw
    });

    document.getElementById('anim_7_button').addEventListener('click', () => {
        tween_7.restart();
    });

    // Animation 8 - Repeat et yoyo
    const tween_8_1 = gsap.to(".animation--8 .square", {
        x: 600,
        repeat: -1,
        duration: 2,
        paused: true,
    });
    const tween_8_2 = gsap.to(".animation--8 .square", {
        x: 600,
        repeat: -1,
        yoyo: true,
        duration: 2,
        paused: true
    });
    document.getElementById('anim_8_1_button').addEventListener('click', () => {
        tween_8_2.pause();
        gsap.set(".animation--8 .square", { x: 0 });
        tween_8_1.restart();
    });
    document.getElementById('anim_8_2_button').addEventListener('click', () => {
        tween_8_1.pause();
        gsap.set(".animation--8 .square", { x: 0 });
        tween_8_2.restart();
    });

    // Animation 9 - Easing - power 1 à 4
    const tween_9_1 = gsap.to(".animation--9 .square", { x: 600, duration: 2, paused: true, ease: 'power1.inOut' });
    const tween_9_2 = gsap.to(".animation--9 .square", { x: 600, duration: 2, paused: true, ease: 'power2.inOut' });
    const tween_9_3 = gsap.to(".animation--9 .square", { x: 600, duration: 2, paused: true, ease: 'power3.inOut' });
    const tween_9_4 = gsap.to(".animation--9 .square", { x: 600, duration: 2, paused: true, ease: 'power4.inOut' });
    document.getElementById('anim_9_1_button').addEventListener('click', () => {
        tween_9_2.pause();
        tween_9_3.pause();
        tween_9_4.pause();
        gsap.set(".animation--9 .square", { x: 0 });
        tween_9_1.restart();
    });
    document.getElementById('anim_9_2_button').addEventListener('click', () => {
        tween_9_1.pause();
        tween_9_3.pause();
        tween_9_4.pause();
        gsap.set(".animation--9 .square", { x: 0 });
        tween_9_2.restart();
    });
    document.getElementById('anim_9_3_button').addEventListener('click', () => {
        tween_9_1.pause();
        tween_9_2.pause();
        tween_9_4.pause();
        gsap.set(".animation--9 .square", { x: 0 });
        tween_9_3.restart();
    });
    document.getElementById('anim_9_4_button').addEventListener('click', () => {
        tween_9_1.pause();
        tween_9_2.pause();
        tween_9_3.pause();
        gsap.set(".animation--9 .square", { x: 0 });
        tween_9_4.restart();
    });

    // Animation 10 - Easing - back
    const tween_10 = gsap.to(".animation--10 .square", { x: 600, duration: 2, paused: true, ease: 'back.inOut' });
    document.getElementById('anim_10_button').addEventListener('click', () => {
        tween_10.restart();
    });

    // Animation 11 - Easing - bounce
    const tween_11 = gsap.to(".animation--11 .square", { x: 600, duration: 2, paused: true, ease: 'bounce.out' });
    document.getElementById('anim_11_button').addEventListener('click', () => {
        tween_11.restart();
    });

    // Animation 12 - Easing - circ
    const tween_12 = gsap.to(".animation--12 .square", { x: 600, duration: 2, paused: true, ease: 'circ.out' });
    document.getElementById('anim_12_button').addEventListener('click', () => {
        tween_12.restart();
    });

    // Animation 13 - Easing - elastic
    const tween_13 = gsap.to(".animation--13 .square", { x: 600, duration: 2, paused: true, ease: 'elastic.out' });
    document.getElementById('anim_13_button').addEventListener('click', () => {
        tween_13.restart();
    });

    // Animation 14 - Easing - expo
    const tween_14 = gsap.to(".animation--14 .square", { x: 600, duration: 2, paused: true, ease: 'expo.out' });
    document.getElementById('anim_14_button').addEventListener('click', () => {
        tween_14.restart();
    });

    // Animation 15 - Easing - sine
    const tween_15 = gsap.to(".animation--15 .square", { x: 600, duration: 2, paused: true, ease: 'sine.out' });
    document.getElementById('anim_15_button').addEventListener('click', () => {
        tween_15.restart();
    });

    // Animation 16 - Easing - sine
    const tween_16_5 = gsap.to(".animation--16 .square", { x: 600, duration: 2, paused: true, ease: 'steps(5)' });
    const tween_16_10 = gsap.to(".animation--16 .square", { x: 600, duration: 2, paused: true, ease: 'steps(10)' });
    const tween_16_15 = gsap.to(".animation--16 .square", { x: 600, duration: 2, paused: true, ease: 'steps(15)' });
    document.getElementById('anim_16_5_button').addEventListener('click', () => {
        tween_16_10.pause();
        tween_16_15.pause();
        gsap.set(".animation--16 .square", { x: 0 });
        tween_16_5.restart();
    });
    document.getElementById('anim_16_10_button').addEventListener('click', () => {
        tween_16_5.pause();
        tween_16_15.pause();
        gsap.set(".animation--16 .square", { x: 0 });
        tween_16_10.restart();
    });
    document.getElementById('anim_16_15_button').addEventListener('click', () => {
        tween_16_5.pause();
        tween_16_10.pause();
        gsap.set(".animation--16 .square", { x: 0 });
        tween_16_15.restart();
    });
});
