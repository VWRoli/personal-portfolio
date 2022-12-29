<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import { language } from '../store';
	import Tag from '../components/common/Tag.svelte';
	import Button from '../components/common/Button.svelte';
</script>

<section id="hero">
	<div class="intro">
		<div class="blur" />
		<h1>{$language.mainTitle}</h1>
		<p>
			{$language.jobTitle}
			{$language.mainStrengths}
			<Tag type="JavaScript" />
			<Tag type="TypeScript" />
			<Tag type="React" />
			<Tag type="Sass" />
			<br />
			{$language.additionalExp}
			<Tag type="Redux" />
			<Tag type="NodeJS" />
			<Tag type="React-Native" />
			<Tag type="Material-UI" />
		</p>
		<div class="links">
			<Button route="https://github.com/VWRoli" typeClass="icon">
				<div slot="icon" class="icon">
					<FaGithub />
				</div>
			</Button>

			<Button route="https://www.linkedin.com/in/roland-fuest/" typeClass="icon">
				<div slot="icon" class="icon">
					<FaLinkedin />
				</div>
			</Button>
		</div>
		<a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
	</div>
</section>
