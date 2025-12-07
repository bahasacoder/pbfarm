import { Search, X, ChevronDown, Menu } from "lucide-react";
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

export function MobileMenu() {
    return (
	<>

		 <Dialog>
			<DialogTrigger asChild>
			  <Button variant="outline"><Menu /></Button>
			</DialogTrigger>
			<DialogContent className="fixed bg-night/60 max-w-[425px] overflow-scroll h-full mb-12">
		
				<DialogHeader>
					<DialogTitle></DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
					{/* <!-- Search Form --> */}
                                <div className="block bg-lime-100 m-2 p-4">
                                    <form action="https://d-themes.com/wordpress/wolmart/demo-29/" method="get" className="input-wrapper flex justify-center border-b-2 pb-2">
                                        <input type="hidden" name="post_type" value="product" />
                                        <input type="search" className="form-control" name="s" placeholder="Search" autoComplete="off" />

                                        <div className="live-search-list">
                                            <div id="autocomplete-suggestions" className="absolute hidden h-[300px] z-99;">
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-search" type="submit" aria-label="Search">
                                            <Search />
                                        </button>
                                    </form>
                                </div>
						{/* <!-- End Search Form --> */}
					
					<nav id="navigation-menu" className="lg-hiddenx flex flex-grow w-full justify-center">	
						<ul id="menu-list" className="flex flex-col lg:gap-3 justify-center w-full m-auto text-zinc-100">
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Meat</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="">Fruits</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content">
									<Link href="#" className="">Vegetables</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="w-full">Minuman</Link>
									<Popover>
									  <PopoverTrigger asChild>
										<Button variant="outline" className="absolute ml-4"><ChevronDown className="fill-night"/></Button>
									  </PopoverTrigger>
									  <PopoverContent className="relative flex flex-col min-w-[300px] left-[50%] m-2 p-2">
										<ul className="m-0 p-0 w-full">
											<li id="menu-item" className="w-full m-1 p-1 border-b-2">
												<div id="menu_content" className="m-auto">
													<Link href="#" className="">Jamu</Link>
												</div>
											</li>
											<li id="menu-item" className="w-full m-1 p-1 border-b-2">
												<div id="menu_content" className="m-auto">
													<Link href="#" className="">Racikan</Link>
												</div>
											</li>
										</ul>
									  </PopoverContent>
									</Popover>
								</div>
								
							</li>	
							
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="">Seafood</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="">Recipe</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="relative m-auto">
									<Link href="#" className="">Bakery & Snack</Link>
										<Popover>
										  <PopoverTrigger asChild>
											<Button variant="outline" className="absolute ml-4"><ChevronDown className="fill-night"/></Button>
										  </PopoverTrigger>
										  <PopoverContent className="relative flex flex-col min-w-[300px] left-[50%] m-2 p-2">
												<ul>
													<li id="menu-item" className="w-full m-1 p-1 border-b-2">
														<div id="menu_content" className="m-auto">
															<Link href="#" className="">Panggang</Link>
														</div>
													</li>
													<li id="menu-item" className="w-full m-1 p-1 border-b-2">
														<div id="menu_content" className="m-auto">
															<Link href="#" className="">Kukus</Link>
														</div>
													</li>
													<li id="menu-item" className="w-full m-1 p-1 border-b-2">
														<div id="menu_content" className="m-auto">
															<Link href="#" className="">Gorengan</Link>
														</div>
													</li>
												</ul>
											</PopoverContent>
										</Popover>									
								</div>
							</li>
									
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="">Promo</Link>
								</div>
							</li>
							<li id="menu-item" className="w-full p-3 border-b-2">
								<div id="menu_content" className="m-auto">
									<Link href="#" className="">About</Link>
								</div>
							</li>
						</ul>
					</nav>
					
			</DialogContent>
		</Dialog>

    </>
	)
}
