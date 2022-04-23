<template>
    <div class="photos-titles">
            <router-link :to="{ name: 'SingleArtwork', params: { id: id }}">
                <img v-bind:src="image" v-bind:alt="title">
                <div class="overlay-author-title">
                    <p class="artwork-title" v-html="title"></p>
                    <p class="artwork-author">{{ author }}</p>
                </div>
            </router-link>
        </div>
</template>