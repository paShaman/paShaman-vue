<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/project/ProjectHeader.vue';
import ProjectInfo from '../components/project/ProjectInfo.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectInfo,
	},
	data: () => {
		return {
      project: {},
		};
	},
	updated() {
		feather.replace();
	},
  mounted() {
    feather.replace();

    this.loadProject();
  },
  methods: {
    loadProject() {
      let t = this;

      let fetchParams = {
        method: 'GET',
        //headers: headers,
      };

      fetch(import.meta.env.VITE_ENDPOINT + '/load-projects/' + this.$route.params.link, fetchParams)
          .then((response) => {
            response.json().then((data) => {
              if (data) {
                t.project = data;

                document.title += ' - ' + data.name;

                t.prevProject.link = data.prev;
                t.nextProject.link = data.next;
              } else {
                t.$router.push({ name: '404' });
              }
            });
          })
          .catch((err) => {
            console.error(err);
          });
    },
  }
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :project="project" />

		<!-- Project information -->
		<ProjectInfo :project="project" />
	</div>
</template>
