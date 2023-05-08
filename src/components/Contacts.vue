<template>
    <img class="castenaso-1" src="/og-stemma-castenaso.svg">
    <div class="card-contacts">
        <h1>Contatti</h1>
        <br>
        <p>Di seguito il link del gruppo whatsapp 
            per poter entrare a far parte dei volontari!
        </p>
        <br>
        <br>
        <p>Link: https://chat.whatsapp.com/B6hkcSAKTaUB7IT9sc2pfv</p>
        <br>
        <br>
        <p>QR Code:</p>
        <img class="qrcode" src="/qrCode.png">
    </div>
    <img class="castenaso-2" src="/og-stemma-castenaso.svg">
</template>

<style>
.qrcode{
    border-radius: 3rem;
}

.card h1{
    text-align: center;
}

.card-contacts{
    padding: 1rem;
    width: 30rem;
    height: 46rem;
    background-color: #dc143ced;
    margin: 0 auto;
    border-radius: 3rem;

    @media only screen and (max-width: 500px) {
        width: auto;
        height: auto;
    }
}

.castenaso-1{
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    top: 10rem;
    right: 1rem;
    @media only screen and (max-width: 520px) {
        display: none;
    }

}

.castenaso-2{
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    top: 10rem;
    left: 1rem;

    @media only screen and (max-width: 520px) {
        display: none;
    }
}
</style>