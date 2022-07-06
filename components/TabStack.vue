<template>
    <div class="tab-stack">



<!--         <div class="tab-stack__tabs">
        <div class="tab-stack__tab" v-for="(tab, index) in tabs" :key="index" :class="{'tab-stack__tab--active': tab.active}" @click="setActiveTab(index)">
            <div class="tab-stack__tab-title">{{ tab.title }}</div>
        </div>
        </div>
        <div class="tab-stack__content">
        <div class="tab-stack__content-item" v-for="(tab, index) in tabs" :key="index" :class="{'tab-stack__content-item--active': tab.active}">
            <slot name="tab-content" :tab="tab"></slot>
        </div>
        </div> -->
    </div>
</template>

<script>

class Tab {

    title = '';
    active = false;
    content = '';

    constructor(title, active, content) {
        this.title = title;
        this.active = active;
        this.content = content;
    }

    setActiveTab(index) {
        this.active = index === index;
    }

    getActiveTab() {
        return this.active;
    }

    setTitle(title) {
        this.title = title;
    }

    setContent(content) {
        this.content = content;
    }

    getTitle() {
        return this.title;
    }

    getContent() {
        return this.content;
    }


}

export default {

}
</script>

<style>

</style>