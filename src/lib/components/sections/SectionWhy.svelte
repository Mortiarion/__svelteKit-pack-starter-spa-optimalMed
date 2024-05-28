<script lang="ts">
	let badgePng = '/img/main-page-img/badge.png';
	let badgeAvif = '/img/main-page-img/badge.avif';
	let badgeWebp = '/img/main-page-img/badge.webp';

	let whyItems = [
		{
			value: 'Лікарі починають роботу на 63% швидше',
			description: 'ніж колеги, які не користуються нашими послугами'
		},
		{
			value: 'Поєднуємо роль агентства',
			description: 'з працевлаштування та медичного закладу, який працевлаштовує лікарів у Польщі.'
		},
		{
			value: 'Офіс у Варшаві',
			description: "щодня подаємо документи до Міністерства Здоров'я Польщі."
		},
		{
			value: 'Член асоціації польських медичних установ',
			description: 'це дає нам можливість співпрацювати з найкращими лікарнями в Польщі'
		},
		{
			value: 'Інвестуємо в наших лікарів',
			description:
				'оплачуючи їхні курси польської мови, присяжні переклади та курси підвищення кваліфікації'
		},
		{ value: 'Знаходимо можливості', description: 'для наших лікарів заробляти більше' },
		{
			value: 'Допомагаємо підтвердити диплом і спеціалізацію',
			description: 'протягом 5 років роботи в Польщі'
		}
	];
</script>

<section id="why" class="why">
	<div class="container">
		<div class="why__content">
			<h2 class="title">
				Чому саме <span>Optimal Med</span>
			</h2>
			<div class="why__wrapper">
				{#each whyItems as item}
					<div class="why__wrapper-inner">
						<div class="line"></div>
						<h3 class="title">{item.value}</h3>
						<p class="text">{item.description}</p>
					</div>
				{/each}
				<div class="badge grid-8">
					<picture>
						<source srcset={badgeAvif} type="image/avif" />
						<source srcset={badgeWebp} type="image/webp" />
						<img src={badgePng} alt="badge-png" />
					</picture>
					<div class="badge__box">
						<h3 class="title">Розпочни медичну кар'єру в Польщі!</h3>
						<a href="./index.html#form">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="53"
								height="28"
								viewBox="0 0 53 28"
								fill="none"
							>
								<rect
									x="0.5"
									y="1.34204"
									width="51.8947"
									height="25.4474"
									rx="12.7237"
									stroke="#0FA4AE"
								/>
								<path
									d="M36.2549 14.0658L30.8315 19.3553L29.7171 18.2765L33.2364 14.8281H16.75V13.3036H33.2364L29.7171 9.85521L30.8315 8.77637L36.2549 14.0658Z"
									fill="#0FA4AE"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.why {
		& .container {
			padding: 0 20px;
		}
		& .why__content {
			& .title {
				margin: 0 0 30px 0;
				text-align: center;
				font-size: 30px;
				font-weight: 600;
				line-height: 30px;
			}
			& span {
				color: var(--color-main);
			}
			& .why__wrapper {
				& .why__wrapper-inner {
					margin: 0 0 24px 0;
					& .text {
						color: var(--555);
						font-family: var(--raleway);
						font-size: 14px;
						font-weight: 500;
						text-align: left;
					}
					& .title {
						font-size: 16px;
						font-weight: 600;
						letter-spacing: -0.32px;
						margin: 0 0 10px 0;
						text-align: left;
						line-height: normal;
					}
					& .line {
						width: 80px;
						height: 1px;
						margin: 0 0 10px 0;
						background-color: var(--line);
					}
				}
				& .badge {
					padding: 0 15px 20px 20px;
					border-radius: 20px;
					box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 10px;
					background-color: var(--white-color);
					& .badge__box {
						display: flex;
						gap: 8px;
						align-items: center;
						& .title {
							text-align: left;
							font-size: 22px;
							font-weight: 600;
							line-height: normal;
							letter-spacing: -0.44px;
							margin: 0;
						}
					}
					& img {
						width: 225px;
						height: 278px;
					}
				}
			}
		}
	}
</style>
