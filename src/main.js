import {createApp, reactive} from 'vue';
import App from './App.vue';
import router from './router';
import './app.css';
import BackToTop from 'vue-backtotop';

let app = createApp(App);

app.config.globalProperties.nextProject = reactive({
	link: false
})
app.config.globalProperties.prevProject = reactive({
	link: false
})
app.config.globalProperties.globalTag = reactive({
	tag: false
})

app
	.use(router)
	.use(BackToTop)
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
