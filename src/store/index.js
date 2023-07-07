import { createStore } from 'vuex'

const dataURL = "https://reper25.github.io/json_server/jsondata.json"

export default createStore({
  state: {
    projects : null,
    testimonials : null,
    education : null,
    skills : null,
    message: null
  },
  getters: {
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setMsg(state, value) {
      state.message = value
    }
  },
  actions: {
    async fetchTestimonials(context) {
      try{
        let res = await fetch(dataURL);
        let {testimonials} = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials)
        }else {
          alert("error")
        }
      }
      catch (e) {
        console.error("error")
      }
    },
    async fetchProjects(context) {
      try{
        let res = await fetch(dataURL);
        let {projects} = await res.json();
        if (projects) {
          context.commit("setProjects", projects)
        }else {
          context.commit("setMsg", "No projects")
        }
      }
      catch (e) {
        context.commit("setMsg", "AN error occurred!")
      }
    },
    async fetchEducation(context) {
      try{
        let res = await fetch(dataURL);
        let {Education} = await res.json();
        if (Education) {
          context.commit("setEducation", Education)
        }else {
          context.commit("setMsg", "No education")
        }
      }
      catch (e) {
        context.commit("setMsg", "AN error occurred!")
      }
    },
    async fetchSkills(context) {
      try{
        let res = await fetch(dataURL);
        let {skills} = await res.json();
        if (skills) {
          context.commit("setSkills", skills)
        }else {
          context.commit("setSkills", skills)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
