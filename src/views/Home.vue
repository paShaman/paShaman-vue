<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import AboutCounter from "@/components/about/AboutCounter.vue";

export default {
	name: 'Home',
	components: {
    AboutCounter,
		AppBanner,
		ProjectsGrid,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />
  </div>

  <!-- About counter -->
  <AboutCounter />

  <div class="container mx-auto">
		<!-- Projects -->
		<ProjectsGrid />

	</div>
</template>

<style scoped></style>
