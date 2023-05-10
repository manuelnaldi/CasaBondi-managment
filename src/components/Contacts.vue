<template>
        <div class="card-contacts">
            <h1>Contatti</h1>
            <br>
            <p>Di seguito il qrcode del gruppo whatsapp 
                per poter entrare a far parte dei volontari!
            </p>
            <br>
            <p>QR Code:</p>
            <div class="imgContainer">
                <img src="/qrCode.png">
            </div>
        </div>
</template>

<style>
.imgContainer img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 3rem;
}

.card-contacts{
    padding: 1rem;
    width: 30rem;
    height: 40rem;
    background-color: #dc143cd4;
    margin: 0 auto;
    border-radius: 3rem;
    color: rgb(230, 217, 217);

    @media only screen and (max-width: 500px) {
        width: auto;
        height: auto;
    }
}

.card-contacts h1{
    text-align: center;
    color: white;
}

.card-contacts p{
    text-align: center;
}
</style>
