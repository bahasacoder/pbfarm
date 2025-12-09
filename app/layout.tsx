import "@/styles/globals.css"
import { HeaderSection } from "@/components/layout/header-section";
import { FooterSection } from "@/components/layout/footer-section";

export default function DemoLayout({
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