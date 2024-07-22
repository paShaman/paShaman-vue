<script>
export default {
	name: 'NotFound',
};
</script>

<template>
  <div class="pt-20 flex flex-col items-center justify-center text-primary-dark dark:text-primary-light">

    <div class="text-9xl mb-10">404</div>
    <div class="text-5xl mb-20">Страница не найдена</div>
    <router-link to="/"
        class="font-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300 cursor-pointer"
    >
      Перейти на главную
    </router-link>

	</div>
</template>
