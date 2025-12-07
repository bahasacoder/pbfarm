import { Search, X, ChevronDown} from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover" 

export function HeaderMenu() {
    return (
	<>
		<div className="w-full flex justify-between items-center ">
			<div className="flex justify-between">
				<nav className="main-menu flex items-center justify-between">
					<ul className="horizontal-menu flex items-center gap-6 py-4">
						<li className="menu-item"><Link href="#">About Us</Link></li>
						<li className="menu-item"><Link href="#">Product</Link>
						
							<Popover>
							  <PopoverTrigger asChild>
								<Button variant="ghost"><ChevronDown /></Button>
							  </PopoverTrigger>
							  <PopoverContent className="w-80">
								<div className="grid gap-4">
								  <div className="grid gap-2">
									<div className="grid grid-cols-3 items-center gap-4">
									  <div className="">Foto</div>
									  <div className="col-span-2">Ayam Kampung Asli</div>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
									  <div className="">Foto</div>
									  <div className="col-span-2">Telur Ayam Kampung</div>
									</div> 
								  </div>
								</div> 
								</PopoverContent>
							</Popover>				
						
						</li>
						
						<li className="menu-item"><Link href="#">Activity</Link></li>
						<li className="menu-item"><Link href="#">Contact</Link></li>
						<li className="menu-item"><Link href="#">Recipes</Link>
						
							<Popover>
							  <PopoverTrigger asChild>
								<Button variant="ghost"><ChevronDown /></Button>
							  </PopoverTrigger>
							  <PopoverContent className="w-80">
								<div className="flex gap-4">
								  <div className="space-y-2">
									<div className="iamge">Foto</div>
									<h4 className="leading-none font-medium">Ayam Goreng</h4>
									<p className="text-muted-foreground text-sm">
									  Ayam  Goreng 1 Piring
									</p>
								  </div>
								</div> 
								</PopoverContent>
							</Popover>					
						
						</li>
						<li className="menu-item"><Link href="#">FAQs</Link></li>
					</ul>
				</nav>	
			</div>
			<div className="flex flex-row">
				<div className="flex items-center gap-4">
							<a href="#" className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition font-medium">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" 
								/>
								</svg>
								Promotions
							</a>
							<a href="#" className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition font-medium">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
									d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" 
								/>
								</svg>
								Weekly Discounts
							</a>
				</div>			
			</div>
		</div>		
    </>
)
}
