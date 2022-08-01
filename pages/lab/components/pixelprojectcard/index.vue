<template>

    <div id="full-screen">
        <PixelProjectCard class="center-component" :project="this.project" />
    </div>
</template>

<script>
import PixelProjectCard from './PixelProjectCard.vue'

export default {
    components: {
        PixelProjectCard
    },
    data() {
        return {
            project: {
                bodyPlainText: '',
                createdAt: "2022-07-23T16:52:31.139Z",
                description: 'Mi web personal de desarrollador, en la que te encuentras ahora mismo. Es una PWA que contiene toda la información sobre mí y mis proyectos.',
                dir: "/projects",
                extension: ".md",
                github: "https://github.com/alexdiple/alexrueda.dev",
                id: 1,
                logo: "/favicon.png",
                path: '/projects/alexrueda-dev',
                readingTime: '1 min read',
                slug: 'alexrueda-dev',
                tech: ['vuejs', 'javascript', 'tailwind', 'html'],
                title: "alexrueda.dev",
                twitter: "alexruedadev",
                updatedAt: "2022-07-29T07:36:06.161Z",
                website: "https://alexrueda.dev",
            }
        }
    }
}

</script>

<style>
#full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.center-component {
    position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
    transform: translate(-50%, -50%);
}
</style>