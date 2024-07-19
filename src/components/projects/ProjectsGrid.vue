<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import Button from '../reusable/Button.vue';
//import projects from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter, Button },
	data: () => {
		return {
			projects: [],
			projectsHeading: 'Проекты',
			selectedCategory: '',
			searchProject: '',
      onPage: 9,
      endPoint: 'https://paShaman.ru'
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
    notAllVisible() {
      for (let i in this.projects) {
        if(this.projects[i].hidden) {
          return true;
        }
      }

      return false;
    }
	},
	methods: {
    loadProjects() {
      let t = this;

      let fetchParams = {
        method: 'GET',
        //headers: headers,
      };

      fetch(this.endPoint + '/load-projects', fetchParams)
          .then((response) => {
            response.json().then((data) => {
              for (let i in data) {
                data[i].hidden = i >= this.onPage
              }

              t.projects.push(...data)
            });
          })
          .catch((err) => {
            console.error(err);
          });
    },
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
    moreProjects() {
      let count = this.onPage;

      for (let i in this.projects) {
        if(this.projects[i].hidden && count) {
          this.projects[i].hidden = false;
          count--;
        }
      }
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
				class="text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						w-full
						sm:w-auto
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Поиск..."
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>

  <!-- Load more projects button -->
  <div class="mt-10 sm:mt-20 flex justify-center" v-if="this.notAllVisible">
    <div
        class="font-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        aria-label="Больше проектов"
        @click="this.moreProjects()"
    >
      <Button title="Больше проектов" />
    </div>
  </div>
</template>

<style scoped></style>
