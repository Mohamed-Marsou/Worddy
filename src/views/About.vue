<script>
export default {

}
</script>

<template>
    <div class="conatiner">
        <img src="../assets/images.png" alt="">
        <h1>
        Introducing our user-friendly dictionary app: "Worddy" created by <a href="/#">MTM</a>. Discover the meaning of any word in a
        flash! Just enter a single word, and let Worddy do the rest. It provides instant definitions along with audio
        pronunciation, making learning a breeze. Enhance your vocabulary on the go with WordSense - your trusted word
        companion. Get ready to explore the world of words with ease and clarity. Experience Worddy today and unlock the
        power of language!
       </h1>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
$ff : 'Poppins', sans-serif;
.conatiner{
    width: 70vw;
    height: 70vh;
    margin: 4rem auto ;
    display: flex;
    font-family: $ff;
    img{
        width: 20vw;
        height: 20rem;
        object-fit: contain;
        margin-top: 1rem;
    }
    h1{
        font-size: 1.3rem;
        padding: 1rem 1.5rem;
        line-height: 4rem;
        color: #555;
        a{
            color: #3cfcac;
            text-decoration:underline;
        }
    }
}

@media screen and (max-width:768px ){
    .conatiner{
    width: 90vw;
   
    img{
        width: 20vw;
        height: 20rem;
        object-fit: contain;
        margin-top: 1rem;
    }
    h1{
        font-size: 1.3rem;
    }
}
}
@media screen and (max-width:500px ){
    .conatiner{
    width: 95vw;
   
    img{
        display: none;
    }
}
}
</style>