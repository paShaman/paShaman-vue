<script>
import feather from 'feather-icons';
import Fancybox from '../Fancybox.vue';

export default {
	props: ['project'],

  data() {
    return {
      gradientClass: '',
      colors: [
        {from: 'from-slate-300', to: 'to-slate-100'},
        {from: 'from-zinc-300', to: 'to-zinc-100'},
        {from: 'from-neutral-300', to: 'to-neutral-100'},
        {from: 'from-red-300', to: 'to-red-100'},
        {from: 'from-stone-300', to: 'to-stone-100'},
        {from: 'from-orange-300', to: 'to-orange-100'},
        {from: 'from-amber-300', to: 'to-amber-100'},
        {from: 'from-yellow-300', to: 'to-yellow-100'},
        {from: 'from-lime-300', to: 'to-lime-100'},
        {from: 'from-green-300', to: 'to-green-100'},
        {from: 'from-emerald-300', to: 'to-emerald-100'},
        {from: 'from-teal-300', to: 'to-teal-100'},
        {from: 'from-cyan-300', to: 'to-cyan-100'},
        {from: 'from-sky-300', to: 'to-sky-100'},
        {from: 'from-blue-300', to: 'to-blue-100'},
        {from: 'from-indigo-300', to: 'to-indigo-100'},
        {from: 'from-violet-300', to: 'to-violet-100'},
        {from: 'from-purple-300', to: 'to-purple-100'},
        {from: 'from-fuchsia-300', to: 'to-fuchsia-100'},
        {from: 'from-pink-300', to: 'to-pink-100'},
        {from: 'from-rose-300', to: 'to-rose-100'},
        {from: 'from-gray-300', to: 'to-gray-100'},
      ]
    };
  },

  components: {
    Fancybox,
  },

	mounted() {
		feather.replace();

    this.calcGradientClass();
	},
	updated() {
		feather.replace();
	},

  methods: {
    calcGradientClass() {
      let color = this.colors[this.randomInt(1, this.colors.length - 1)];

      this.gradientClass = color.from + ' ' + color.to;
    },
    randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<template>
	<div class="block md:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full md:w-2/3 text-left">
      <Fancybox>
        <a :href="project.host + (project.image_full || project.image)" data-fancybox>
          <img
              :src="project.host + project.image" v-if="project.image"
              class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </a>
      </Fancybox>
    </div>

		<!-- Single project right section details -->
		<div class="w-full md:w-1/3 text-left mt-10 md:mt-0">
			<div class="mb-7">
				<ul class="leading-loose grid gap-3">
					<li
						v-for="author in project.authors"
						class="font-normal text-ternary-dark dark:text-ternary-light flex items-center gap-5"
					>
            <img :src="project.host + author.image" class="w-16 rounded-full">

            <div>
						  <span v-if="!author.site">{{ author.name }}</span>
						  <a v-if="author.site" :href="author.site" class="hover:underline cursor-pointer">{{ author.name }}</a>

              <div class="opacity-60 -mt-0.5 text-xs">
                {{ author.pivot.role }}
              </div>
            </div>
					</li>
				</ul>
			</div>

      <div class="mb-7" v-if="project.info">
        <p
            class="font-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Описание
        </p>
        <p
            class="font-normal text-primary-dark dark:text-ternary-light"
        >
          {{ project.info }}
        </p>
      </div>

      <div class="mb-7">
        <p
            class="font-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          Теги
        </p>
        <div
            class="font-normal text-primary-dark dark:text-ternary-light flex gap-1 flex-wrap"
        >
          <span v-for="tag in project.tags" class="inline-block rounded-md px-2.5 border-2">{{ tag }}</span>
        </div>
      </div>

			<div class="mb-7" v-if="project.versions && project.versions.length > 1">
				<p
					class="font-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					Версии
				</p>

        <div class="flex flex-wrap gap-2">
          <a :href="version.link"
            v-for="version in project.versions"
            class="font-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl text-white duration-300 cursor-pointer"
           :class="{'bg-indigo-500 hover:bg-indigo-600': !version.current, 'bg-emerald-500 hover:bg-emerald-600': version.current}"
          >
            {{ version.version }}
          </a>
        </div>
			</div>

			<div class="mb-7 p-4 rounded-xl bg-gradient-to-r" v-if="project.works && project.works.length > 1" :class="gradientClass">
				<p
					class="font-medium text-2xl text-ternary-dark mb-4"
				>
					Работа
				</p>

        <div class="grid gap-4 text-primary-dark">
          <div v-for="work in project.works" class="flex gap-2 items-start">
            <a :href="work.link" target="_blank"
              class="font-medium hover:underline cursor-pointer w-[6rem]"
            >{{ work.name }}</a>

            <div class="flex-1">
              {{ work.years.join(', ') }}
            </div>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>
