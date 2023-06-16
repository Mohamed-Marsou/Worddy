<script>
import axios from 'axios';
export default {
    data() {
        return {
            word: '',
            Error: false,
            errorMessage: "",
            wordData: {
                word: "example",
                phonetics: "/əɡˈzæmpl̩/",
                audio: "https://api.dictionaryapi.dev/media/pronunciations/en/example-us.mp3",
                lexical: "nouns",
                definitions: "Something that is representative of all such things in a group.",
            },
        };
    },
    methods: {
        async submit() {
            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
                if (response.status === 200) {
                    this.Error = false;
                    this.wordData.word = response.data[0].word;
                    let phoneticsArray = response.data[0].phonetics;
                    const phoneticsWithTextAndAudio = phoneticsArray.find(phonetics => phonetics.text && phonetics.audio);
                    this.wordData.phonetics = phoneticsWithTextAndAudio ? phoneticsWithTextAndAudio.text : "NOT AVAILABLE";
                    this.wordData.audio = phoneticsWithTextAndAudio ? phoneticsWithTextAndAudio.audio : "NOT AVAILABLE";
                    this.wordData.lexical = response.data[0].meanings[0].partOfSpeech;
                    this.wordData.definitions = response.data[0].meanings[0].definitions[0].definition ? response.data[0].meanings[0].definitions[0].definition : "NOT AVAILABLE";
                }

            } catch (e) {
                console.log(e);
                if (e.response && e.response.status !== 200) {
                    this.Error = true;
                    this.errorMessage = `Error: Unable to fetch word ${this.word}`;
                }
            }
        },
    }
};
</script>
<template>
    <div class="Trasnlation_container ">
        <div class="inp">
            <img src="../assets/993441.png" alt="993441">
            <input type="text" v-model="word" placeholder="Enter your word">
            <button @click="submit"> SUBMIT </button>
            <div class="fltr"></div>
        </div>
        <div :class="{ 'outp': !Error, 'hidden': Error }">
            <div class="slot">
                <h1>Word :</h1>
                <span>
                    {{ wordData.word }}
                    <p title="phonetics">{{ wordData.phonetics }} </p>
                </span>
            </div>
            <div class="slot">
                <h1>Audio</h1>
                <span>
                    <audio :src="wordData.audio" controls>
                        Your browser does not support the audio element.
                    </audio>
                </span>
            </div>
            <div class="slot">
                <h1>lexical category :</h1>
                <span>
                    {{ wordData.lexical }}
                </span>
            </div>
            <div class="slot">
                <h1>Definition:</h1>
                <span>
                    {{ wordData.definitions }}
                </span>
            </div>
        </div>
        <div class="error" :class="{ 'hidden': !Error }">
            <h1>
                {{ errorMessage }}
            </h1>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

$ff : 'Poppins',
sans-serif;

@mixin flexBox($jc : center, $ai : center) {
    display: flex;
    justify-content: $jc;
    align-items: $ai;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    a {
        color: #555;
        text-decoration: none;
    }
}

.Trasnlation_container {
    width: 100vw;
    height: calc(100vh - 6rem);
    display: flex;
    font-family: $ff;

    >div {
        width: 50%;
        height: 100%;
        @include flexBox();
        position: relative;

    }

    .inp {
        flex-direction: column;

        img {
            z-index: 2;
            width: 22vw;
            animation: up-down 3s infinite ease-in-out;
        }

        @keyframes up-down {
            0% {
                transform: translateY(0px);
            }

            50% {
                transform: translateY(-15px);
            }

            100% {
                transform: translateY(0px);
            }
        }

        input,
        button {
            z-index: 2;
            margin-top: 2rem;
            width: 20vw;
            height: 3rem;
            border: none;
            border-radius: 20px;
            padding: 0 1.5rem;
        }

        button {
            margin-top: 1.5rem;
            background-color: rgb(60, 252, 172);
            color: antiquewhite;
            font-size: large;
            cursor: pointer;
        }
    }

    .fltr {
        width: 70%;
        height: 70vh;
        border: 1px solid black;
        background-color: rgba(134, 247, 209, 0.733);
        filter: blur(36px);
        border-radius: 50%;
        @include flexBox();
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .outp {
        flex-direction: column;

        .slot {
            width: 100%;
            min-height: 5rem;
            padding: 1rem 2vw;

            h1 {
                padding: 1rem;
                font-size: 1.4rem;
                user-select: none;
            }

            span {
                padding: 0 0 0 1rem;
                font-size: .9rem;
                display: flex;
                gap: 1rem;

                p {
                    color: #555;
                }
            }

            audio {
                max-width: 400px;
                margin-bottom: 10px;
            }

            /* Style the playback controls */
            audio::-webkit-media-controls-panel {
                border-radius: 5px;
                padding: 10px;
            }

            /* Style the play/pause button */
            audio::-webkit-media-controls-play-button {
                background-color: rgb(60, 252, 172);
                color: #f7f7f7;
                padding: 5px;
                border-radius: 50%;
            }

            /* Style the volume slider */
            audio::-webkit-media-controls-volume-slider {
                background-color: rgb(60, 252, 172);
            }
        }
    }
}

@media screen and (max-width:800px) {
    .Trasnlation_container {
        flex-direction: column !important;
        gap: 1rem;

        >div {
            width: 100vw !important;
        }

        .inp {
            min-height: 80vh !important;

            input,
            button {
                width: 50vw !important;
            }

            img {
                width: 32vw !important;
            }
        }

        .outp {
            h1 {
                font-size: 4vw !important;
            }

            span {
                font-size: 2vw !important;
            }
        }
    }
}

@media screen and (max-width:800px) {
    .Trasnlation_container {
        .inp {

            input,
            button {
                width: 55vw !important;
            }

            img {
                width: 45vw !important;
            }
        }

        .outp {
            h1 {
                font-size: 8vw !important;
            }

            span {
                font-size: 3vw !important;
            }
        }
    }
}

.hidden {
    display: none !important;
}
</style>
