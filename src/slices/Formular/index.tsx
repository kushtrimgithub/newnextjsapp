import Link from 'next/link'
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { PrismicRichText } from '@prismicio/react';

import { createClient } from "@/prismicio";

/**
 * Props for `Formular`.
 */
export type FormularProps = SliceComponentProps<Content.FormularSlice>;

/**
 * Component for "Formular" Slices.
 */
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
