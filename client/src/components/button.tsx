import { Button } from "../../components/ui/button";

type Tbutton = {
  title: string;
};

export default function CTAButton(props: Tbutton) {
  return (
    <Button
      asChild
      variant="outline"
      className="border-[#14a8e1]  dark:border-cornblue-500/80 text-[#14a8e1] hover:text-cornblue-500 group relative inline-flex rounded-full border font-semibold backdrop-blur hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <a
        target="_blank"
        href="/"
        className="font-semibold text-lg text-blue-500"
      >
        {props.title}
      </a>
    </Button>
  );
}
