<template>
    <div class="food">
    <div class="overlay w-100 h-100">
        <br>
        <br>
      <div>
        <img src="https://i.postimg.cc/NMfj5YN0/Screenshot-2023-07-08-154723-removebg-preview.png" alt="" loading="lazy">
<h1>I'm <span class="name">LAEEQ MAJAL</span> <br> An <span class="dream">ASPIRING DEVELOPER</span></h1>
<router-link to="/about"><button class="custom-btn btn-2">Personal</button></router-link>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.food{
    background-image: url(https://i.postimg.cc/kXcSM6cW/1289337.jpg);
    background-size: cover;
  background-position: center;
  height: 86vh;
}
.food .overlay {
  backdrop-filter: blur(3px);
}
h1{
 color: rgb(249, 250, 174);
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #000000;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  font-size: 15px;
}

.btn-2 {
  background: #ffee00;
  background: linear-gradient(0deg, #e5ff00 0%, #e5ff00 100%);
  border: none;
}

.btn-2:before {
  height: 0%;
  width: 2px;
}

.btn-2:hover {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}

</style>