const createNav = ()=>{
    let nav = document.querySelector(".navbar");
    nav.innerHTML = `
    <div class="nav">
    <a href="/"><img src="img/logo.png" class="logo" alt="" /></a>
    <div class="nav-items">
      <div class="search">
        <input
          id ="search-bar"
          type="text"
          class="search-box"
          placeholder="Search product"
        />
        <button class="search-btn" id="search-btn">Search</button>
      </div>
      <a href="reg.html"><img src ="img/profile.png" alt ="" /></a>
      <a href="cart.html"><img src ="img/cart.png" alt ="" /></a>
    </div>
  </div>
  <ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">supliment</a></li>
  </ul>
    `

}

createNav();