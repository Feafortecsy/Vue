<template>
	<div class="ratings">
		<div class="ratings-content">
			<div class="allview">
				<div class="allview-left">
					<h1 class="left-score">{{sellers.score}}</h1>
					<div class="left-title">综合评分</div>
					<div class="left-rank">高于周边商家{{sellers.rankRate}}%</div>
				</div>
				<div class="allview-right">
					<div class="score-wrapper">
						<span class="right-title ">服务态度</span>
						<star class="star" :size="36" :score="sellers.serviceScore"></star>
						<span class="right-score">{{sellers.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="right-title ">商品评分</span>
						<star class="star" :size="36" :score="sellers.foodScore"></star>
						<span class="right-score">{{sellers.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="delivery-title">送达时间</span>
						<span class="delivery-time">{{sellers.deliveryTime}}分钟</span>
					</div>
				</div>
				
			</div>
			<split></split>
				<ratingselect class="rating-select" :only-content="onlyContent" :select-type="selectType" :desc="desc"></ratingselect>
		</div>
	</div>	
</template>

<script>
	import star from '../star/star.vue';
	import split from '../split/split.vue';
	import ratingselect from '../ratingselect/ratingselect.vue';

	const All = 0;
    const Positive = 1;
    const Negative = 2; 

	export default {
		props: {
			sellers: {
				type: Object
			},
			ratings: {
				type: Object
			},
		},
		components: {
			star,
			split,
			ratingselect,
		},
		data () {
			return {
				selectType: All,
                onlyContent: false,
				desc: {
                    all: '全部',
                    positive: '满意',
                    negative: '吐槽'
                },
			}
		}
	};
</script>

<style type="text/css">
	* {
		padding: 0;
		margin: 0;
	}
	.ratings {
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	.allview {
		display: flex;
		padding: 18px 0;
	}
	.allview-left {
		flex: 0 0 137px;
		width: 137px;
		border-right: 1px solid rgba(7, 17, 27,0.1);
		text-align: center;
		padding: 6px 0;
	}
	@media only screen and (max-width: 320px) {
		flex: 0 0 120px;
		width: 120px;
	}
	.left-score {
		margin-bottom: 16px;
		margin-top: 16px;
		line-height: 12px;
		font-size: 24px;
		color: rgb(255, 153, 0);
		vertical-align: top;
	}
	.left-rank {	
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	.left-title {
		margin-bottom: 8px;
		line-height: 12px;
		font-size: 12px;
		color: rgb(7, 17, 27);
	}
	.allview-right {
		flex: 1;
		padding-left: 24px;
		padding-top: 12px;
	}
	.score-wrapper {
		top: 10px;
		font-size: 0;
		margin-bottom: 4px;
	}
	.right-title {
		font-size: 12px;
		padding-right: 8px;
	}
	.star {
		display: inline-block;
	}
	.right-score {
		font-size: 12px;
		color: rgb(255, 153, 0);
		padding-left: 8px;
	}
	.delivery-wrapper {
		margin-top: 0;
	}
	.delivery-title {
		font-size: 12px;
		color: rgb(147, 153, 159);
	}
	.delivery-time {
		font-size: 12px;
	}
</style>