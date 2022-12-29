<script lang="ts">
	import type { ProjectType } from '../types/project';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
	import Button from './common/Button.svelte';
	import Tag from './common/Tag.svelte';

	export let project: ProjectType;
</script>

<div class={project.reverse ? 'project reverse' : 'project'}>
	<div class="blur" />
	<div class="project-content">
		<h2>{project.title}</h2>
		<div class="project-card">
			<div class="blur" />
			<p>{project.desc}</p>
		</div>
		<div class="tag-wrapper">
			{#each project.tags as tag}
				<Tag type={tag} />
			{/each}
		</div>
		<div class="button-wrapper">
			<Button route={project.codeUrl} typeClass="icon">
				<div slot="icon" class="icon">
					<FaGithub />
				</div>
			</Button>

			<Button route={project.liveUrl} typeClass="icon">
				<div slot="icon" class="icon">
					<FaExternalLinkAlt />
				</div>
			</Button>
		</div>
	</div>
	<div class="project-image">
		<a href={project.liveUrl} target="_blank" rel="noreferrer">
			<img src={project.img} alt={project.title} />
		</a>
	</div>
</div>
