<template>
    <div class="thing">
        <h1 class="m-4">Contact</h1>
    <p></p>
    <form
  action="https://formspree.io/f/xgebrryz"
  method="POST">
    <div class="col-md-4 m-auto">
        <div class="form-floating">
          <input type="name" name="name" class="form-control" id="floatingInputGrid" placeholder="Name" >
          <label for="floatingInputGrid">Enter Your Name</label>
        </div>
      </div>
     <p></p>
    <div class="col-md-4 m-auto">
        <div class="form-floating">
          <input type="email" name="email" class="form-control" id="floatingInputGrid" placeholder="laeeq.majal@gmail.com" required >
          <label for="floatingInputGrid">Email address</label>
        </div>
      </div>
    <p></p>
      <div class="col-md-4 m-auto">
        <div class="form-floating">
            <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" required></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>
    <p></p>
      <div class="col-md-4 m-auto">
        <!-- <button type="submit" class="btn btn-dark mb-3">Submit</button> -->
        <button type="submit">
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Submit</span>
</button>
      </div>
</form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.thing{
  height: 80vh;
}

button {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  background-color: #171717;
  padding: 1em 2em;
  border: none;
  border-radius: .6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

button span:not(:nth-child(6)) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  background-color: #95a003;
  border-radius: 50%;
  transition: .6s ease;
}

button span:nth-child(6) {
  position: relative;
}

button span:nth-child(1) {
  transform: translate(-3.3em, -4em);
}

button span:nth-child(2) {
  transform: translate(-6em, 1.3em);
}

button span:nth-child(3) {
  transform: translate(-.2em, 1.8em);
}

button span:nth-child(4) {
  transform: translate(3.5em, 1.4em);
}

button span:nth-child(5) {
  transform: translate(3.5em, -3.8em);
}

button:hover span:not(:nth-child(6)) {
  transform: translate(-50%, -50%) scale(4);
  transition: 1.5s ease;
}
</style>