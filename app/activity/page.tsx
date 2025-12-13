import Image from "next/image";
import Link from "next/link";
import { BreadCrumbContainer } from "@/components/page/breadcrumb-container";
import { TitlePage } from "@/components/page/title-page";
import Gallery from '@/components/page/gallery'


const gallerySections = [
  {
    images: [
      {
        src: './gallery/20251130142328.jpg',
        alt: 'Coastal cliffs and ocean view'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: './gallery/20251130143019.jpg',
        alt: 'Silhouettes on beach'
      },
      {
        src: './gallery/20251102172904.jpg',
        alt: 'Snowy mountain peaks'
      },
      {
        src: './gallery/20251130143015.jpg',
        alt: 'Rolling green hills'
      },
      {
        src: './gallery/20251115053312.jpg',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: './gallery/20251110052820.jpg',
        alt: 'Silhouettes on beach'
      },
      {
        src: './gallery/20251110052557.jpg',
        alt: 'Snowy mountain peaks'
      },
      {
        src: './gallery/20251130142851.jpg',
        alt: 'Rolling green hills'
      },
      {
        src: './gallery/20251102165533.jpg',
        alt: 'Sunset landscape'
      }
    ]
  },
  {
    images: [
      {
        src: './gallery/20251102165709.jpg',
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
