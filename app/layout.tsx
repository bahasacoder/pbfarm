import "@/styles/globals.css"
import { HeaderSection } from "@/components/sections/header-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
	  
		<HeaderSection />
			{children}
	  	<FooterSection />
	  </body>
    </html>
  )
}
