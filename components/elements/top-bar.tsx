export function TopBar () {
    return (
    <div className="flex justify-between items-center text-sm">
						<div className="flex justify-between text-sm text-nowrap h-6 overflow-hidden w-[320px] border-l-2">
							<p className="text-gray-600 w-[600px] animate-marquee overflow-visible">Selamat Berkunjung di Marketplace-nya orang Bone! 
								<span className="text-green-900 font-medium ml-2">PasarBone.com</span></p>
						</div>
						<div className="flex justify-end">
							<div className="flex items-center gap-4">
								<select className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer">
									<option>USD</option>
									<option>EUR</option>
									<option>GBP</option>
								</select>
								<select className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer">
									<option>🇬🇧 ENG</option>
									<option>🇪🇸 ESP</option>
									<option>🇫🇷 FRA</option>
								</select>
							</div>
							<div className="w-8 mx-2 border-l-2"></div>
							<div className="hidden lg:flex gap-x-4">
								<a href="#" className="text-gray-600 hover:text-gray-900 transition">Blog</a>
								<a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact Us</a>
								<a href="#" className="text-gray-600 hover:text-gray-900 transition">My Account</a>
								<a href="#" className="text-gray-600 hover:text-gray-900 transition">🔒 Sign In / Register</a>
							</div>
						</div>
					</div>

    )
}