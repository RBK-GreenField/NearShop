<template>
  <div class="mix">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header menuitem">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span class="fa fa-gift bigicon"></span> 4 - Items in Cart<span
                  class="caret"
                ></span
              ></a>
              <ul class="dropdown-menu dropdown-cart" role="menu">
                <li>
                  <span class="item">
                    <span class="item-left">
                      <span class="item-info">
                        <span></span>
                        <span></span>
                      </span>
                    </span>
                    
                    <!-- <span class="item-right">
                      <button class="btn btn-danger fa fa-close"></button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img
                        src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_2.jpg"
                        alt=""
                      />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>price: 3$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-danger fa fa-close"></button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img
                        src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_3.jpeg"
                        alt=""
                      />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>price: 12$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-danger fa fa-close"></button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img
                        src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_4.jpg"
                        alt=""
                      />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>price: 7$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-danger fa fa-close"></button>
                    </span>
                  </span> -->
                </li>
                <li class="dropdown-divider"></li>
                <li><a class="text-xs-center" href="#">View Cart</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "ShoppingCart",
  methods: {
    // drop() {
    //   $("#e").on("click", function () {
    //     $(".shopping-cart").toggle("slow");
    //   });
    // },
  },
};
</script>

<style>
.bigicon {
  color: white;
}

.mix {
  min-height: 370px;
}

ul.dropdown-cart {
  min-width: 250px;
  border: 2px solid #343434;
  padding: 2px;
  margin: 7px;
  margin-top: 11px;
}
ul.dropdown-cart li .item {
  display: block;
  padding: 3px 10px;
  margin: 3px 0;
}
ul.dropdown-cart li .item:hover {
  background-color: #c3c5c5;
}
ul.dropdown-cart li .item:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

ul.dropdown-cart li .item-left {
  float: left;
}
ul.dropdown-cart li .item-left img,
ul.dropdown-cart li .item-left span.item-info {
  float: left;
}
ul.dropdown-cart li .item-left span.item-info {
  margin-left: 10px;
}
ul.dropdown-cart li .item-left span.item-info span {
  display: block;
}
ul.dropdown-cart li .item-right {
  float: right;
}
ul.dropdown-cart li .item-right button {
  margin-top: 14px;
}
</style>
