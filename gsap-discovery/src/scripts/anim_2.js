import '../styles/main.scss';
import { gsap } from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    console.log('%cDécouverte de GSAP ✨', 'background-color: #000; color: #FFF; padding: 1rem 2rem; font-size: 20px; font-weight: bold;');
    console.log('gsap loaded ?', {gsap});

    // Animation 1 - Présentation
    const tween_1 = gsap.to('.animation--1 .square', { paused: true, x: 600, stagger: 0.25 });
    document.getElementById('anim_1_button').addEventListener('click', () => {
        tween_1.restart();
    });
});
