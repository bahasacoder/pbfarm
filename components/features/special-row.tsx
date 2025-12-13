import Link from "next/link";
import Image from "next/image";
import Drawng1012 from "@/public/banners/drawing1012.png"

export function SpecialRow() {
	return (
	
		<div className="w-full flex flex-col mx-auto bg-green-400 my-4 py-4">
			<div className="relative m-0 w-full">
				<div className="absolute top-0 w-full h-[300px] bg-sky-100 m-auto">
					<Image src={Drawng1012} alt="Drawng912" fill /> 
				</div>
			</div>
			<div>
				<h2>Today's Special</h2>
				<h1>Gratis Potong dan Pembersihan</h1>
			</div>
			
		</div>
	)
}
