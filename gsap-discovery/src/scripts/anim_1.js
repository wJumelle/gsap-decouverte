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
});
