<script lang="ts">
	export let route: string;
	export let label: string = 'none';
	export let typeClass: string;
</script>

<a href={route} target="_blank" rel="noreferrer" class={`${typeClass}-btn`}
	><slot name="icon">{label}</slot></a
>
