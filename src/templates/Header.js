const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/home">
            Rick And Morty
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
        <a href="#/contact/">
          Contact
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;