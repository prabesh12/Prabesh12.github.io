const createFooter = () => {
  let footer = document.querySelector(".footer");
  footer.innerHTML = `
    <div class="foot-container">
    <ul class="foot-ul">
      <li class="foot-li"><a class="link" href="">Market Segments</a></li>
      <li class="foot-li"><a class="link" href="">Brands</a></li>
      <li class="foot-li"><a class="link" href="">Collections</a></li>
      <li class="foot-li"><a class="link" href="">Resources</a></li>
      <li class="foot-li"><a class="link" href="">Terms</a></li>
      <li class="foot-li"><a class="link" href="">Privacy</a></li>
    </ul>
  </div>
  <div class="foot-container">
    <ul class="foot-ul">
      <li class="foot-li"><a class="link" href="">LinkedIN</a></li>
      <li class="foot-li"><a class="link" href="">Facebook</a></li>
      <li class="foot-li"><a class="link" href="">Instagram</a></li>
      <li class="foot-li"><a class="link" href="">Youtube</a></li>
    </ul>
  </div>
  <div class="foot-container">
    <ul class="foot-ul">
      <li class="foot-li">
        <a class="link" href="">Customercare@gmail.com</a>
      </li>
      <li class="foot-li"><a class="link" href="">9809761893</a></li>
      <li class="foot-li"><a class="link" href="">General Inquary</a></li>
      <li class="foot-li"><a class="link" href="">Rwquest a Quote</a></li>
    
    </ul>
  </div>
    `;
};
createFooter();
