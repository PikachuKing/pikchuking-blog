<template>
    <nav class="pagination" v-if="currentPage">
        <router-link class="prev" :to="{ name: routeName, params: { page: showPrev }}" v-if="showPrev">
            <i class="fa fa-angle-left"></i>
        </router-link>

        <router-link class="page-number" :to="{ name: routeName, params: { page: showFirstNumber }}" v-if="showFirstNumber">
            {{ showFirstNumber }}
        </router-link>

        <span class="space" v-if="showPrevSpace">...</span>

        <router-link class="page-number" :to="{ name: routeName, params: { page: showPrevNumber }}"
                     v-if="showPrevNumber">
            {{ showPrevNumber }}
        </router-link>

        <span class="page-number current">{{ currentPage }}</span>

        <router-link class="page-number" :to="{ name: routeName, params: { page: showNextNumber }}"
                     v-if="showNextNumber">
            {{ showNextNumber }}
        </router-link>

        <span class="space" v-if="showNextSpace">...</span>

        <router-link class="page-number" :to="{ name: routeName, params: { page: showLastNumber }}"
                     v-if="showLastNumber">
            {{ showLastNumber }}
        </router-link>

        <router-link class="next" :to="{ name: routeName, params: { page: showNext }}" v-if="showNext">
            <i class="fa fa-angle-right"></i>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            'routeName': String,
            'currentPage': Number,
            'lastPage': Number,
        },
        computed: {
            showPrev() {
                return this.currentPage != 1 ? this.currentPage - 1 : null;
            },
            showPrevSpace() {
                return this.currentPage === 1 || this.currentPage === 2 || this.currentPage === 3 ? false : true;
            },
            showFirstNumber() {
                return this.currentPage === 1 ? null : 1;
            },
            showPrevNumber() {
                return this.currentPage === 1 || this.currentPage === 2 ? null : this.currentPage - 1;
            },
            showNext() {
                return this.currentPage != this.lastPage ? this.currentPage + 1 : null;
            },
            showNextNumber() {
                return this.currentPage === this.lastPage || this.currentPage === (this.lastPage - 1) ? null : this.currentPage + 1;
            },
            showNextSpace() {
                return this.currentPage === this.lastPage || (this.currentPage + 1) === this.lastPage || (this.currentPage + 2) === this.lastPage ? false : true;
            },
            showLastNumber() {
                return this.currentPage === this.lastPage || this.lastPage === 0 ? null : this.lastPage;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        margin: 120px 0 0;
        text-align: left;
        border-top: 1px solid #eee;
        a {
            color: #555;
            text-decoration: none;
            outline: none;
            border-bottom: 1px solid #999;
            word-wrap: break-word;
        }
        .space {
            padding: 0;
            margin: 0;
        }
        .prev {
            margin-left: 0;
        }

        .next {
            margin-right: 0;
        }
        .current {
            color: #fff;
            background: #ccc;
            border-top-color: #ccc;
        }
        .prev, .next, .page-number, .space {
            display: inline-block;
            position: relative;
            top: -1px;
            margin: 0 10px;
            padding: 0 11px;
        }
        .prev, .next, .page-number {
            border-bottom: 0;
            border-top: 1px solid #eee;
            transition-property: border-color;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
        }
        .prev:hover, .next:hover, .page-number:hover {
            border-top-color: #222;
        }
        @media (max-width: 767px) {
            .prev, .next, .page-number, .space {
                margin: 0 5px;
            }
        }
    }

    @media (max-width: 767px) {
        .pagination {
            border-top: none;
            text-align: center;
            .prev, .next, .page-number {
                margin-bottom: 10px;
                border-top: 0;
                border-bottom: 1px solid #eee;
                padding: 0 10px;
            }
            .prev:hover, .next:hover, .page-number:hover {
                border-bottom-color: #222;
            }
        }
    }
</style>
