<script>
import counter from "vue-number-animation";
import feather from "feather-icons";

export default {
	components: {
		counter,
	},
	data: () => {
		return {
      startYear: 2006,
      experience: 0,
      projects: 292,
      countries: 24,
      cups: 6794
    };
	},
  mounted() {
    feather.replace();

    this.experience = new Date().getFullYear() - this.startYear;

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    this.cups = Math.floor((this.experience * 365 * 100 + dayOfYear * this.randomInt(100, 200)) / 100);
  },
  methods: {
    pluralize(count, words) {
      var cases = [2, 0, 1, 1, 1, 2];
      return words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
    },
    randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    format(num) {
      const formatter = new Intl.NumberFormat('ru-Ru');

      return formatter.format(Number.parseInt(num).toFixed(0));
    }
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-normal container mx-auto py-20 block sm:flex sm:justify-between sm:items-center flex-wrap"
		>
			<!-- Years of experience counter -->
			<div class="mb-16 sm:mb-0 sm:w-1/2 md:w-auto sm:pb-10 md:pb-0">
        <div class="flex items-center gap-2 mb-2 justify-center">
          <i
              data-feather="layout"
              class="w-5 sm:w-8 h-5 sm:h-8 text-ternary-dark dark:text-ternary-light"
          ></i>
          <counter
              ref="counter1"
              :from="0"
              :to="this.projects"
              :duration="1.7"
              :format="format"
              autoplay
              easing="linear"
              class="font-medium text-4xl text-secondary-dark dark:text-secondary-light"
          />
        </div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ pluralize(this.projects, ['Проект', 'Проекта', 'Проектов']) }}
				</span>
			</div>

			<!-- GitHub stars counter -->
			<div class="mb-16 sm:mb-0 sm:w-1/2 md:w-auto sm:pb-10 md:pb-0">
        <div class="flex items-center gap-2 mb-2 justify-center">
          <i
              data-feather="clock"
              class="w-5 sm:w-8 h-5 sm:h-8 text-ternary-dark dark:text-ternary-light"
          ></i>
          <counter
              ref="counter2"
              :from="0"
              :to="this.experience"
              :duration="1.5"
              :format="format"
              autoplay
              easing="linear"
            class="font-medium text-4xl text-secondary-dark dark:text-secondary-light"
          />
        </div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>
          {{ pluralize(this.experience, ['Год опыта', 'Года опыта', 'Лет опыта']) }}
        </span
				>
			</div>

			<!-- Positive feedback counter -->
			<div class="mb-16 sm:mb-0 sm:w-1/2 md:w-auto">
        <div class="flex items-center gap-2 mb-2 justify-center">
          <i
              data-feather="coffee"
              class="w-5 sm:w-8 h-5 sm:h-8 text-ternary-dark dark:text-ternary-light"
          ></i>
          <counter
              ref="counter3"
              :from="0"
              :to="this.cups"
              :duration="1.9"
              :format="format"
              autoplay
              easing="linear"
            class="font-medium text-4xl text-secondary-dark dark:text-secondary-light"
          />
        </div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ pluralize(this.cups, ['Чашка кофе', 'Чашки кофе', 'Чашек кофе']) }}
				</span>
			</div>

			<!-- Projects completed counter -->
			<div class="sm:w-1/2 md:w-auto">
        <div class="flex items-center gap-2 mb-2 justify-center">
          <i
              data-feather="globe"
              class="w-5 sm:w-8 h-5 sm:h-8 text-ternary-dark dark:text-ternary-light"
          ></i>
          <counter
              ref="counter4"
              :from="0"
              :to="this.countries"
              :duration="1.6"
              :format="format"
              autoplay
              easing="linear"
            class="font-medium text-4xl text-secondary-dark dark:text-secondary-light"
          />
        </div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ pluralize(this.countries, ['Страна посещена', 'Страны посещено', 'Стран посещено']) }}
				</span>
			</div>
		</div>
	</div>
</template>
