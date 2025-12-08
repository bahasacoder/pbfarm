import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, StarHalf, Plus } from "lucide-react"


export function DealAvailable () { 
// width 70%
	return (
		<div className="w-full flex flex-col md:flex-row gap-1">
			<div className="relative w-full flex md:w-[25%] h-[32rem] rounded-md my-2 bg-linear-to-b from-zinc-900 to-zinc-300">
				<div className="absolute top-[10%] w-full text-center flex flex-col mx-auto">
					<h3 className="text-amber-400 text-xl uppercase">Hot This Month</h3>
					<div>
						<h2 className="text-white text-2xl font-medium">Save For Extra</h2>
						<h2 className="text-lime-400 text-2xl font-bold">Rp10 Per Order</h2>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col md:w-[75%]">
				<div className="w-full p-2"><h2 className="text-zinc-800 text-2xl font-medium">Deal of The Month</h2></div>
				<div className="flex flex-wrap lg:flex-nowrap">
					{/* Item Product 1 */}										
					<div className="overflow-hidden relative w-[14rem] m-2 p-2 bg-zinc-50 rounded-md">						
						<div className="relative w-[211px] h-[385px] flex flex-col justify-center shadow-md rounded-xl duration-500">
							<div className="block z-18 absolute top-0 w-[40%] bg-amber-400 text-white p-1 m-1 rounded-lg">14% Off</div>
							<Link href="#" className="z-8 absolute top-6 flex justify-end w-full h-[228px]">
								<Image  
									src="/Native_Chicken_Rustic_Studio_Shot.png" alt="" 
									width={100} height={100}
									style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
								/>
							</Link>
							<div className="absolute -bottom-16 z-18 w-full mx-auto flex flex-col bg-lime-200/30 p-4 duration-400 translate-y-1 hover:-translate-y-12 hover:scale-103 hover:shadow-xl">
 								<div className="flex justify-between">
									<h3 className="text-xl font-medium">Ayam Kampung Frozen Segar</h3>
									<div className="px-1 text-white rounded-md bg-lime-400 hover:bg-lime-600 text-center flex items-center justify-center">
										<Link href="#"><button className="px-2 py-1">Add</button></Link>
									</div>
								</div>
								<div><p className="text-md font-light text-zinc-600">Category : Buah</p></div>
								<div className="flex justify-between">
									<p className="flex space-x-2 items-end"><span className="text-lg text-red-600">$2.15</span> <span className="text-md text-zinc-600 line-through">$2.65</span></p>
									<div className="flex items-center text-xs fill-yellow">
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<StarHalf fill="yellow" color="red"size={18} strokeWidth={1} />
									</div>
								</div>
								<div className="w-[97%] h-1 mx-auto bg-lime-600"> </div>
								<div className="text-zinc-600 flex justify-between mb-3 font-light">
									<p className="">Available: <span>173</span></p>
									<p className="">Sold: <span>4</span></p>
								</div>								
								<div className=" bg-lime-400 py-2 px-4 py-2 text-center rounded-lg">
									<Link href="#" className="text-white font-bold">View Product</Link>
									<div className="w-[97%] h-1 mx-auto bg-lime-400 w-2 hover:bg-lime-600 hover:w-12 duration-400"> </div>
								</div>								
							</div>
						</div>
					</div>
					{/** End Item Product 1 */}		
					{/* Item Product 2 */}												
					<div className="overflow-hidden relative w-[14rem] m-2 p-2 bg-zinc-50 rounded-md">						
						<div className="relative w-[211px] h-[385px] flex flex-col justify-center shadow-md rounded-xl duration-500">
							<div className="block z-18 absolute top-0 w-[40%] bg-amber-400 text-white p-1 m-1 rounded-lg">14% Off</div>
							<Link href="#" className="z-8 absolute top-6 flex justify-end w-full h-[228px]">
								<Image  
									src="/Farm_Fresh_Egg_Collection.png" alt="" 
									width={100} height={100}
									style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
								/>
							</Link>
							<div className="absolute -bottom-16 z-18 w-full mx-auto flex flex-col bg-lime-200/30 p-4 duration-400 translate-y-1 hover:-translate-y-12 hover:scale-103 hover:shadow-xl">
 								<div className="flex justify-between">
									<h3 className="text-xl font-medium">Telur Ayam Kampung Fertil</h3>
									<div className="px-1 text-white rounded-md bg-lime-400 hover:bg-lime-600 text-center flex items-center justify-center">
										<Link href="#"><button className="px-2 py-1">Add</button></Link>
									</div>
								</div>
								<div><p className="text-md font-light text-zinc-600">Category : Buah</p></div>
								<div className="flex justify-between">
									<p className="flex space-x-2 items-end"><span className="text-lg text-red-600">$2.15</span> <span className="text-md text-zinc-600 line-through">$2.65</span></p>
									<div className="flex items-center text-xs fill-yellow">
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<StarHalf fill="yellow" color="red"size={18} strokeWidth={1} />
									</div>
								</div>
								<div className="w-[97%] h-1 mx-auto bg-lime-600"> </div>
								<div className="text-zinc-600 flex justify-between mb-3 font-light">
									<p className="">Available: <span>173</span></p>
									<p className="">Sold: <span>4</span></p>
								</div>								
								<div className=" bg-lime-400 py-2 px-4 py-2 text-center rounded-lg">
									<Link href="#" className="text-white font-bold">View Product</Link>
									<div className="w-[97%] h-1 mx-auto bg-lime-400 w-2 hover:bg-lime-600 hover:w-12 duration-400"> </div>
								</div>								
							</div>
						</div>
					</div>
					{/** End Item Product 2 */}	
					{/* Item Product 3 */}
					<div className="overflow-hidden relative w-[14rem] m-2 p-2 bg-zinc-50 rounded-md">						
						<div className="relative w-[211px] h-[385px] flex flex-col justify-center shadow-md rounded-xl duration-500">
							<div className="block z-18 absolute top-0 w-[40%] bg-amber-400 text-white p-1 m-1 rounded-lg">14% Off</div>
							<Link href="#" className="z-8 absolute top-6 flex justify-end w-full h-[228px]">
								<Image  
									src="/Fluffy_Chicks_Golden_Straw.png" alt="" 
									width={100} height={100}
									style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
								/>
							</Link>
							<div className="absolute -bottom-16 z-18 w-full mx-auto flex flex-col bg-lime-200/30 p-4 duration-400 translate-y-1 hover:-translate-y-12 hover:scale-103 hover:shadow-xl">
 								<div className="flex justify-between">
									<h3 className="text-xl font-medium">Anak Ayam Kampung Asli</h3>
									<div className="px-1 text-white rounded-md bg-lime-400 hover:bg-lime-600 text-center flex items-center justify-center">
										<Link href="#"><button className="px-2 py-1">Add</button></Link>
									</div>
								</div>
								<div><p className="text-md font-light text-zinc-600">Category : Buah</p></div>
								<div className="flex justify-between">
									<p className="flex space-x-2 items-end"><span className="text-lg text-red-600">$2.15</span> <span className="text-md text-zinc-600 line-through">$2.65</span></p>
									<div className="flex items-center text-xs fill-yellow">
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<StarHalf fill="yellow" color="red"size={18} strokeWidth={1} />
									</div>
								</div>
								<div className="w-[97%] h-1 mx-auto bg-lime-600"> </div>
								<div className="text-zinc-600 flex justify-between mb-3 font-light">
									<p className="">Available: <span>173</span></p>
									<p className="">Sold: <span>4</span></p>
								</div>								
								<div className=" bg-lime-400 py-2 px-4 py-2 text-center rounded-lg">
									<Link href="#" className="text-white font-bold">View Product</Link>
									<div className="w-[97%] h-1 mx-auto bg-lime-400 w-2 hover:bg-lime-600 hover:w-12 duration-400"> </div>
								</div>								
							</div>
						</div>
					</div>
					{/** End Item Product 3 */}	 
					{/* Item Product 4 */}
					<div className="overflow-hidden relative w-[14rem] m-2 p-2 bg-zinc-50 rounded-md">						
						<div className="relative w-[211px] h-[385px] flex flex-col justify-center shadow-md rounded-xl duration-500">
							<div className="block z-18 absolute top-0 w-[40%] bg-amber-400 text-white p-1 m-1 rounded-lg">14% Off</div>
							<Link href="#" className="z-8 absolute top-6 flex justify-end w-full h-[228px]">
								<Image  
									src="/Majestic_Rooster_Sunrise_Portrait.png" alt="" 
									width={100} height={100}
									style={{ objectFit: 'fill', borderRadius: '10px', objectPosition: 'top', width:'200px', height: '228px'}}
								/>
							</Link>
							<div className="absolute -bottom-16 z-18 w-full mx-auto flex flex-col bg-lime-200/30 p-4 duration-400 translate-y-1 hover:-translate-y-12 hover:scale-103 hover:shadow-xl">
 								<div className="flex justify-between">
									<h3 className="text-xl font-medium">Indukan Ayam Kampung Asli</h3>
									<div className="px-1 text-white rounded-md bg-lime-400 hover:bg-lime-600 text-center flex items-center justify-center">
										<Link href="#"><button className="px-2 py-1">Add</button></Link>
									</div>
								</div>
								<div><p className="text-md font-light text-zinc-600">Category : Buah</p></div>
								<div className="flex justify-between">
									<p className="flex space-x-2 items-end"><span className="text-lg text-red-600">$2.15</span> <span className="text-md text-zinc-600 line-through">$2.65</span></p>
									<div className="flex items-center text-xs fill-yellow">
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<Star fill="yellow" color="red"size={18} strokeWidth={1} />
										<StarHalf fill="yellow" color="red"size={18} strokeWidth={1} />
									</div>
								</div>
								<div className="w-[97%] h-1 mx-auto bg-lime-600"> </div>
								<div className="text-zinc-600 flex justify-between mb-3 font-light">
									<p className="">Available: <span>173</span></p>
									<p className="">Sold: <span>4</span></p>
								</div>								
								<div className=" bg-lime-400 py-2 px-4 py-2 text-center rounded-lg">
									<Link href="#" className="text-white font-bold">View Product</Link>
									<div className="w-[97%] h-1 mx-auto bg-lime-400 w-2 hover:bg-lime-600 hover:w-12 duration-400"> </div>
								</div>								
							</div>
						</div>
					</div>
					{/** End Item Product 4 */}	 
				</div>
			</div>
		</div>
	)
}