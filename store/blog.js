import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogs", {
  state: () => ({
    postsList: [],
    posts: {},
  }),
  actions: {
    async fetchList(page) {
      const pageId = page == 1 ? "" : `_${page}`;
      const list = await fetch(`/api/list${pageId}.json`);
      this.postsList = await list.json();
    },
    async fetchPost(id) {
      const post = await fetch(`/api/posts/${id}.json`);
      const result = await post.json();
      this.posts[id] = result;
    },
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts[id];
    },
  },
});
