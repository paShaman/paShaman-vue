<script>
import feather from 'feather-icons';
import ProjectsTags from './ProjectsTags.vue';
import ProjectItem from './ProjectItem.vue';
import InfiniteLoading from "v3-infinite-loading";

export default {
	components: { ProjectItem, ProjectsTags, InfiniteLoading },
	data: () => {
		return {
			projects: [],
			tags: [],
			projectsHeading: 'Проекты',
			searchProject: '',
			selectedTags: [],
      onPage: 9,
      page: 1,
      showTags: false
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
      let t = this;
      let projects = this.projects;

      if (this.selectedTags.length != 0) {
        projects = this.filterProjectsByTags();
      }

      if (this.searchProject) {
        projects = this.filterProjectsBySearch();
			}

      for (let i in projects) {
        projects[i].hidden = i >= this.onPage * this.page;
      }

			return projects;
		},
	},
  watch: {
    selectedTags(newData, oldData) {
      this.page = 1;
    },
    searchProject(newData, oldData) {
      this.page = 1;
    },
  },
	methods: {
    loadProjects() {
      let t = this;

      let fetchParams = {
        method: 'GET',
        //headers: headers,
      };

      let url = import.meta.env.VITE_ENDPOINT + '/api/load-projects' + (this.$route.name == 'Full' ? '?full=true' : '');

      fetch(url, fetchParams)
          .then((response) => {
            response.json().then((data) => {
              t.projects.push(...data.projects);
              t.tags.push(...data.tags);
            });
          })
          .catch((err) => {
            console.error(err);
          });
    },
    filterProjectsByTags() {
      let t = this;

      let tags = t.selectedTags.map(item => item.name.toString());

      return this.projects.filter((el) => el.tags.filter(value => tags.includes(value)).length > 0);
    },
		// Filter projects by title search
		filterProjectsBySearch() {
			let search = new RegExp(this.searchProject, 'i');

			return this.projects.filter((el) => el.name.match(search) || el.tags.join(' ').match(search));
		},
    moreProjects() {
      ++this.page;
    },
    selectTags(tags) {
      this.selectedTags = tags;
    }
	},
	mounted() {
		feather.replace();

    this.loadProjects();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light flex items-baseline justify-center gap-3"
			>
				{{ projectsHeading }} <small class="text-gray-300 font-light">{{ filteredProjects.length }}</small>
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
				<div class="flex justify-between gap-2">
					<span class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light w-full sm:w-auto"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Поиск..."
						aria-label="Name"
					/>
				</div>

        <span @click="showTags = !showTags" class="font-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white duration-300 cursor-pointer" :class="{active: showTags == true}">
          Теги
          <i
              data-feather="chevron-down"
              class="size-4 ms-2"
          ></i>
        </span>
			</div>
		</div>

    <div class="tags-outer" :class="{'active': showTags == true}"><div><div>
      <ProjectsTags :tags="tags" :cnt="projects.length" @select-tags="selectTags"  />
    </div></div></div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectItem
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>

  <InfiniteLoading @infinite="moreProjects" v-if="filteredProjects.length > page*onPage" />
</template>

<style lang="less" scoped>
.tags-outer{
  display: grid;
  grid-template-rows: 0fr;
  transition: all .3s ease;

  >div{
    overflow: hidden;
    >div{
      padding-block: .5rem;
    }
  }

  &.active{
    grid-template-rows: 1fr;
  }
}
.active > svg.feather{
  rotate: 180deg;
}
</style>
