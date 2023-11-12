<nav>
   <a href="/">Home</a>
   <a href="/projects">Projects</a>
</nav>

<slot/>

<footer>
   <span>ATTE PERÄMÄKI</span>
</footer>

<style>
   footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
   }
   span {
      color: var(--fg-3);
   }
</style>