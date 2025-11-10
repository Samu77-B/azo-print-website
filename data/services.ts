import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  BookOpen,
  Brush,
  FileText,
  Gift,
  IdCard,
  Layers,
  Palette,
  Printer,
  ShoppingBag,
  SlidersHorizontal,
  SquareStack,
} from "lucide-react";

import bookBindingImage from "@/images/services images/book binding.png";
import cardsPostcardsImage from "@/images/services images/cards postcards.png";
import documentsReportsImage from "@/images/services images/documents reports.png";
import exhibitionDisplayImage from "@/images/services images/Exhibition & Display.png";
import flyersLeafletsImage from "@/images/services images/flyers leaflets.png";
import graphicDesignImage from "@/images/services images/graphic design.png";
import mugsTshirtsImage from "@/images/services images/mugs and tshirts.png";
import postersLargePrintsImage from "@/images/services images/posters large prints.png";
import printingCopyingImage from "@/images/services images/printing copying.png";
import specialPrintsFoilingEtcImage from "@/images/services images/special prints foiling etc.png";
import standsBannersImage from "@/images/services images/stands and banners.png";
import stationaryBusinessCardsImage from "@/images/services images/stationary business cards.png";

export type FeaturedService = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: StaticImageData;
};

export const featuredServices: FeaturedService[] = [
  {
    name: "Exhibition & Display",
    description:
      "Professional exhibition stands and display solutions for events and trade shows",
    href: "/services/exhibition-display",
    icon: SquareStack,
    image: exhibitionDisplayImage,
  },
  {
    name: "Flyers & Leaflets",
    description:
      "Eye-catching promotional materials designed to grab attention and drive results",
    href: "/services/flyers-leaflets",
    icon: Layers,
    image: flyersLeafletsImage,
  },
  {
    name: "Business Stationery",
    description:
      "Premium business cards and corporate stationery that represents your brand professionally",
    href: "/services/stationery-business-cards",
    icon: IdCard,
    image: stationaryBusinessCardsImage,
  },
  {
    name: "Cards & Postcards",
    description:
      "Custom greeting cards, invitations, and postcards for personal and business use",
    href: "/services/cards-postcards",
    icon: Gift,
    image: cardsPostcardsImage,
  },
  {
    name: "Posters & Large Prints",
    description:
      "Large format printing for posters, banners, and signage that makes a statement",
    href: "/services/posters-large-prints",
    icon: Brush,
    image: postersLargePrintsImage,
  },
  {
    name: "Book Binding & Slip Cases",
    description:
      "Professional book binding services and custom slip cases for reports and publications",
    href: "/services/book-binding",
    icon: BookOpen,
    image: bookBindingImage,
  },
  {
    name: "Printing & Copying",
    description:
      "High-quality printing and copying services for all your document needs",
    href: "/services/printing-copying",
    icon: Printer,
    image: printingCopyingImage,
  },
  {
    name: "Mugs, T-Shirts, Bags & More",
    description:
      "Custom branded merchandise including mugs, t-shirts, bags, and promotional items",
    href: "/services/mugs-tshirts",
    icon: ShoppingBag,
    image: mugsTshirtsImage,
  },
  {
    name: "Stands & Banners",
    description:
      "Exhibition stands, banners, and display materials for events and trade shows",
    href: "/services/stands-banners",
    icon: SlidersHorizontal,
    image: standsBannersImage,
  },
  {
    name: "Special Prints",
    description:
      "Specialty printing services including foiling, embossing, and unique finishes",
    href: "/services/special-prints",
    icon: Palette,
    image: specialPrintsFoilingEtcImage,
  },
  {
    name: "Documents & Reports",
    description:
      "Professional document printing and report binding services for businesses",
    href: "/services/documents-reports",
    icon: FileText,
    image: documentsReportsImage,
  },
  {
    name: "Graphic Design",
    description:
      "Expert graphic design services to bring your vision to life",
    href: "/services/graphic-design",
    icon: BadgePercent,
    image: graphicDesignImage,
  },
];


