<script lang="ts">
	import { language } from '../store';
	import Tag from './common/Tag.svelte';
	import Button from './common/Button.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaCodepen from 'svelte-icons/fa/FaCodepen.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaFileDownload from 'svelte-icons/fa/FaFileDownload.svelte';
</script>

<section id="about">
	<article class="left-container">
		<div class="blur" />
		<div class="skills">
			<h2>{$language.skillsTitle}</h2>
			<h3>{$language.frontendTitle}</h3>
			<Tag type="HTML" />
			<Tag type="CSS" />
			<Tag type="Sass" />
			<Tag type="JavaScript" />
			<Tag type="TypeScript" />

			<h3>{$language.banckendTitle}</h3>
			<Tag type="MongoDB" />
			<Tag type="NodeJS" />
			<Tag type="ExpressJS" />

			<h3>{$language.librariesTitle}</h3>
			<Tag type="Bootstrap" />
			<Tag type="React" />
			<Tag type="Redux" />
			<Tag type="Material-UI" />
			<Tag type="NextJS" />
			<Tag type="React-Native" />
			<Tag type="TailwindCSS" />

			<h3>{$language.otherTitle}</h3>
			<Tag type="Github" />
			<Tag type="npm" />
			<Tag type="Jira" />
			<Tag type="API" />
			<Tag type="Postman" />
			<Tag type="Figma" />
		</div>
		<div class="about-text">
			<h2>{$language.moreAboutTitle}</h2>
			<p>{$language.aboutTextPar1}</p>
			<!-- todo<p
				dangerouslySetInnerHTML={{
					__html: $language.aboutTextPar2
				}}
			/> -->
		</div>
	</article>
	<article class="right-container">
		<div class="blur" />
		<h3>{$language.viewCodesTitle}</h3>
		<div class="code-group">
			<Button route="https://github.com/VWRoli" typeClass="icon">
				<div slot="icon" class="icon">
					<FaGithub />
				</div>
			</Button>
			<Button route="https://codepen.io/VWRoli" typeClass="icon">
				<div slot="icon" class="icon">
					<FaCodepen />
				</div>
			</Button>
		</div>

		<h3>{$language.linkedInTitle}</h3>
		<Button route="https://www.linkedin.com/in/roland-fuest/" typeClass="icon">
			<div slot="icon" class="icon">
				<FaLinkedin />
			</div>
		</Button>

		<h3>{$language.emailTitle}</h3>

		<a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
		<h3>{$language.resumeTitle}</h3>
		<Button route="cv_roland_füst.pdf" typeClass="icon">
			<div slot="icon" class="icon">
				<FaFileDownload />
			</div>
		</Button>
	</article>
</section>
