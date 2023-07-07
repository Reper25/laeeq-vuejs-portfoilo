<template>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col d-flex justify-content-center" v-for="item in testimonials" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.Name">
                        <div class="card-body">
                          <p class="card-text">{{ item.Name }}</p>
                          <p class="card-text">{{ item.paragraph }}</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            testimonials() {
                return this.$store.state.testimonials
            }
        },
        mounted() {
            this.$store.dispatch('fetchTestimonials');
        }
    }
</script>

<style scoped>


</style>