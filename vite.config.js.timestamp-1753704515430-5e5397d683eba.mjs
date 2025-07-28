// vite.config.js
import { sveltekit } from "file:///home/project/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///home/project/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "/config_terminal": process.env.WEBVM_MODE == "github" ? "config_github_terminal.js" : "config_public_terminal.js",
      "@leaningtech/cheerpx": process.env.CX_URL ? process.env.CX_URL : "@leaningtech/cheerpx"
    }
  },
  build: {
    target: "es2022"
  },
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        { src: "tower.ico", dest: "" },
        { src: "scrollbar.css", dest: "" },
        { src: "serviceWorker.js", dest: "" },
        { src: "login.html", dest: "" },
        { src: "assets/", dest: "" },
        { src: "documents/", dest: "" }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5JztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnL2NvbmZpZ190ZXJtaW5hbCc6IHByb2Nlc3MuZW52LldFQlZNX01PREUgPT0gXCJnaXRodWJcIiA/ICdjb25maWdfZ2l0aHViX3Rlcm1pbmFsLmpzJyA6ICdjb25maWdfcHVibGljX3Rlcm1pbmFsLmpzJyxcblx0XHRcdFwiQGxlYW5pbmd0ZWNoL2NoZWVycHhcIjogcHJvY2Vzcy5lbnYuQ1hfVVJMID8gcHJvY2Vzcy5lbnYuQ1hfVVJMIDogXCJAbGVhbmluZ3RlY2gvY2hlZXJweFwiXG5cdFx0fVxuXHR9LFxuXHRidWlsZDoge1xuXHRcdHRhcmdldDogXCJlczIwMjJcIlxuXHR9LFxuXHRwbHVnaW5zOiBbXG5cdFx0c3ZlbHRla2l0KCksXG5cdFx0dml0ZVN0YXRpY0NvcHkoe1xuXHRcdFx0dGFyZ2V0czogW1xuXHRcdFx0XHR7IHNyYzogJ3Rvd2VyLmljbycsIGRlc3Q6ICcnIH0sXG5cdFx0XHRcdHsgc3JjOiAnc2Nyb2xsYmFyLmNzcycsIGRlc3Q6ICcnIH0sXG5cdFx0XHRcdHsgc3JjOiAnc2VydmljZVdvcmtlci5qcycsIGRlc3Q6ICcnIH0sXG5cdFx0XHRcdHsgc3JjOiAnbG9naW4uaHRtbCcsIGRlc3Q6ICcnIH0sXG5cdFx0XHRcdHsgc3JjOiAnYXNzZXRzLycsIGRlc3Q6ICcnIH0sXG5cdFx0XHRcdHsgc3JjOiAnZG9jdW1lbnRzLycsIGRlc3Q6ICcnIH1cblx0XHRcdF1cblx0XHR9KVxuXHRdXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxpQkFBaUI7QUFDblAsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxzQkFBc0I7QUFFL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sb0JBQW9CLFFBQVEsSUFBSSxjQUFjLFdBQVcsOEJBQThCO0FBQUEsTUFDdkYsd0JBQXdCLFFBQVEsSUFBSSxTQUFTLFFBQVEsSUFBSSxTQUFTO0FBQUEsSUFDbkU7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsZUFBZTtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1IsRUFBRSxLQUFLLGFBQWEsTUFBTSxHQUFHO0FBQUEsUUFDN0IsRUFBRSxLQUFLLGlCQUFpQixNQUFNLEdBQUc7QUFBQSxRQUNqQyxFQUFFLEtBQUssb0JBQW9CLE1BQU0sR0FBRztBQUFBLFFBQ3BDLEVBQUUsS0FBSyxjQUFjLE1BQU0sR0FBRztBQUFBLFFBQzlCLEVBQUUsS0FBSyxXQUFXLE1BQU0sR0FBRztBQUFBLFFBQzNCLEVBQUUsS0FBSyxjQUFjLE1BQU0sR0FBRztBQUFBLE1BQy9CO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
