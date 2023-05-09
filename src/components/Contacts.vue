<template>
    <div class="card-contacts">
        <h1>Contatti</h1>
        <br>
        <p>Di seguito il qrcode del gruppo whatsapp 
            per poter entrare a far parte dei volontari!
        </p>
        <br>
        <p>QR Code:</p>
        <img class="qrcode" src="/qrCode.png">
    </div>
</template>

<style>
.card-contacts img{
    border-radius: 3rem;
    width: 100%;
    height: auto;
    
}

.card-contacts h1{
    text-align: center;
    color: white;
}

.card-contacts{
    padding: 1rem;
    width: 28rem;
    height: 38rem;;
    background-color: #dc143cd4;
    margin: 0 auto;
    border-radius: 3rem;
    color: rgb(230, 217, 217);

    @media only screen and (max-width: 500px) {
        width: auto;
        height: auto;
    }
}
</style>