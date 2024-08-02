<script>
export default {
  emits: ['selectTags'],
	props: {
		tags: {
			type: Array,
			default: [],
		},
    cnt: 0
	},
  methods: {
    calcTagClass(tag) {
      let str = ''

      if (tag.count >= 100) {
        str = 'bg-violet-300 text-violet-700 hover:border-violet-700 border-violet-400';
      } else if (tag.count >= 50) {
        str = 'bg-emerald-300 text-emerald-700 hover:border-emerald-700 border-emerald-400';
      } else if (tag.count >= 10) {
        str = 'bg-amber-300 text-amber-700 hover:border-amber-700 border-amber-400';
      } else if (tag.count >= 5) {
        str = 'bg-cyan-200 text-cyan-600 hover:border-cyan-600 border-cyan-300';
      } else {
        str = 'bg-gray-100 text-gray-500 hover:border-gray-500 border-gray-200';
      }

      if (tag.selected) {
        str = 'bg-rose-600 text-rose-200 border-rose-900';
      }

      return str;
    },
    toggleTag(tag) {
      tag.selected = !tag.selected;

      this.$emit('selectTags', this.tags.filter((el) => el.selected == true));
    },
    selectAll() {
      for (let i in this.tags) {
        this.tags[i].selected = false;
      }

      this.$emit('selectTags', []);
    }
  }
};
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <span class="inline-block rounded-md px-2.5 cursor-pointer transition-all border-2 duration-300 bg-white hover:border-gray-500" @click="selectAll()">Все - <b>{{ cnt }}</b></span>
    <div v-for="tag in tags">
      <span class="inline-block rounded-md px-2.5 cursor-pointer transition-all border-2 duration-300" :class="calcTagClass(tag)" @click="toggleTag(tag)">{{ tag.name }} - <b>{{ tag.count }}</b></span>
    </div>
  </div>
</template>
