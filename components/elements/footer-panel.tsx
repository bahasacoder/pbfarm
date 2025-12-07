"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Instagram, Mail, Youtube, MapPin, MessageCircle } from 'lucide-react';

export function FooterPanel () { 
  
	return (
	<div  className="w-full m-0 px-8 py-4 mx-auto my-4">
		<div className="w-full flex flex-wrap lg:justify-between text-white mt-4 mb-12">
			<div className="w-full md:w-2/4 lg:w-1/4">
				<div className="mx-0 mt-2 mb-4 text-left">
					<Link href="#"><h1 className="text-5xl font-bold"><span className="text-7xl">B</span>olmart</h1></Link>
				</div>
				<div>
					<p>Komitmen kami untuk menghadirkan makanan halal, sehat, dan bergizi</p>
				</div>
			</div>
			<div className="w-full md:w-2/4 lg:w-1/4">
				<div className="mx-0 mt-2 mb-4 text-left">
					<h3 className="text-xl font-bold">Service Center</h3>
				</div>
				<div>
					<p>Desa Pattiro Bajo</p>
					<p>Kecamatan Sibulue</p>
					<p>Kabupaten Bone, Sulawesi Selatan</p>
				</div>
			</div>
			<div className="w-full md:w-2/4 lg:w-1/4 ">
				<div className="mx-0 mt-2 mb-4 text-left">
					<h3 className="text-xl font-bold">Shipping Center</h3>
				</div>
				<div>
					<p>Tel. 0812-6805-2229</p>
					
				</div>
				<div>
					<div className="w-full mt-2 mr-4">
					</div>					
				</div>
			</div>
			<div className="w-full md:w-2/4 lg:w-1/4">
				<div className="mx-0 mt-2 mb-4 text-left">
					<h3 className="text-xl font-bold">Available</h3>
				</div>
				<div>
					<p className="flex gap-2 items-center"><Instagram /> Instagram</p>
					<p className="flex gap-2 items-center"><Youtube /> Youtube</p>
					<p className="flex gap-2 items-center"><MessageCircle /> Whatsapp</p>
				</div>
			</div>
		</div> 
		<div className="border-t-2 border-white my-2 mx-0 py-4 text-white font-medium flex flex-wrap lg:justify-between">
			<div><span>Copyright © 2026 PasarBone.com. All Right Reserved.</span></div>
			<div className="flex">
				<div>We using safe payment</div>
				<div>Logo</div>
			</div>
		</div>
	</div>
	)
	
}