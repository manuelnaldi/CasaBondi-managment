<template>
        <div class="card">
            <h1>Benvenuto!</h1>
            <p>Sito web creato per gli <i>studiosi</i> della bibilioteca di Castenaso che vogliono consultare
            l'apertura della biblioteca anche negli orari in cui dovrebbe rimanere chiusa.
            <br>
            <br>
            <b><i>Il progetto in questo momento è ancora in fase di sviluppo.</i></b></p>
            <br>
            <p>Nella sezione <b>calendario</b> è possibile accedere per consultare i diversi orari di disponibilità!</p>
            <br>
            <p>Nella sezione <b>contatti</b> puoi trovare il link al gruppo whatsapp per comunicare le tue disponibilità,
            in qualità di volontario, che verranno aggiunte nel calendario su questo sito web.
            <br>
            Vuoi diventare anche tu un volontario? Facile! Entra sul gruppo Whatsapp per avere più informazioni!</p>
            <br>
        </div>
</template>

<style>
.card h1{
    text-align: center;
    color: white;
}

.card p{
    text-align: center;
}

.card{
    padding: 1rem;
    width: 30rem;
    height: 30rem;
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