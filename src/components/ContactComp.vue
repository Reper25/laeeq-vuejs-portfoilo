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
        <button type="submit" class="btn btn-dark mb-3">Submit</button>
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
</style>