import Link from 'next/link'
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export type FormularProps = SliceComponentProps<Content.FormularSlice>;


const Formular = ({ slice }: FormularProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div>
      <Link href="/about">{slice.primary.headline}</Link>
      <PrismicRichText field={slice.primary.body} />
    </div>
    </section>
  );
};

export default Formular;
