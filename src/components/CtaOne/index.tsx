import { Button } from "../ui/button";

export const CtaOne = () => {
  return (
    <section
      id="ctaOne"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          {/* <h2 className="text-3xl md:text-4xl font-bold "> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-0">
            Follow Our step by step approach to make
            Your Job Search{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Chaos Free
            </span>
          </h2>
          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
            sed!
          </p> */}
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Enroll Now</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};