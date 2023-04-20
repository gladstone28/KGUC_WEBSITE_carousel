.carousel {
			display: flex;
			overflow: hidden;
			width: 100%;
			margin: 0;
			padding: 0;
			list-style: none;
			animation: carousel 5s infinite;
		}
css
Copy code
	.carousel__item {
		flex: 1 0 100%;
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ccc;
	}

	.carousel__item img {
		max-width: 100%;
		max-height: 100%;
	}

	@keyframes carousel {
		0% {
			transform: translateX(0);
		}
		20% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-100%);
		}
		45% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(-200%);
		}
		70% {
			transform: translateX(-200%);
		}
		75% {
			transform: translateX(-300%);
		}
		95% {
			transform: translateX(-300%);
		}
		100% {
			transform: translateX(-400%);
		}
	}
