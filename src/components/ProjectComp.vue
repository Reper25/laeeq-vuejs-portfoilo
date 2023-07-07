<template>
    <br>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col d-flex justify-content-center" v-for="item in projects" :key="item.id">
                    <div class="card bg-dark" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.name">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.name }}</h5>
                          <p class="card-text">{{ item.description }}</p>
                          <a :href="item.github" class="btn btn-light m-1">Github</a>
                          <a :href="item.netlify" class="btn btn-light">Netlify</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
    export default {
        computed : {
            projects() {
                return this.$store.state.projects
            }
        },
        mounted() {
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
.card-title{
  color: aliceblue;
}
.card-text{
  color: aliceblue;
}
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}
.card::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover::before {
  height: 100%;
}

.card:hover {
  box-shadow: none;
}

.card:hover .btn {
  color: #212121;
  background: #FFC107;
}
.card-img-top{
  box-shadow: 0 0 20px rgb(255, 247, 0);
}
</style>