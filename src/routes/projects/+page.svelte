<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import CanvasPlay from '$lib/components/CanvasPlay.svelte'
  import { siteDescription } from '$lib/config'

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects</title>
  <meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div>So many projects</div>
<CanvasPlay/>
<ul>
</ul>



