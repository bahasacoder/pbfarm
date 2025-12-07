
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

export function FooterLists () { 
  
	return (
	<>
		<div className="list-wrapper w-full flex flex-wrap lg:justify-around text-white mx-auto px-4 mb-6">
			<div className="w-2xs lg:w-1/5 flex flex-col">
				<div className="w-full py-2  my-2"><h3 className="text-3xl font-medium">Service Center</h3></div>			
				<div className="w-full my-2">
					<ul className="flex flex-col gap-2">
						<li><Link href="#">Tracking Orders</Link></li>
						<li><Link href="#">Requirements</Link></li>
						<li><Link href="#">Jobs & Jobs</Link></li>
						<li><Link href="#">Contacts</Link></li>
					</ul>				
				</div>
			</div>
			<div className="w-2xs lg:w-1/5 flex flex-col">
				<div className="w-full py-2  my-2"><h3 className="text-3xl font-medium">Support</h3></div>			
				<div className="w-full my-2">
					<ul className="flex flex-col gap-2">
						<li><Link href="#">Faqs</Link></li>
						<li><Link href="#">Delivery</Link></li>
						<li><Link href="#">Payment</Link></li>
						<li><Link href="#">Purchase Returns</Link></li>
					</ul>				
				</div>
			</div>
			<div className="w-2xs lg:w-1/5 flex flex-col">
				<div className="w-full py-2  my-2"><h3 className="text-3xl font-medium">Shop</h3></div>			
				<div className="w-full my-2">
					<ul className="flex flex-col gap-2">
						<li><Link href="#">My Account</Link></li>
						<li><Link href="#">Cart</Link></li>
						<li><Link href="#">Wishlist</Link></li>
						<li><Link href="#">Checkout</Link></li>
					</ul>				
				</div>
			</div>
			<div className="w-2xs lg:w-1/5 flex flex-col">
				<div className="w-full py-2  my-2"><h3 className="text-3xl font-medium">Quick Links</h3></div>			
				<div className="w-full my-2">
					<ul className="flex flex-col gap-2">
						<li><Link href="#">About Us</Link></li>
						<li><Link href="#">Contact Us</Link></li>
						<li><Link href="#">Order Status</Link></li>
						<li><Link href="#">Shipping & Returns</Link></li>
					</ul>				
				</div>
			</div>
			<div className="w-2xs lg:w-1/5 flex flex-col">
				<div className="w-full py-2  my-2"><h3 className="text-3xl font-medium">Our Mission</h3></div>			
				<div className="w-full my-2">
					<ul className="flex flex-col gap-2">
						<li><Link href="#">Payment Methods</Link></li>
						<li><Link href="#">Money-back guarantee!</Link></li>
						<li><Link href="#">Product Returns</Link></li>
						<li><Link href="#">Support Center</Link></li>
					</ul>				
				</div>
			</div>
		</div>
	</>
	)
	
}
