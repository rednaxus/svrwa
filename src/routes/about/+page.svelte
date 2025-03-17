<svelte:head>
	<title>About</title>
</svelte:head>


<script>
  import Carousel from 'svelte-carousel';
  import { Alert, Gallery } from 'flowbite-svelte';


  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()
  }

  const images1 = [
    { alt: 'erbology', src: 'images/about/01.jpeg' },
    { alt: 'shoes', src: 'images/about/02.jpeg' },
    { alt: 'small bag', src: 'images/about/03.jpeg' }
  ]
  const images2 = [
    { alt: 'plants', src: 'images/about/04.jpeg' },
    { alt: 'watch', src: 'images/about/05.jpeg' },
    { alt: 'shoe', src: 'images/about/06.jpeg' }
  ]
  const images3 = [
    { alt: 'cream', src: 'images/about/07.jpeg' },
    { alt: 'small bag', src: 'images/about/08.jpeg' },
    { alt: 'lamp', src: 'images/about/09.jpeg' }
  ]
  const images4 = [
    { alt: 'toiletbag', src: 'images/about/10.jpeg' }
  ]
</script>

<!--Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" -->
<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images2} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>
