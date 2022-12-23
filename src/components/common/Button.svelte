<script lang="ts">
	export let route: string;
	export let label: string;
	export let typeClass: string;
</script>

<button
	><a href={route} target="_blank" rel="noreferrer" class={`${typeClass}-btn`}>{label}</a></button
>
