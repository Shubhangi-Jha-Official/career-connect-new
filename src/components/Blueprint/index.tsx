import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

Card
import { Steps, Response, Presentation } from "../icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Steps />,
    title: "Unlock Company Insights And Role Dynamics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <Response />,
    title: "Craft Engaging Responses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <Presentation />,
    title: "Master Your Presentation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  }
];


export const Blueprint = () => {
  return (
    <section
      id="blueprint"
      className="container text-center py-24 sm:py-32"
    >
      {/* <h2 className="text-3xl md:text-4xl font-bold "> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Welcome to the ultimate{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          interview success{" "}
        </span>
        blueprint
      </h2>
      {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};