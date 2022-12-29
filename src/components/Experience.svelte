<script lang="ts">
	import Tag from './common/Tag.svelte';
	import { language } from '../store';
</script>

<section id="experience">
	<div>
		<h2>{$language.experienceTitle}</h2>
		<div class="experience-content-wrapper">
			<!-- {/* Cubicfox */} -->
			<div class="job-wrapper">
				<div class="company-title">
					<h3>
						<a href="https://cubicfox.com/" target="_blank" rel="noreferrer"> Cubicfox </a>
					</h3>
				</div>
				<div>
					<h3>{$language.cubicfox.jobTitle}</h3>
					<p class="tag">{$language.cubicfox.jobDate}</p>
					<ul>
						<li>
							{$language.cubicfox.jobDescription1}{' '}
							<Tag type="React" />
							<Tag type="TailwindCSS" />{' '}
							<Tag type="NextJS" />
						</li>
					</ul>
				</div>
			</div>
			<!-- {/* Greenstand */} -->
			<div>
				<div class="company-title">
					<h3>
						<a href="https://greenstand.org/" target="_blank" rel="noreferrer"> Greenstand </a>
					</h3>
				</div>
				<div>
					<h3>{$language.greenstand.jobTitle}</h3>
					<p class="tag">{$language.greenstand.jobDate}</p>
					<ul>
						<li>
							{$language.greenstand.jobDescription1}{' '}
							<a
								href="https://github.com/Greenstand/treetracker-wallet-web"
								target="_blank"
								rel="noreferrer"
							>
								Treetracker Web Wallet
							</a>{' '}
							{$language.greenstand.jobDescription1part2}{' '}
							<a
								href="https://github.com/Greenstand/treetracker-web-map-client"
								target="_blank"
								rel="noreferrer"
							>
								Web Map Client
							</a>
						</li>
						<li>
							{$language.greenstand.jobDescription2}{' '}
							<Tag type="React" />
							<Tag type="Material-UI" />.
						</li>
						<li>{$language.greenstand.jobDescription3}</li>
						<li>{$language.greenstand.jobDescription4}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
