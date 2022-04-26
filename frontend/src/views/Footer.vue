<template>
     <div class="footer">
              <div class="icons">
<i class="icon fa-brands fa-instagram" ></i>
<i class="icon fa-brands fa-facebook"></i>
<i class="icon fa-brands fa-twitter"></i>
<i class="icon fa-brands fa-linkedin-in"></i>
    </div>
               <p class="item">Contuct Us (93700655)</p>
          <div class="copyright"> <p >Company Name: 'NearShop' © 2022 </p></div> 
        </div>
</template>
<script>
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Footer'
}
</script>
<style>
:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}
.footer{
  color:white;
  width: 100%;
  padding: 20px;
  background-color: #1d3557;
  text-align: center;
  position: relative;
  bottom:0;
  /* background: rgb(203, 223, 223); */
}
.icon{
    font-size: 25px;
    margin-right:10px;

}
.icons,.copyright{
flex: 3;
display: flex;
align-items: center;
justify-content: center;

}
.item{
  flex: 6;
}

 
</style>
