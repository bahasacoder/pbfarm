import Image from "next/image";
// import { CreateItem } from "@/app/actions";
export function NewsletterBox () {

    return (
		<div className="w-full lg:w-[90%] md:flex justify-around mx-auto mt-2 px-8 py-2 rounded-md bg-lime-500 text-white">
			<div className="nb-left w-full md:w-2/5 h-38 flex flex-col items-center justify-center">
				<div className="m-2 w-full"><h3 className="text-3xl font-medium">Masukkan Kontak Anda</h3></div>
				<div className="m-2 w-full"><p className="text-lg font-light">Daptkan Panawaran Harga / Paket Termurah Dari Kami</p></div>
			</div>
			<div className="nb-middle relative w-full min-h-38 h-auto md:w-1/5 flex justify-center items-center mx-auto">
					<Image 
						src="/Hen_Delivery_preview.png" 
						alt="Hen deliver envelope" 
						fill
						style={{ objectFit: 'contain', borderRadius: '10px', }}
						
					/>
			</div>
			<div className="nb-right w-full md:w-2/5 h-38 flex items-center justify-end">
				<div>
					<form action="#" className="flex gap-4">
						<span><input type="text" name="email" className="bg-white padding px-6 py-4 text-zinc-700 rounded-full" placeholder="Your contact address" /></span>
						<button type="submit" className="px-6 py-4 bg-black rounded-full uppercase">Sign Up</button>
					</form>
				</div>
			</div>
		</div>
		

    )
}