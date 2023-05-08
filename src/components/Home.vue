<template>
    <img class="castenaso-1" src="/og-stemma-castenaso.svg">
    <div class="card">
        <h1>Benvenuto!</h1>
        <p>Sito web creato per gli studiosi della bibilioteca di Castenaso che vogliono consultare
        l'apertura della biblioteca negli orari in cui dovrebbe rimanere chiusa.
        Il progetto in questo momento è ancora in prova.</p>
        <br>
        <p>Nella sezione <b>calendario</b> è possibile accedere per consultare i diversi orari di disponibilità!</p>
        <br>
        <p>Nella sezione <b>contatti</b> puoi trovare il link al gruppo whatsapp per comunicare le tue disponibilità,
        in qualitàdi volontario, che verranno aggiunte nel calendario su questo sito web.
        Nel caso anche tu voglia partecipare a questo progetto e diventare volontario, entra sempre nel gruppo whatsapp
        per informarti su come fare!</p>
        <br>
    </div>
    <img class="castenaso-2" src="/og-stemma-castenaso.svg">
</template>

<style>
.card{
    padding: 1rem;
    width: 30rem;
    height: 28rem;
    background-color: crimson;
    margin: 0 auto;
    border-radius: 1rem;

    @media only screen and (max-width: 500px) {
        width: auto;
        height: auto;
    }
}

.castenaso{
    position: absolute;
    z-index: -1;
    opacity: 0.3;


}
</style>