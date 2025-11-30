"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Scale, ShoppingCart, Search, ChevronDown, Menu } from 'lucide-react';

import { NewsletterBox } from "@/components/elements/newsletter-box";
import { FooterPanel } from "@/components/elements/footer-panel"; 

export function FooterSection () { 
	return (
	<>
		<footer className="bg-lime-700 mx-auto py-4">
			<NewsletterBox />
			<FooterPanel />
		</footer>
	</>
	)
	
}
