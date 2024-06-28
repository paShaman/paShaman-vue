<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			author: 'paShaman',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-normal text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.

			Developed by
			<a
				href="https://paShaman.ru"
				target="__blank"
				class="font-bold text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
