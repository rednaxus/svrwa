<script>
	import { createBubbler, preventDefault } from 'svelte/legacy';

	const bubble = createBubbler();
	import Callout from '$lib/components/Callout.svelte'
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact Us!</h1>

No job too big or too small.

<Callout>Drop us your contact information and we will be in touch!</Callout>

<form onsubmit={preventDefault(bubble('submit'))}>
	<div class="form-section">
		<label for="name">Name</label>
		<input type="text" id="name" placeholder="First name" />
	</div>
	
	<div class="form-section">
		<label for="email">Email</label>
		<input type="email" id="email" placeholder="Email address" />
	</div>

	<fieldset>
		<legend>
			Type of work
		</legend>

		<div>
			<input type="radio" name="s" id="s1" value="s1">
			<label for="s1">Adult Tree Shapeup</label>
		</div>
		<div>
			<input type="radio" name="s" id="s2" value="s2">
			<label for="s2">Fire Advisement and Compliance</label>
		</div>
		<div>
			<input type="radio" name="s" id="s3" value="s3">
			<label for="s3">Tree or Garden Plantings</label>
		</div>
	</fieldset>

	<div class="form-section">
		<legend for="comments">Special requests</legend>
		<textarea name="comments" rows="4" cols="50" placeholder="questions or special requests"></textarea>
	</div>
	<!--div class="form-section">
		<input type="checkbox" id="c1" >
		<label for="c1">Sign me up for something!</label>
	</div-->
	<div class="form-section">
		<div class="flex gap-3 max-w-sm">
			<input class="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800" type="submit" value="Request"/>
			<input class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600" type="submit" value="Cancel"/>
		</div>
	</div>
</form>

