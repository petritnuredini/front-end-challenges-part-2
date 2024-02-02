export interface TestimonialProps {
  width: string;
  quotes?: boolean;
  image: string;
  name: string;
  position: string;
  backgroundColor: string;
  title: string;
  description: string;
}

export interface TestimonialsType {
  daniel: TestimonialProps;
  jonathan: TestimonialProps;
  jeanette: TestimonialProps;
  patrick: TestimonialProps;
  kira: TestimonialProps;
}
