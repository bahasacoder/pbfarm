"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

import { TopBar } from '@/components/elements/top-bar';
import { MainHeader } from '@/components/elements/main-header';
import { HeaderMenu } from '@/components/elements/header-menu';

export function HeaderSection () {
 	

	return (
	<>
		<header className="relative w-full mx-auto container shadow-sm">
			{/* Top Bar */}
			<div className="border-b">
				<div className="container mx-auto px-4 py-2">
					<TopBar />
				</div>
			</div>
			{/* Main Header */}
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between gap-8">
					<MainHeader />
				</div>
 			</div>
		</header>
		
			{/* Navigation - Header */}
			<div className="sticky top-0 z-50 flex flex-col mx-auto w-full">
				<div className="relative w-full bg-beige hidden lg:flex mx-auto">
					<div className="flex top-0 mx-auto px-4">
						<HeaderMenu />
					</div>
				</div>
			</div>
	</>
	)
	
}
