<script>
import ThemeSwitcher from '../ThemeSwitcher.vue';

export default {
	components: {
		ThemeSwitcher,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
      gradientClass: '',
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
      colors: [
        {from: 'from-slate-800', to: 'to-slate-400'},
        {from: 'from-zinc-800', to: 'to-zinc-400'},
        {from: 'from-neutral-800', to: 'to-neutral-400'},
        {from: 'from-red-800', to: 'to-red-400'},
        {from: 'from-stone-800', to: 'to-stone-400'},
        {from: 'from-orange-800', to: 'to-orange-400'},
        {from: 'from-amber-800', to: 'to-amber-400'},
        {from: 'from-yellow-800', to: 'to-yellow-400'},
        {from: 'from-lime-800', to: 'to-lime-400'},
        {from: 'from-green-800', to: 'to-green-400'},
        {from: 'from-emerald-800', to: 'to-emerald-400'},
        {from: 'from-teal-800', to: 'to-teal-400'},
        {from: 'from-cyan-800', to: 'to-cyan-400'},
        {from: 'from-sky-800', to: 'to-sky-400'},
        {from: 'from-blue-800', to: 'to-blue-400'},
        {from: 'from-indigo-800', to: 'to-indigo-400'},
        {from: 'from-violet-800', to: 'to-violet-400'},
        {from: 'from-purple-800', to: 'to-purple-400'},
        {from: 'from-fuchsia-800', to: 'to-fuchsia-400'},
        {from: 'from-pink-800', to: 'to-pink-400'},
        {from: 'from-rose-800', to: 'to-rose-400'},
        {from: 'from-gray-800', to: 'to-gray-400'},
      ]
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		this.theme = localStorage.getItem('theme') || 'light';

    this.calcGradientClass();
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
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/">
            <span class="text-5xl bg-gradient-to-r bg-clip-text text-transparent font-bold" :class="gradientClass" @click="calcGradientClass">paShaman</span>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
				/>
			</div>

			<!-- Header right section buttons -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
        <!-- Theme switcher large screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/>
			</div>
		</div>
	</nav>
</template>
