import * as React from "react"
import Link from "next/link"
import Image from "next/image"
//import Rcmeat from "./banners/raw-chicken-meat.png"

export function BannerStaticRight () { 
// width 70%
	return (
		<div className="w-full md:w-[30%] md:h-[24rem] flex flex-col gap-2">
			<div className="relative bg-linear-to-t/oklch from-yellow-600 to-yellow-300 w-full h-[12rem]">
				<div className="relative w-full h-full">
					<div className="absolute flex justify-end right-0 w-full h-[228px] p-2">
						<Image 
							src={`/banners/raw-chicken-meat.png`} alt="" 
							layout="fill" 
							style={{ objectFit: 'contain', borderRadius: '10px', objectPosition: 'right'}}
						/>
					</div>
				</div>
				<div className="absolute top-[20%] left-[10%] flex flex-col gap-3">
					<div><h1 className="text-4xl font-bold">Jahe Bubuk</h1></div>
					<div><h3 className="text-xl">Asli jahe merah 100%</h3></div>
					<div className="px-4 py-2 text-white bg-teal-500 rounded-lg font-bold w-[8rem] text-center"><Link href="#"><button>Show Now</button></Link></div>
				</div>				
			</div>
			
			<div className="relative bg-linear-to-r/oklch from-rose-600 to-rose-300 w-full h-[12rem]">
				<div className="relative w-full h-full">
					<div className="absolute flex justify-end right-0 w-full h-[228px] p-2">
						<Image 
							src="/banners/raw-chicken-meat.png" alt="" 
							fill 
							style={{ objectFit: 'contain', borderRadius: '10px', objectPosition: 'right'}}
						/>
					</div>
				</div>
				<div className="absolute top-[20%] left-[10%] flex flex-col gap-3">
					<div><h1 className="text-xl font-bold">Telur Ayam Kampung</h1></div>
					<div><h3 className="text-xl">Segar dan Fertilize</h3></div>
					<div className="px-4 py-2 text-white bg-sky-700 rounded-lg font-bold w-[8rem] text-center"><Link href="#"><button>Show Now</button></Link></div>
				</div>				
			</div>
		</div>
	)
}
