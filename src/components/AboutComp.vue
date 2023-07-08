<template>
  <h2>About</h2>
  <div class="container p-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col">
        <div>
          <img
            class="img p-0 aboutImg rounded-3 img-fluid"
            src="https://i.postimg.cc/PrfngMHk/20220503-113335-removebg-preview.png"
            alt="laeeq majal"
            loading="lazy"
          />
        </div>
      </div>
      <div class="col m-1 bg-dark rounded-4 my-1">
        <p class="colfont">
          I am Laeeq Majal, born on 25/01/2004. Currently, I reside in
          Bonteheuwel with my father. I am fluent in two languages: English and
          Afrikaans. During my high school years, I exhibited a strong work
          ethic and was recognized for my dedication, being nominated to become
          a prefect. My passion lies in technology, and I thoroughly enjoy
          exploring its vast potential. I aspire to expand my knowledge and
          skills to the point where I can create my very own operating system
          capable of running on any device.
        </p>
      </div>
      <div class="col bg-dark rounded-4 my-1" style="width: 300px;">
        <br>
        <br>
        <br>
        <h3 class="aww">Contact Details</h3>
        <li>
          <p>
            Laeeq Majal
          </p>
        </li>
        <br>
        <li>
          <p>
            laeeqmajal25@gmail.com
          </p>
        </li>
        <br>
        <li>
          <p>
            078 952 7517
          </p>
        </li>
        <br>
        <li>
          <p>
            89 Waterway Road <br>
            Bonteheuwel <br>
            7764
          </p>
        </li>
        <br>
        <a href="https://doc-0k-88-docs.googleusercontent.com/docs/securesc/raefhvokb34798pens1rusuqk220mi4v/o5fuusssa40qmn34hfve133bdc1omkv6/1688826300000/07665247191982483761/07665247191982483761/13OC4HFU0eUIqVabsEgFNynD6G_wnMgMa?e=download&ax=AGtFMPVwinYGVQv4vjjQcUKkrBZ6zwDglGNhvh7YJjGE4nIZg1rL0wqcMONPoYN51RLyuX6_bVNgNcAl3aPsBp1Dh4Yta_FEjXirkhtGwcuLCo8OvCFZhEd1PqgacR8bFZ1OPpEHKrce1EfwJt4o4XuWmO60vVRd_qPntz9isG3mYX_JmdrceW6d-gRPgL1ZI_XVl3t8Sc5_OQyWvmgEMcdfNaE7vHdF13vgf9UDusgG8CGCAtqpBtbnjBVnwQbt9qjj-SA9FLwfvE63FTMGPS4EBkjBNTaegeWevpoDFvnGcAN5ozANL2D7G5tEnD6wJZluQUXO5erxL0ZwZrUxVH7GECfoeLn7qOf32EtVsUpBfc8ePowHDQK0Skm9cnSFarzUBSvuVMI4MBU7h6WqLXRGtKUKIs1GHwi41gh9FT58KEtIb8z6334VZrHpXRVxayWXxpvBgDKZwEHAZOjYPRzMG0uQG_NYicPleKOrIIBLJHytw9tfl1_hhnqT1czBmV7qXzgdmLMVLHy_fSszUQdm6v5YUthvUZ-3gvEt6zRawIrOhhm0h3KFd4J6I5G15wsUukdID53zEV5YrwVfrUQZaod1ZCRhKPtsY3poirz0UhdQF2ohQxss95v93b2_rmM_QeSnSQLPjPPxybllUA1X0P2Alp1bTcKPvq7HkPTaDg83mFwDiZKhzwCQa1vg90wT5IhcTxZ5vInp28QYf3BxZV5eLxjvApQVnjQRVvXghFyZMlBhaq17aB39LRhkeE4toz8_vTjQRDbeKwbAX6D1itBUOj9HQxKRCqOnMJ0-wljydIPjFVJWENAq6d_273r-1wOW8F5zNGC6oGio_svTl-QmolZOHmDtUDFJ7XvuKzvDBiByCx66bY0Q6aWiqD12bw&uuid=2281c93b-6be1-4f36-b007-5cf99f6bc190&authuser=0&nonce=5eajooor8r5rs&user=07665247191982483761&hash=jlq791mj9ll2ffk0itk7f1g9c2vd56uv" target="_blank" rel="CV"><button class="btn">My CV</button></a>
      <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
.aboutImg {
  border-radius: 10px;
  width: 70%;
}
p {
  color: #f9d949;
  font-family: "Raleway", sans-serif;
  font-size: x-large;
}
.aww{
  color: #f9d949;
}
li{
  list-style-type: none;
}

.btn {
 width: 130px;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #171717;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
}

.btn:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}

.btn:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}
</style>
