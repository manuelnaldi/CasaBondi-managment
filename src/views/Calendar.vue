<template>
  <div class="container">
    <iframe 
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23D50000&ctz=Europe%2FRome&mode=MONTH&title=Orari%20Biblioteca&src=ZDdjMmI3YzI5YTM1MDE2NDU1MTU0N2U2NmI3MGRlOWIxNzYyMzhjOTIxZjAxNDBjNGRiY2Y4NDhjZWVmNzFiYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441" 
      loading="eager"
      >
    </iframe>
  </div>
  <br>
  <p class="mobile"><b>NB: Per consultare al meglio questa pagina posiziona il tuo telefono in orizzontale</b></p>
</template>

<style>
.mobile{
  text-align: center;
  color: black;
  @media only screen and (min-width: 540px) {
        display: none;
    }
}

iframe{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.container{
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    background-color: #dc143c;
}
</style>
    