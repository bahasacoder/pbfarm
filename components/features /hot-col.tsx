import Link from "next/link";
import Image from "next/image";

export function HotColumn() {
	return (
	

			<div className="flex flex-wrap md:justify-between gap-4">
				<div className="w-xl md:max-w-2xl h-[16rem] bg-yellow-500 border-2">
					<div className="w-full md:w-[50%] relative top-8 p-2 bg-rose-100 flex justify-start flex-col gap-2">
						<div className="">
							<h3 className="text-xl font-bold">Telur Ayam Kampung</h3>
						</div>
						<div className="">
							<p className="text-md font-bold">Rp2.0-Rp2.5</p>
						</div>
						<div className="">
							<p className="font-light">{"Telur Ayam Kampung dipercaya sebagai penambah stamina dan kaya nutrisi"}</p>
						</div>
						<div className="relative">
							<button className="font-light font-bold p-4 bg-green-200">Detail</button>
							<button className="font-light">Add</button>
						</div>	
					</div>
									
				</div>
				<div className="w-xl md:w-[50%] h-[16rem] bg-purple-400">
					<div className="w-full md:w-[50%] relative top-8 p-2 bg-rose-100 flex justify-start flex-col gap-2">
						<div className="">
							<h3 className="text-xl font-bold">Ayam Kampung Asli</h3>
						</div>
						<div className="">
							<p className="text-md font-bold">Rp60.0-Rp70.5</p>
						</div>
						<div className="">
							<p className="font-light">
								{"Ayam Kampung Pilihan Sehat dan bermutu tinggi"}
							</p>
						</div>
					<div className="">
						<button className="font-light">Detail</button>
						<button className="font-light">Add</button>
					</div>
					</div>
				</div>
			</div>
			
		
	)
}
