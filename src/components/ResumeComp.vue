<template>
    <div>
        <div class="container">
            <h1 class="education">Education</h1>
            <div class="row">
                <div class="col" v-for="item in education" :key="item?.id">
                    <div class="card" >
                        <img :src="item?.image" class="card-img-top" :alt="item?.name">
                        <div class="card-body">
                          <p class="card-text">{{ item.Name }}</p>
                          <p class="card-text">{{ item.Year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="soft">Soft Skillsssssssss</h1>
            <div class="row">
                <div class="col" v-for="item in skills" :key="item?.id">
                    <div class="card">
                        <div class="card-body">
                         <p>{{ item.name }}</p>
                         <p><img :src="item.image" :alt="item.name" loading="lazy"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1 class="tech">Technical Skills</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col d-flex justify-content-center" v-for="item in skills" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                                <img :src="item.image" class="card-img-top" :alt="item.name">
                                <div class="card-body">
                                  <h5 class="card-title">{{ item.name }}</h5>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed : {
        education() {
                return this.$store.state.education
            },
            technical() {
                return this.$store.state.technical
            },
            skills() {
                return this.$store.state.skills
            }
        },
        mounted() {
            this.$store.dispatch('fetchEducation'),
            this.$store.dispatch('fetchSkills'),
            this.$store.dispatch('fetchTechnical')
        }
    }
</script>

<style scoped>

</style>