<script lang="ts">
	import { language } from '../store';
	import Project from './Project.svelte';
</script>

<section id="projects">
	<h2 class="title">{$language.projectTitle}</h2>
	<div class="container">
		{#each $language.projectsData as project (project.id)}
			<Project {project} />
		{/each}
		<!-- {displayLanguage.projectsData.map((project) => {
      return <Project key={project.id} project={project} />;
    })} -->
	</div>
</section>
