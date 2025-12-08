import { BreadCrumbContainer } from "@/components/page/breadcrumb-container";
import { MainShop } from "@/components/page/main-shop";
import { ShopSidebar } from "@/components/layout/shop-sidebar";
import { SpecialRow } from "@/components/features/special-row";


export default function Shop() {
  return (
  <>
	<div> 
		<SpecialRow />
		<BreadCrumbContainer />
 		<header>
			<h1 className="text-3xl font-bold underline bg-blue-300 my-8 text-center">
				Halaman Product card
			</h1>
		</header>
		<div className="flex justify-between">
			<ShopSidebar />
			<div className="w-full">
				<div className="main-shop">
					<MainShop />
				</div>
			</div>
		</div>
	</div>
   </>
  )
}	