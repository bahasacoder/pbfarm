'use client';

import React, { useState} from "react"
import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react";


export function ShopSidebar() {
	
	const [isCategories, setIsCategories] = useState(true);
	const [isPrice, setIsPrice] = useState(false);
	const [isSupplier, setIsSupplier] = useState(false);
	const toggleFilter = (filterName) => {
		switch (filterName) {
			case "isCategories":
				setIsCategories(!isCategories);
				break;
			case "isPrice":
				setIsPrice(!isPrice);
				break;
			case "isSupplier":
				setIsSupplier(!isSupplier);
				break;
			default:
				return;
		}
		// setIsCategories(!isCategories);
	}	// () => setIsCategories(!isHidden)
	
  return (
  // w-310
    <aside className="w-[20rem]">
		<header className="text-2xl font-bold mb-4">Filter</header>
		<div className="">
			<div className="flex justify-between items-center">
				<h3 className="font-medium pb-2 mb-4 border-b-3 border-zinc-800">All Category</h3>
				<button className="toggle p-2" onClick={() => toggleFilter("isCategories")}>
					{ isCategories ? <ChevronUp /> : <ChevronDown />}
				</button>
			</div>
			{isCategories && 
				<ul className="flex flex-col gap-2 ml-4">
					<li>Ayam Utuh</li>
					<li>Ayam Segar</li>
					<li>Ayam Frozen</li>
					<li>Ayam Olahan</li>
					<li>Telur</li>
				</ul>
			}			
		</div>
		<div className="">
			<div className="flex justify-between items-center">
				<h3 className="font-medium mb-4 pb-2 border-b-3 border-zinc-800">Harga</h3>
				<button className="toggle p-2" onClick={() => toggleFilter("isPrice")}>
					{ isPrice ? <ChevronUp /> : <ChevronDown />}
				</button>
			</div>
			{isPrice && 
				<ul className="flex flex-col gap-2">
					<li>{'< R30.00'}</li>
					<li>{'R30.00 - R50.00'}</li>
					<li>{'R50.00 - R80.00'}</li>
					<li>{'R80.00 - R100.00'}</li>
					<li>{'> R100.00'}</li>
				</ul>
			}			
		</div>
		
		<div className="">
			<div className="flex justify-between items-center">
				<h3 className="font-medium mb-4 pb-2 border-b-3 border-zinc-800">Supplier</h3>
				<button className="toggle p-2" onClick={() => toggleFilter("isSupplier")}>
					{ isSupplier ? <ChevronUp /> : <ChevronDown />}
				</button>
			</div>
			{isSupplier && 
				<ul className="">
					<li>Pattiro</li>
					<li>Parippung</li>
					<li>Mare</li>
					<li>Awangpone</li>
					<li>Bajoe</li>
				</ul>
			}			
		</div>
		<div className="">Range Harga</div>
		
	</aside>
  );
}