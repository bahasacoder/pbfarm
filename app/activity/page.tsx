import Image from "next/image";
import Link from "next/link";
import { BreadCrumbContainer } from "@/components/page/breadcrumb-container";
import { TitlePage } from "@/components/page/title-page";
import Gallery from '@/components/page/gallery'


const gallerySections = [
  {
    images: [
      {
        src: 'https://github.com/bahasacoder/pbfarm/blob/main/public/gallery/20251130143015.jpg',
        alt: 'Coastal cliffs and ocean view'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: 'https://github.com/bahasacoder/pbfarm/blob/main/public/gallery/20251130143019.jpg',
        alt: 'Silhouettes on beach'
      },
      {
        src: 'https://github.com/bahasacoder/pbfarm/blob/main/public/gallery/20251130142851.jpg',
        alt: 'Snowy mountain peaks'
      },
      {
        src: 'https://github.com/bahasacoder/pbfarm/blob/main/public/gallery/20251130142328.jpg',
        alt: 'Rolling green hills'
      },
      {
        src: 'https://github.com/bahasacoder/pbfarm/blob/main/public/gallery/20251115053312.jpg',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-4.png',
        alt: 'Silhouettes on beach'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-3.png',
        alt: 'Snowy mountain peaks'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-2.png',
        alt: 'Rolling green hills'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-1.png',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-5.png',
        alt: 'Coastal cliffs and ocean view'
      }
    ]
  }
]


export default function Activity() {
  return (
	<Gallery sections={gallerySections} />	
  )
}	
