<template>
    <div id="movie">
        <span class="movie-title" v-html="this.Movie.title"></span>
        <div class="movie-content">
            <div class="content-desc">
                <div class="desc-score">
                    <span class="score" v-html="this.Movie.rating.average"></span>
                    <span class="comment" v-html="this.Movie.ratings_count + '人评价'"></span>
                </div>
                <div class="desc-text">
                    <span v-html="this.Movie.year + '年 / ' +
                                  this.Movie.countries[0] + ' / ' +
                                  this.Movie.directors[0].name + '(导演)' + ' / ' + 
                                  this.Movie.genres[0] + ' / ' + 
                                  this.Movie.genres[1] + ' / ' +
                                  this.Movie.casts[0].name + ' / ' + 
                                  this.Movie.casts[1].name + ' / ' + 
                                  this.Movie.casts[2].name" class="text">
                    </span>
                </div>
            </div>
            <div class="content-img">
                <img :src="this.Movie.images.small" alt="" width="105" height="160">
            </div>
        </div>
        <div class="movie-operator">
            <div class="operator-above">
                <span class="operator-want">
                    <span class="want-text">
                        想看
                    </span>
                </span>
                <span class="operator-watched">
                    <span class="watched-text">
                        看过
                    </span>
                </span>
            </div>
            <span class="operator-open-inapp">
                <span class="open-inapp-text">
                    在APP上留下你的观影足迹
                </span>
            </span>
        </div>
        <div class="movie-desc">
            <span v-html="this.Movie.title + '的剧情简介'" class="title"></span>
            <span v-html="this.Movie.summary" class="desc">展开</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters ([
                'Movie'
            ])
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/sass/style';
    @import '../../assets/sass/mixins';
    #movie  {
        @include MovieAndBookItemPosition;
        .movie-title {
            @include MovieAndBookItemTitle;
        }
        .movie-content {
            @include MovieAndBookItemContent;
        }
        .movie-operator {
            @include MovieAndBookItemOperator;
        }
        .movie-desc {
            @include MovieAndBookItemDesc;
        }
    }
</style>
