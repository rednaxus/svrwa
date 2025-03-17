<script>
  import { onMount } from 'svelte';
  ///import * as THREE from 'three'; // Import THREE.js if required by your Vanta effect
  import BIRDS from 'vanta/dist/vanta.birds.min'; // Replace with your desired effect

  let vantaEffect;
  let containerRef;

  onMount(() => {
    vantaEffect = BIRDS({
      el: containerRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  });
</script>

<div bind:this={containerRef}></div>