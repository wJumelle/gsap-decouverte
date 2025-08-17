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
});
