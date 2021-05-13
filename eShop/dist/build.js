(()=>{const t="http://localhost:3000";new Vue({el:"#app",data:()=>({goods:[],filteredGoods:[],searchLine:"",cartGoods:[]}),mounted(){this.makeGETRequest(`${t}/catalogData`,(t=>{this.goods=JSON.parse(t),this.filteredGoods=JSON.parse(t)})),this.getCartData()},methods:{getCartData(){this.makeGETRequest(`${t}/cartData`,(t=>{this.cartGoods=JSON.parse(t)}))},addGoodToCart(e){this.makePOSTRequest(`${t}/addToCart`,JSON.stringify(e),(()=>{this.getCartData()}))},deleteGoodFromCart(e){this.makePOSTRequest(`${t}/deleteFromCart`,JSON.stringify(e),(()=>{this.getCartData()}))},makeGETRequest(t,e){var a;window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),a.onreadystatechange=function(){4===a.readyState&&e(a.responseText)},a.open("GET",t,!0),a.send()},makePOSTRequest(t,e,a){let s;window.XMLHttpRequest?s=new XMLHttpRequest:window.ActiveXObject&&(s=new ActiveXObject("Microsoft.XMLHTTP")),s.onreadystatechange=function(){4===s.readyState&&a(s.responseText)},s.open("POST",t,!0),s.setRequestHeader("Content-Type","application/json; charset=UTF-8"),s.send(e)},filterGoods(){const t=new RegExp(this.searchLine,"i");this.filteredGoods=this.goods.filter((e=>t.test(e.product_name)))}}})})();