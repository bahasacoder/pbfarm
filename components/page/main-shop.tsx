import Link from 'next/link';
import Image from 'next/image';
import { ItemProductGrid } from "@/components/page/item-product-grid";

export function MainShop () {
	//  w-936.67
    return (
		<div className="w-full max-w-[56rem] flex flex-col">
			<header className="hidden"></header>
			<div className="sticky-sort w-full h-16 bg-zinc-400 flex">
				<div>Sticky Left</div>
				<div>Sticky Right</div>
			</div>
			<div className="product-archive">
				<div className="grid grid-auto-cols lg:grid-cols-4"> 
					{/* Item Product 1 */}	
						<ItemProductGrid />
					{/** End Item Product 1 */}							
				</div>
			</div>
			<div className="pagination w-full h-16 bg-zinc-400 flex">
				<div>Showing 1-12 of 61 Products</div>
				<div>Prev 1234 Next</div>
			</div>
		</div>
    )
}