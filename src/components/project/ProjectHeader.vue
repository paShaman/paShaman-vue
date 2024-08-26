<script>
export default {
	props: ['project'],
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
		>
			{{ project.name }}
		</p>
		<div class="flex gap-4 sm:gap-10 flex-wrap">
			<div class="flex items-center">
				<i
					data-feather="clock"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-medium ml-2 text-primary-dark dark:text-primary-light"
					>{{ project.date }}</span
				>
			</div>
      <div class="flex items-center" v-if="project.site">
        <i
            data-feather="link"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <a :href="project.site" target="_blank"
           class="font-medium ml-2 text-primary-dark dark:text-primary-light hover:underline cursor-pointer"
        >{{ project.site }}</a>
      </div>
			<div class="flex items-center" v-if="project.current_version">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light shrink-0"
				></i>
				<span
					class="font-medium ml-2 text-primary-dark dark:text-primary-light"
					>Версия {{ project.current_version }}</span
				>
			</div>
		</div>
	</div>
</template>
