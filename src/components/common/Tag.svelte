<script lang="ts">
	export let type: string;
</script>

<span class={`${type.toLowerCase()}-tag tag`}>{type}</span>
