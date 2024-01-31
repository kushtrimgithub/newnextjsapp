import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogCards`.
 */
export type BlogCardsProps = SliceComponentProps<Content.BlogCardsSlice>;

/**
 * Component for "BlogCards" Slices.
 */
const BlogCards = ({ slice }: BlogCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_cards (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogCards;