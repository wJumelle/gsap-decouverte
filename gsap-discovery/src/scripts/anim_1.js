import '../styles/main.scss';
import { gsap } from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    console.log('%cDécouverte de GSAP ✨', 'background-color: #000; color: #FFF; padding: 1rem 2rem; font-size: 20px; font-weight: bold;');
    console.log('gsap loaded ?', {gsap});

    // Animation 1
    const tween_1 = gsap.to(".animation--1 .square", { x: 600, paused: true });
    document.getElementById('anim_1_button').addEventListener('click', () => {
        tween_1.restart();
    });

    // Animation 2
    const tween_2 = gsap.from(".animation--2 .square", { x: 600, paused: true });
    document.getElementById('anim_2_button').addEventListener('click', () => {
        tween_2.restart();
    });

    // Animation 3
    const tween_3 = gsap.fromTo(".animation--3 .square", { x: 0, paused: true }, { x: 600, paused: true });
    document.getElementById('anim_3_button').addEventListener('click', () => {
        tween_3.restart();
    });
});
