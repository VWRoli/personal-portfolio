<script lang="ts">
	export let handleClick: () => void;
	export let flag: string;
	export let isActive: boolean;
</script>

<button class="lang-btn" class:isActive on:click={handleClick}>
	<img src={flag} alt="Flag" />
</button>

<style>
	.isActive {
		opacity: 1;
		pointer-events: none;
	}
</style>
