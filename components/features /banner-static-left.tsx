import * as React from "react"
import Link from "next/link"
import Image from "next/image"
// /banners/raw-chicken-meat.png"

export function BannerStaticLeft () { 
// width 70%
	return (
		<div className="w-full md:h-[24rem] md:w-[70%]">
			<div className="relative w-full h-[24rem] bg-linear-to-r/oklch from-blue-600 to-blue-300 ">
				<div className="relative w-full h-full mr-0">
					<div className="absolute flex items-center justify-end right-0 w-full h-[19rem] p-2">
						<Image 
							src="https://media.istockphoto.com/id/1162332668/id/foto/petani-memegang-kotak-kayu-tangan-dengan-sayuran-menghasilkan-di-kebun-makanan-segar-dan.jpg?s=612x612&w=0&k=20&c=JzT8XGXu-_Rts0tA3fAt_n5-SK02QLSA72YuQZb6mnM=" alt="" 
							fill 
							style={{ objectFit: 'contain', borderRadius: '10px', objectPosition: 'right'}}
						/>
					</div>
				</div>
				<div className="absolute top-[20%] left-[10%] flex flex-col gap-3">
					<div><h1 className="text-4xl font-bold">Ayam Kampung Asli</h1></div>
					<div><h3 className="text-xl">Segar, Alami, Tanpa Antibiotik</h3></div>
					<div className="px-4 py-2 text-white bg-pink-600 rounded-lg font-bold w-[8rem] text-center"><Link href="#"><button>Show Now</button></Link></div>
				</div>				
			</div>
		</div>
	)
}
