import { BannerStaticLeft } from "@/components/features/banner-static-left"
import { BannerStaticRight } from "@/components/features/banner-static-right"
import { DealAvailable } from "@/components/features/deal-available"
import { HotColumn } from "@/components/features/hot-col"
import { SpecialRow } from "@/components/features/special-row"

export default function Home() {
  return (
	<>
	{/* Banner : banner static, banner slide col */}
		<div>Banner Kiri Static 50%</div>
		<div>Banner Kanan slide col</div>
		<div className="w-full mx-auto flex justify-between gap-2 mb-6">
			<BannerStaticLeft />
			<BannerStaticRight />
		</div>
	{/* Popular this Month, item product */}	
	<div>
		<DealAvailable />
	</div>	
	{/* New Arrivals */}	
	<div className="my-8">
		<div className="w-full flex flex-col">
			<div className="block">
				<h1 className="text-2xl font-medium">Deals Hot Of The Day</h1>
			</div>
			<HotColumn />
		</div>
	</div>
	{/* Diskon item product */}	
		<SpecialRow />
	{/* Random item product */}	
	
	{/* Categories */}
    </>
  )
}	
