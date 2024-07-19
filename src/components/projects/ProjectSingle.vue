<script>
export default {
	props: ['project'],
  data: () => {
    return {
      endPoint: 'https://paShaman.ru'
    };
  },
};
</script>

<template>
	<component
    :is="project.link == '#' ? 'span' : 'router-link'"
		:to="project.link"
		class="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
    v-if="!project.hidden"
	>
		<div>
			<img
				:src="endPoint + project.image"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="px-4 py-6">
      <div class="flex items-center justify-between mb-2 gap-3">
        <div class="text-xl text-ternary-dark dark:text-ternary-light font-semibold flex-1 text-left text-nowrap overflow-ellipsis overflow-hidden">
          {{ project.title }}
        </div>
        <div class="font-semibold text-gray-500 dark:text-gray-600 shrink-0">
          {{ project.date }}
        </div>
      </div>
      <div class="font-medium text-gray-400 dark:text-gray-500 text-nowrap overflow-ellipsis overflow-hidden w-full">
        {{ project.tags }}
      </div>
		</div>
	</component>
</template>
